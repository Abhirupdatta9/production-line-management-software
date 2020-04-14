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
                    <v-btn block outlined @click="start()">Accept</v-btn>
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
    data(){
        return{
          lineNumber:'',
          stationNumber:'',
          cycletime: '',
          scanVariable: '',
          
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

        }
    },
    methods : {
      generateId() {
        var min=1; 
        var max=10;  
        var random_part_id = Math.floor(Math.random() * (+max - +min)) + +min; 
        var random_sub_id = Math.floor(Math.random() * (+max - +min)) + +min; 
        // console.log("P00M1_"+random);
        this.part[0].value = random_part_id;
        this.subAssembly[0].value = random_sub_id;
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

    }
}
</script>

<style scoped>

</style>