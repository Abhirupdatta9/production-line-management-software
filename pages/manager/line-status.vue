<template>
<v-container fluid>
    <v-row>
        <v-col cols="8" offset="2">
            <br><br><br><br>
            <v-card  width="80vw" > 
                <v-card-title>
                Line Status
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    prepend-icon="mdi-search"
                    label="Search line no"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="requests"
                :search="search"
                :items-per-page="5"
                
                ></v-data-table>
            </v-card>
        </v-col>
    </v-row>
    
       
  
</v-container>
</template>

<script>
  export default {
    layout:'manager',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Line no',
            align: 'left',
            sortable: false,
            value: 'line_no',
          },
          { text: 'Line name', value: 'line_name' },
          { text: 'Station no', value: 'station_no' },
          { text: 'Station name', value: 'station_name' },
          { text: 'Description', value: 'description' },
        
        ],
        requests: [
          {
            line_no: '1',
            line_name: 'Nano production',
            station_no: '3',
            station_name: 'Wheels',
            description: 'wheels assembly station',
           
          },
          {
            line_no: '2',
            line_name: 'Scorpio production',
            station_no: '4',
            station_name: 'Wheels',
            description: 'wheels assembly station',
           
          },
          {
            line_no: '3',
            line_name: 'Indica production',
            station_no: '2',
            station_name: 'Wheels',
            description: 'wheels assembly station',
           
          },
          {
            line_no: '4',
            line_name: 'Zest production',
            station_no: '3',
            station_name: 'Wheels',
            description: 'wheels assembly station',
           
          },
          {
            line_no: '5',
            line_name: 'Innova production',
            station_no: '5',
            station_name: 'Wheels',
            description: 'wheels assembly station',
           
          },
        ],
      }
    },
  }
</script>