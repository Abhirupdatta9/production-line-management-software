<template>
<div>
  <v-img src="/bgall.jpg" width="100%" height="800px">
  <br><br><br><br><br>
  <v-row>
    <v-col cols="8" offset="2">
      <v-card class="px-5 py-8" elevation="5" outlined height="580" >
        <v-row>
          <v-col cols="4">
            <v-btn
            readonly
            dark color="#5e35b1"
            solo
            dense
          >Line Number : {{this.Line_id}}</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <!-- operator assign table -->
            <v-data-table
              :headers="headers"
              :items="stations"
              :items-per-page="5"
              class="elevation-5"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Operator Assign Table</v-toolbar-title>
                  
                </v-toolbar>
              </template>
              <template  v-slot:item.operator="{ item }">
                <v-btn v-if="item.assigned != true" dark color="#5e35b1" small  @click="assign(item.number)">Assign</v-btn>
                <template v-else>
                  
                  {{item.operator}}
                 
                </template>
              </template>
            </v-data-table>
          </v-col>

          <!-- operators table -->
          <v-col cols="6">
            <v-data-table
              v-model="selected"
              :headers="operator_headers"
              :items="operators"
              :items-per-page="5"
              class="elevation-1"
              :hidden="operators_hidden"
              item-key="email"
              show-select
              single-select
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Available Operators</v-toolbar-title>
                  <v-spacer></v-spacer>  
                               
                  <v-btn small dark color="#5e35b1" @click="done()">Done</v-btn>
                
                </v-toolbar>
              </template>
              
            </v-data-table>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  </v-img>
</div>
</template>

<script>
export default {
    // middleware: ['auth','incharge'],
    layout:'incharge',
    data: () => ({
      operators_hidden: true,
      selected: [],
      Line_id : '',
      station_no: '',
      operator: false,
      headers: [
          {
            text: 'Station no',
            align: 'start',
            sortable: false,
            value: 'number',
          },
          { text: 'Station name', value: 'name' },
          { text: 'Operator', value: 'operator' },
      ],
      operator_headers: [
          {
            text: 'Operator',
            align: 'start',
            sortable: false,
            value: 'email',
          },
          { text: 'Rating', value: 'rating' },
          // { text: 'Assign', value: 'assign' },
      ],
      stations: [
        {
          number: 'S01',
          name: 'Engine',
          operator: '' ,
          assigned: false, 
        },
        {
          number: 'S02',
          name: 'Seats',
          operator: '' , 
          assigned: false, 
        },
        {
          number: 'S03',
          name: 'Wheels',
          operator: '' , 
          assigned: false, 
        },
        {
          number: 'S04',
          name: 'Dashboard',
          operator: '' , 
          assigned: false, 
        },
        {
          number: 'S05',
          name: 'Steering Wheel',
          operator: '' , 
          assigned: false, 
        },
      ],  
      operators: []
    }),

    methods: {
      async assign(number) {
        try{
          this.operators_hidden = false
          this.station_no = number

          let response = await this.$axios.$get(`incharge/workdesk/${number}/${this.Line_id}`);
          this.operators = response.data
          // console.log(this.selected);
        }
        catch(error) {
          console.log(error)
        }
      },

      async done() {
        try{
          this.operators_hidden = true
          var sno = this.station_no

          this.stations.filter( function(station) {
            return station.number == sno
          })[0].operator = this.selected[0].email

          this.stations.filter( function(station) {
            return station.number == sno
          })[0].assigned = true
          
          var operator = this.stations.filter( function(station) {
            return station.number == sno
          })
          var selected_id = this.selected[0].email
          await this.$axios.$post(`assign-station/${this.station_no}/${selected_id}/${this.Line_id}`);

        }
        catch(error){
           console.log(error)
          // console.log(this.selected[0].email) 
        }         
      },

      setOperator(operator) {
        console.log(operator)
      }

    },

    async mounted(){
      let response = await this.$axios.$get(`/incharge/reports/${this.user.email}`);
      this.Line_id = response[0].Line_ID
    }

}
</script>

<style scoped>

</style>