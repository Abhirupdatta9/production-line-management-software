<template>
    <div>
        
      <br><br>
      <v-img src="/bgall.jpg" width="100%" height="700px">
      <br><br><br>
      <!-- <v-row>
        <v-btn small color="error" @click="buzzer_details()">View Errors</v-btn>
      </v-row> -->
      
      <v-row>
          
          <v-col cols="8"  offset="2">
            <v-card>
            <v-row>
             <v-col offset="4">
                        <v-btn
                        readonly
                        dark color="#5e35b1"
                        solo
                        dense>
                        Errors for Line Number : {{this.Lid}}</v-btn>
             </v-col>
            </v-row>
        <v-data-table
              :headers="headers"
              :items="buzzers"
              :items-per-page="5"
            >
            <!-- <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Errors for Line L01</v-toolbar-title>
                  
                </v-toolbar>
              </template> -->
              <!-- <template  v-slot:item.seen="{ item }">
                <v-btn v-if="item.seen === 0" small outlined @click="seen_notification(item.sno)">Check</v-btn>
              </template> -->
        </v-data-table>
                  </v-card>
          </v-col>

      </v-row>
      </v-img>
    </div>
</template>
<script>

export default {
   layout:'incharge',
       data() {
        return{
      headers: [
          {
            text: 'S.No.',
            align: 'start',
            sortable: false,
            value: 'sno',
          },
          { text: 'Time', value: 'time' },
          { text: 'Station ID', value: 'station_id' },
          { text: 'Operator ID', value: 'operator_id' },
          // { text: 'Seen', value: 'seen' },
      ],
      Lid:'',
      buzzers: [
      ],  
}},

    async mounted(){
      //dynamically fetching line ID
        let res = await this.$axios.$get(`/incharge/reports/${this.user.email}`);
        this.Lid = res[0].Line_ID

      //buzzer 
        let response = await this.$axios.$get(`/buzzer/display/${this.Lid}`);
        console.log(response.data)
        response.data.forEach(error => {
                    this.buzzers.push(
                        {
                          sno: error.sno,
                          time: error.time,
                          station_id: error.station_id,
                          operator_id: error.operator_id,
                          seen: error.seen,
                        }
                    )
                });
        let count = 1;
        this.buzzers.forEach(i => {i.sno = count; count++})
        
        console.log(this.buzzers);
        
      },
      // seen_notification(sno){
      //   this.buzzers.seen=1;
      //   console.log(this.buzzers.seen);
      // }
    }
</script>
<style>

</style>