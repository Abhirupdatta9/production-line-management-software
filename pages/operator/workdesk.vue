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
          <v-btn block outlined >Start scanning</v-btn>
        </v-col>
        <v-col >
          <v-btn block outlined>Stop scanning</v-btn>
        </v-col>
      </v-row>


      <v-card outlined height="600px" class="pa-5">
        <center><p class="display-1 font-weight-light">Scan Interface</p></center>
        <v-container>
          <v-row>

            <v-col>
              <v-card outlined class=" px-5 py-3" height="400px">
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
                    <v-btn block outlined>Accept</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn block outlined>Reject</v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col>
              <v-card outlined class="px-5 py-3" height="400px">
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

          part: [
            {
              label: "Incoming part name",
              value: "Steering wheel"
            },
            {
              label: "Incoming part id",
              value: "ST_nano_101"
            },
          ],

          subAssembly: [
            {
              label: "Incoming subassembly model",
              value: "Nano"
            },
            {
              label: "Incoming subassembly ID",
              value: "Nan_C1024_mcq"
            },
          ]


        }
    },
    methods : {
    
    }
}
</script>

<style scoped>

</style>