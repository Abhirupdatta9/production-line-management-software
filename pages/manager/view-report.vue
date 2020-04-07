<template>
  <div>
    <br><br><br><br><br><br>
    <center><h1>Production Report</h1></center>
    <br><br>
    <v-row>
        <v-col cols="6" offset="1">
          <v-card>
            <v-data-table
              :headers="headers" 
              :items="requests" 
              item-key="name" 
              :items-per-page="5"
              class="elevation-1">
            </v-data-table>
          </v-card>
        </v-col>

        <v-col  cols="4">
          
            <v-card
                class="mx-auto text-center"
                color="#1DE9B6"
                
                width="100vw"
            >
                <v-card-text >
                <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                    :value="value"
                    color="rgba(255, 255, 255, .7)"
                    height="100"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                    >
                    <template v-slot:label="item">
                        ${{ item.value }}
                    </template>
                    </v-sparkline>
                </v-sheet>
                </v-card-text>

                <v-card-text>
                <div class="display-1 font-weight-thin">Production Last 24h</div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="justify-center">
                <v-btn block text>Go to Report</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
      
      
    </v-row>
  </div>
</template>

<script>
  export default {
    layout:'manager',
    data: () => ({
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
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
    }),
  }
</script>