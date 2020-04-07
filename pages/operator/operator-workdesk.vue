<template>
<div >
  <v-card outlined height:100>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs2>
                <v-text-field label="Line Number" v-model="lineNumber" required></v-text-field>
            </v-flex>
            <v-flex xs2>
                <v-text-field v-model="stationNumber" label="Station Number" required></v-text-field>
            </v-flex>
            <v-flex xs2 style="padding-top:'10px'">
                <v-btn @click="showlineStatus" color="#5e35b1" dark>Enter</v-btn>
            </v-flex>
     </v-layout>
    </v-container>
  </v-card>

  <v-card style="background-color: #5e35b1" height="390px" dark>
    <v-row>
      <v-col cols="4" offset="4">
        <v-card-text style="font-family:'roboto'; text-size:'2em'" v-if="entered" ><p class="display-1 text--primary">Welcome ! You are in station {{stationNumber}} of line {{lineNumber}}</p></v-card-text> 
      </v-col>
    </v-row>
    
    <br><br><br>
    <v-row>
      <v-col cols="2" offset="3">
        <v-btn block class="teal" dark >Scan Sub-Assembly</v-btn>
      </v-col>
    </v-row>
    <br>

    <v-row>
      <v-col cols="6" offset="3">
        <div class="text-center">
          <div>
            <v-btn class="ma-2" color="primary" dark>Scan Incoming Part
            </v-btn>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <v-btn class="ma-2" color="primary" dark>Accept
              <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
            </v-btn>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <v-btn class="ma-2" color="red" dark>Decline
              <v-icon dark right>mdi-cancel</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

  </v-card>
</div>
</template>

<script>
export default {
    layout:'operator/operator-dashboard',
    data(){
        return{
          lineNumber:'',
          stationNumber:'',
          entered:0
        }
    },
    methods : {
      showlineStatus(){
        this.entered=1
      }
    }
}
</script>

<style scoped>

</style>