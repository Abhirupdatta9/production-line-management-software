<template>
  <v-row>
    <v-col cols="8" offset="2">
      <br><br><br><br><br>
      <v-row>
        <v-col>
          <v-btn block outlined @click="stno(user.email)">Get details</v-btn>
        </v-col>
      </v-row>
      <v-row>

        <v-col >
          <v-text-field
            :value="this.Line_ID"
            outlined
            dense
            solo
            readonly
          ></v-text-field>
        </v-col>
        <v-col >
          <v-text-field
          :value="this.Station_ID"
            outlined
            dense
            solo
            center
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col >
          <v-btn block outlined @click="buzzer()">Report error</v-btn>
        </v-col>
        <v-col >
          <v-btn block outlined @click="start()">Start scanning</v-btn>
        </v-col>
        <v-col >
          <v-btn block outlined @click="clear()">Stop scanning</v-btn>
        </v-col>
      </v-row>
      <v-row>
          <v-col>
          <v-alert v-if="alert" prominent type="error" v-model="alert" close-text="Close Alert" dismissible>
          <v-row align="center">
            <v-col class="grow">Error has been reported.</v-col>
          </v-row>
        </v-alert>
        </v-col>
      </v-row>

      <!-- scan interface card -->
      <v-card outlined height="380px" class="pa-5">
        <center><p class="display-1 font-weight-light">Scan Interface</p></center>
        <v-container>
          <v-row>

            <!-- subassembly card -->
            <v-col>
              <v-card outlined class="px-5 py-3" height="230px">
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
            
            <!-- incoming part card -->
            <v-col>
              <v-card outlined class=" px-5 py-3" height="230px">
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
              </v-card>
            </v-col>
            
            

          </v-row>
        </v-container>
      </v-card>
      <v-row>
                  <v-col>
                    <v-btn block outlined @click="updateScanDetails()">Accept</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn block outlined @click="reject_part()">Reject</v-btn>
                  </v-col>
                </v-row>
      
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
          alert: false,
          model_number:'',
          Station_ID:"S01",
          Line_ID:"L01",
          details:{
            
          },
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
            L_ID: "L01",
            Station_ID : "S01",
            T1 : "",
            T2 : "",
            Cycle_Time: "",
            Reject : "0"
          },
          buzzerDetails: {
            Line_ID: "L01",
            Station_ID:"S01",
            Operator_ID:"op0101@xyz.com",
          }

        }
    },

    methods : {
      async stno(operator_id) {
        try{
          let response = await this.$axios.$get(`operator/workdesk/${operator_id}`);
          this.details = response.data
          console.log(this.details);

          // console.log(response)
        }
        catch(error){
          console.log(error)
        }
      },

      async buzzer(){
        await this.$axios.$post('buzzer',this.buzzerDetails)
        this.alert=true;
        this.stop();
      },
      stationId_to_Number(){
        this.stationNumber=this.Station_ID.substring(1,3);
      },
      generateId_subAssembly() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        this.scanData.T1=dateTime;
        this.model_number=Math.ceil(Math.random() * 2);
        var min=100; 
        var max=150;  
        var random_sub_id = Math.floor(Math.random() * (+max - +min)) + +min; 
        this.subAssembly[0].value = "P00M"+this.model_number+random_sub_id;
        this.scanData.Sub_Assembly_ID = "P00M" +this.model_number+ random_sub_id;
        this.subAssembly[1].value = 'Nano';
        this.generateId_part();
      },
        generateId_part() {
        var min=100; 
        var max=999;  
        this.stationId_to_Number();
        var random_part_id = Math.floor(Math.random() * (+max - +min)) + +min; 
        this.part[0].value = "P"+this.stationNumber+"M"+this.model_number+random_part_id;
        this.scanData.Part_ID = "P"+this.stationNumber+"M"+this.model_number+random_part_id;
        this.stop();
      },
      reject_part(){
        this.scanData.Reject=1;
        this.updateScanDetails();
        this.generateId_part();
      },

      start() {
        this.scanVariable = setInterval(this.generateId_subAssembly, 2000)
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
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        this.scanData.T2=dateTime;
        this.scanData.cycletime=this.scanData.T2-this.scanData.T1;
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