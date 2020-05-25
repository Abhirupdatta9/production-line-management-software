
<template>
  <div style="margin-top:50px;background-color:#E8E8E8" >
      <v-row>

          <v-col>
            <div class="v-card--material 
            pa-3 v-card--material-chart 
            v-card v-sheet theme--light 
            v-card--material--has-heading" 
            hover-reveal="">
            <div class="text-start v-card--material__heading mb-n6 v-sheet 
            theme--dark elevation-6 pa-7" style="width: 100%; height:180px; background-color: rgb(233, 30, 99); border-color: rgb(233, 30, 99);">
                <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>      
            </div>
            <v-card height="100">
                <v-card-title> Producitivity Report </v-card-title>
                <v-card-subtitle>Description</v-card-subtitle>
                <v-btn text style="margin-top:-30px">Know more</v-btn>
              
            </v-card>
            </div>
            
          </v-col>
          <v-col>
            <div class="v-card--material 
            pa-3 v-card--material-chart 
            v-card v-sheet theme--light 
            v-card--material--has-heading" 
            hover-reveal="">
            <div class="text-start v-card--material__heading mb-n6 v-sheet 
            theme--dark elevation-6 pa-7" style="width: 100%; height:180px; background-color: #4caf50; border-color: #4caf50;">
            </div>
            <v-card height="100">
                <v-card-title> Line Quality Report </v-card-title>
                <v-card-subtitle>Description</v-card-subtitle>
                <v-btn text style="margin-top:-30px">Know more</v-btn>
              
            </v-card>
            </div>

          </v-col>
          <v-col>
            <div class="v-card--material 
            pa-3 v-card--material-chart 
            v-card v-sheet theme--light 
            v-card--material--has-heading" 
            hover-reveal="">
            <div class="text-start v-card--material__heading mb-n6 v-sheet 
            theme--dark elevation-6 pa-7" style="width: 100%; height:180px; background-color: #00cae3; border-color: #00cae3;">
                <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
            </div>
            <v-card height="100">
                <v-card-title> Part Quality Report </v-card-title>
                <v-card-subtitle>Description</v-card-subtitle>
                <v-btn text style="margin-top:-30px">Know more</v-btn>
              
            </v-card>
            </div>

          </v-col>
      </v-row>
      <v-row>
        <v-col>
            <v-card style="margin-left:20px; " width="250" height="120">
            <v-row>
                   <v-col> <v-img height="100" style="margin-left:10px" width='100' src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img> </v-col>
                    <v-col> <v-card-title class="display-2">250</v-card-title>
                    <v-card-text>Desciption 1</v-card-text></v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col>
            <v-card style="margin-left:20px" width="250" height="120">
            <v-row>
                   <v-col> <v-img height="100" style="margin-left:10px" width='100' src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img> </v-col>
                    <v-col> <v-card-title class="display-2">250</v-card-title>
                    <v-card-text>Desciption 1</v-card-text></v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col>
            <v-card style="margin-left:20px" width="250" height="120">
            <v-row>
                   <v-col> <v-img height="100" style="margin-left:10px" width='100' src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img> </v-col>
                    <v-col> <v-card-title class="display-2">250</v-card-title>
                    <v-card-text>Desciption 1</v-card-text></v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col>
            <v-card style="margin-left:20px" width="250" height="120">
            <v-row>
                   <v-col> <v-img height="100" style="margin-left:10px" width='100' src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img> </v-col>
                    <v-col> <v-card-title class="display-2">250</v-card-title>
                    <v-card-text>Desciption 1</v-card-text></v-col>
            </v-row>
            </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
            <v-data-table
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Table1</v-toolbar-title>
                </v-toolbar>
              </template>
            </v-data-table>
        </v-col>
        <v-col>
            <v-data-table
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Table2</v-toolbar-title>
                </v-toolbar>
              </template>
            </v-data-table>
        </v-col>
      </v-row>
  </div>
</template>

<script>

export default {
//     import VueApexCharts from "vue-apexcharts";
layout:'manager',
//     components: {
//           apexchart: VueApexCharts,
//         },
//         data: {
          
//           options: {
//         chart: {
//           id: 'vuechart-example'
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
//         }
//       },
//       series: [{
//         name: 'series-1',
//         data: [30, 40, 45, 50, 49, 60, 70, 91]
//       }]
          
          
        // },
}
</script>

<style>

</style>