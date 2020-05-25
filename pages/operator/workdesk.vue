<template>
  <v-row>
    <v-col cols="8" offset="2">
      <br><br><br><br><br>
      <v-row>
        <v-col >
          <v-text-field
            value="Line Number : 1"
            outlined
            dense
            readonly
          ></v-text-field>
        </v-col>
        <v-col >
          <v-text-field
            value="Station Number : 4"
            outlined
            dense
            readonly
          ></v-text-field>
        </v-col>
        <v-col >
          <v-btn block outlined >Report error</v-btn>
        </v-col>
        <v-col >
          <v-btn block outlined @click="start()">Start scanning</v-btn>
        </v-col>
        <v-col >
          <v-btn block outlined @click="clear()">Stop scanning</v-btn>
        </v-col>
      </v-row>

      <!-- scan interface card -->
      <v-card outlined height="450px" class="pa-5">
        <center><p class="display-1 font-weight-light">Scan Interface</p></center>
        <v-container>
          <v-row>
            
            <!-- incoming part card -->
            <v-col>
              <v-card outlined class=" px-5 py-3" height="300px">
                <center><h2 class="font-weight-light">Incoming Part</h2></center>
                <br>
                <v-row dense v-for="item in part" :key="item" >
                  <v-col>
                    <v-text-field 
                      :label="item.label"
                      :value="item.value"
                      dense
                      outlined
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn block outlined @click="updateScanDetails()">Accept</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn block outlined @click="start()">Reject</v-btn>
                  </v-col>
                </v-row>
                
              </v-card>
            </v-col>

            <!-- subassembly card -->
            <v-col>
              <v-card outlined class="px-5 py-3" height="300px">
                <center><h2 class="font-weight-light">Subassembly</h2></center>
                <br>
                <v-row dense v-for="item in subAssembly" :key="item" >
                  <v-col>
                    <v-text-field
                      :label="item.label"
                      :value="item.value"
                      dense
                      outlined
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

          </v-row>
        </v-container>
      </v-card>
      
    </v-col>
  </v-row>
</template>

<script>
export default {

    layout:'operator',
    data() {
        return{
          lineNumber:'',
          stationNumber:'',
          cycletime: '',
          scanVariable: '',
          email:'',
          
          part: [
            {
              label: "Incoming part id",
              value: '',
              timestamp: '',
            },
            {
              label: "Incoming part name",
              value: 'Engine',
              timestamp: '',
            },
          ],
          subAssembly: [
            {
              label: "Incoming subassembly id",
              value: '',
              timestamp: '',
            },
            {
              label: "Incoming subassembly model",
              value: '',
              timestamp: '',
            }
          ],

          scanData : {
            Sub_Assembly_ID: "",
            Part_ID: "",
            L_ID: "1",
            Station_ID : "4",
            T1 : "2020-04-07 12:10:56.333",
            T2 : "2020-04-07 12:10:56.333",
            Cycle_Time: "12:10:56.333",
            Reject : "0"
          }

        }
    },

    methods : {
      generateId() {
        var min=1; 
        var max=10;  
        var random_part_id = Math.floor(Math.random() * (+max - +min)) + +min; 
        var random_sub_id = Math.floor(Math.random() * (+max - +min)) + +min; 
        this.part[0].value = "P04M1_" + random_part_id;
        this.scanData.Part_ID = "P04M1_" + random_part_id;
        this.subAssembly[0].value = "P00M1_" + random_sub_id;
        this.scanData.Sub_Assembly_ID = "P00M1_" + random_sub_id;
        this.subAssembly[1].value = 'Nano';
        this.stop();
      },

      start() {
        this.scanVariable = setInterval(this.generateId, 2000)
      },
      stop() {
        clearInterval(this.scanVariable)
      },
      clear() {
        this.stop();
        this.part[0].value = '';
        this.subAssembly[0].value = '';
        this.subAssembly[1].value = '';
        
      },

      async updateScanDetails() {
        await this.$axios.$post('scan-details', this.scanData);
        this.start();
      },
    },

    mounted: function (){
      this.$nextTick(async function () {
        let response = await this.$axios.$get(`/operator/workdesk/${this.email}`);
        // this.lineNumber = response.data
        // this.stationNumber = response.data
        console.log(response.Line_ID)
      })
    }
}
</script>

<style scoped>

</style>