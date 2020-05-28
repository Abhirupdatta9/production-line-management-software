<template>
    <v-container>
      <br><br><br><br>
      <!-- <v-row>
        <v-btn small color="error" @click="buzzer_details()">View Errors</v-btn>
      </v-row> -->
      <v-row>
        <v-data-table
              :headers="headers"
              :items="buzzers"
              class="elevation-2"
            >
            <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Errors for Line L01</v-toolbar-title>
                  
                </v-toolbar>
              </template>
              <!-- <template  v-slot:item.seen="{ item }">
                <v-btn v-if="item.seen === 0" small outlined @click="seen_notification(item.sno)">Check</v-btn>
              </template> -->
        </v-data-table>
      </v-row>
    </v-container>
</template>
<script>

export default {
  middleware: ['auth','incharge'],
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
           { text: 'Seen', value: 'seen' },
      ],
      Lid:'L01',
      buzzers: [
        // {
        //   sno:1,
        //   time:'2020.03.12 12:17:00',
        //   station_id:'S01',
        //   operator_id:'op0101@xyz.com',
        //   seen:0,
        // }
      ],  
}},

       async mounted(){
        var Lid=this.Lid;
        let response = await this.$axios.$get(`/buzzer/display/${Lid}`);
        this.buzzers.sno = response.data[0].sno;
        this.buzzers.station_id = response.data[0].station_id;
        this.buzzers.seen=response.data[0].seen;
        this.buzzers.time = response.data[0].time;
        this.buzzers.operator_id = response.data[0].operator_id;
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