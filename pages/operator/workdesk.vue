<template>
<div>
<br><br>
<v-img src="/bgall.jpg" width="100%" height="1000px">
  <v-row>
    <v-col cols="8" offset="2">
      <br><br><br><br><br>
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
          <v-btn block dark color="#5e35b1"  @click="buzzer(user.email)">Report error</v-btn>
        </v-col>
        <v-col >
          <v-btn block dark color="#5e35b1" @click="start()">Start scanning</v-btn>
        </v-col>
        <v-col >
          <v-btn block dark color="#5e35b1" @click="clear()">Stop scanning</v-btn>
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
      <v-card outlined elevation="5" height="380px" class="pa-5">
        <center><p class="display-1 font-weight-light">Scan Interface</p></center>
        <v-container>
          <v-row>

            <!-- subassembly card -->
            <v-col>
              <v-card outlined elevation="5" class="px-5 py-3" height="230px">
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
              <v-card outlined  elevation="5" class=" px-5 py-3" height="230px">
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
          <v-btn block dark color="#5e35b1" @click="updateScanDetails()">Accept</v-btn>
        </v-col>
        <v-col>
          <v-btn block dark color="#5e35b1" @click="reject_part()">Reject</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</v-img>
</div>
  
</template>

<script>
export default {
    middleware: ['auth'],
    layout:'operator',
    data() {
        return{
          lineNumber:'',
          stationNumber:'',
          cycletime: '',
          scanVariable: '',
          details:{},
          alert: false,
          model_number:'',
          Station_ID:'',
          Line_ID:'',
          Op_ID:'',
          
          part: [
            {
              label: "Incoming part id",
              value: '',
              timestamp: '',
            },
            {
              label: "Incoming part type",
              value: '',
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
            Line_ID: '',
            Station_ID: '',
            Operator_ID:'',
          },
          t1:"",
          t2:"",

        }
    },

    methods : {

      async part(){
        try{
          let response = await this.$axios.$get(`operator/${this.Station_ID}`);
          this.part.subAssembly[1].value = response.data
        }
        catch(error){
          console.log(error)
        }
      },

      async buzzer(email){
        console.log(this.buzzerDetails);
        this.buzzerDetails.Operator_ID = email
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
        this.t1 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+this.t1;
        this.scanData.T1=dateTime;
        this.model_number=Math.ceil(Math.random() * 2);
        var min=100; 
        var max=110;  
        var random_sub_id = Math.floor(Math.random() * (+max - +min)) + +min; 
        this.subAssembly[0].value = "P00M"+this.model_number+random_sub_id;
        this.scanData.Sub_Assembly_ID = "P00M" +this.model_number+ random_sub_id;
         if (this.model_number===1) {
          this.subAssembly[1].value = 'Model 1';
        } else {
          this.subAssembly[1].value = 'Model 2';
        }
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
        this.t2 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+this.t2;
        this.scanData.T2=dateTime;
        var a = this.t1.split(':');
        var b = this.t2.split(':');
        this.t1 = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
        this.t2 = (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]); 
        this.scanData.Cycle_Time=Math.abs(this.t2 - this.t1);
        console.log(this.scanData.T2);
        console.log(this.scanData.T1);
        console.log(this.scanData.Cycle_Time);
        await this.$axios.$post('/scan-details', this.scanData);
        this.start();
      },

    
    },

    async mounted(){
        let response = await this.$axios.$get(`/operator/workdesk/${this.user.email}`);
        this.Line_ID = response.data[0].Line_ID
        this.Station_ID = response.data[0].Station_ID

        this.buzzerDetails.Line_ID = response.data[0].Line_ID
        this.buzzerDetails.Station_ID = response.data[0].Station_ID

        let res = await this.$axios.$get(`operator/${this.Station_ID}`);
        this.part[1].value = res.data[0].part
        console.log(res.data[0].part)
      }
}
</script>

<style scoped>

</style>