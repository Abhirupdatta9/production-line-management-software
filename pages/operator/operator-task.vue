<template>
<div style="font-family:'roboto'; text-szie:'30px'">
<br><br><br><br><br>
<v-row>
  <v-col cols="8" offset="2" >
    <v-card color="#26c6da">
      <v-data-table v-model="selected" :headers="headers" :items="tasks" item-key="serial_no" show-select class="elevation-10 mx-auto" outlined>
      </v-data-table>
    </v-card> 
  </v-col>
</v-row>
</div>
</template>

<script>
export default {
    layout:'operator/operator-dashboard',
    data () {
      return {
        selected: [],
        headers: [
          { text: 'Serial', value: 'serial_no', sortable: false, width: 50},
          { text: 'Line Number', align: 'start', value: 'line_no', sortable: false},
          { text: 'Station Number', align: 'start', value: 'station_no', sortable: false},
          { text: 'Work Description',align: 'start',  value: 'desc', sortable: false},
        ],
        tasks: [
          {
            serial_no: 1,
            line_no: 5,
            station_no: 4,
            desc : "Attaching wheels"
          },
          {
            serial_no: 2,
            line_no: 5,
            station_no: 4,
            desc : "Attaching wheels"
          },
          {
            serial_no: 3,
            line_no: 5,
            station_no: 4,
            desc : "Attaching wheels"
          },
          {
            serial_no: 4,
            line_no: 5,
            station_no: 4,
            desc : "Attaching wheels"
          },
          {
            serial_no: 5,
            line_no: 5,
            station_no: 4,
            desc : "Attaching wheels"
          },
        ],
      }
    },
    methods:{
        deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.tasks.splice(index, 1)
      },
    }
  }

</script>

<style scoped>

</style>