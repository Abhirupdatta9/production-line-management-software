
<template>
  <div style="margin-top:50px;background-color:#E8E8E8" class="pa-8" >
      <v-row>

          <v-col>
            <div class="v-card--material 
            pa-3 v-card--material-chart 
            v-card v-sheet theme--light 
            v-card--material--has-heading" 
            hover-reveal="">
            <div class="text-start v-card--material__heading mb-n6 v-sheet 
            theme--dark elevation-6 pa-7" style="width: 100%; height:270px; background-color: rgb(233, 30, 99); border-color: rgb(233, 30, 99);">
            
            <div id="chart">
              <apexchart type="line" height="200" :options="chartOptions" :series="series"></apexchart>
            </div>
            
            </div>
            <v-card height="100">
                <v-card-title> Producitivity Report </v-card-title>
                <v-card-subtitle>{{this.Line_id}}</v-card-subtitle>
                <!-- <v-btn text style="margin-top:-30px" @click="func_pro()">Know more</v-btn> -->
              
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
            theme--dark elevation-6 pa-7" style="width: 100%; height:270px; background-color: #00cae3; border-color: #00cae3;">
            
            <div>
              <apexchart height="200" type="bar" :options="barchartOptions" :series="barseries"></apexchart>
            </div>
            
            </div>
            <v-card height="100">
                <v-card-title> Part Quality Report </v-card-title>
                <v-card-subtitle>Description</v-card-subtitle>
                <!-- <v-btn text style="margin-top:-30px" @click="func_part()">Know more</v-btn> -->
              
            </v-card>
            </div>

          </v-col>
      </v-row>
       <v-row>
        <v-col offset="1">
            <v-card style="margin-left:20px; " width="350" height="120">
            <v-row>
                   <v-col> <v-img height="100" style="margin-left:10px" width='100' src="/rejection.png"></v-img> </v-col>
                    <v-col> <v-card-title class="display-2">{{this.per_rej}}%</v-card-title>
                    <v-card-text small>% Rejections</v-card-text></v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col>
            <v-card style="margin-left:20px" width="350" height="120">
            <v-row>
                   <v-col> <v-img height="100" style="margin-left:10px" width='100' src="/car.png"></v-img> </v-col>
                    <v-col> <v-card-title class="display-2">{{this.tot}}</v-card-title>
                    <v-card-text small>Total Assemblies</v-card-text></v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col>
            <v-card style="margin-left:20px" width="350" height="120">
            <v-row>
                   <v-col> <v-img height="100" style="margin-left:10px" width='100' src="/time.png"></v-img> </v-col>
                    <v-col> <v-card-title class="display-2">250</v-card-title>
                    <v-card-text small>Average Deviation</v-card-text></v-col>
            </v-row>
            </v-card>
        </v-col>
      </v-row>
      <v-row class="mb-12">
        <v-col>
            <v-data-table
              :headers="headersProductivity"
              :items="productivity_model1"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Productivity Table</v-toolbar-title>
                </v-toolbar>
              </template>
            </v-data-table>
        </v-col>
        <v-col>
            <v-data-table
              :headers="headersPart"
              :items="part_quality"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Part Quality Table</v-toolbar-title>
                </v-toolbar>
              </template>
            </v-data-table>
        </v-col>
      </v-row>
  </div>
</template>

<script>

export default {
  // middleware: ['auth','manager'],
  layout:'incharge',
  data: () => ({
    productivity_model1:[], //line graph
    productivity_model2:[], //line graph combined with previous
    line_quality:[], //piechart
    part_quality:[], //bar graph
    Line_id:"L01",
    sct_model1:{},
    sct_model2:{},
    pieUpdated: [],
    barUpdated: [],
    lineUpdated1: [],
    lineUpdated2: [],
    per_rej:"",
    tot:"",

    headersPart: [
                {
                    text: 'Station ID',
                    align: 'start',
                    sortable: false,
                    value: 'Station_ID',
                },
                { text: 'Rejections', value: 'Rejections' },
            ],

    headersProductivity: [
                {
                    text: 'Station ID',
                    align: 'start',
                    sortable: false,
                    value: 'Station_ID',
                },
                { text: 'Avg Cycle time', value: 'Avg' },
            ],

    chartOptions: {
      chart: {
        id: 'vuechart-example',
      },
      xaxis: {
        categories: ['Station 1','Station 2','Station 3','Station 4','Station 5'],
      },
    },
    series: [
            {
              name: "Model 1",
              data: [25,20,30,32,19]
            },
            {
              name: "Model 2",
              data: [18,14,16,8,10]
            }
    ],

    //pie chart
    pieseries: [44, 55, 13, 33],
    piechartOptions: {
      chart: {
              width: 380,
              type: 'donut',
            },
            dataLabels: {
              enabled: false
            },
            // responsive: [{
            //   breakpoint: 480,
            //   options: {
            //     chart: {
            //       width: 200
            //     },
            //     legend: {
            //       show: false
            //     }
            //   }
            // }],
            legend: {
              position: 'right',
              offsetY: 0,
              height: 230,
            }
      },        

    //bar chart
    barchartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: ['Station 1','Station 2','Station 3','Station 4','Station 5'],
          },
        },
        barseries: [{
          name: 'series-1',
          data: [1, 2, 4, 3, 5]
        }]
          
  }),     

methods:{
  async func_pro(){
    try{
    var Lid=this.Line_id;
    let response1 = await this.$axios.$get(`/reports/productivity/${Lid}`);
    this.productivity_model1 = response1.data;
    console.log(this.productivity_model1);
    let response2 = await this.$axios.$get(`/reports/productivity2/${Lid}`);
    this.productivity_model2 = response2.data;
    console.log(this.productivity_model2);
    }
    catch(error)
    {
      console.error();
      
    } 
  },
  async func_line(){
    try{
    let response1 = await this.$axios.$get(`/reports/LineQuality`);
    this.line_quality = response1.data;
    console.log(this.line_quality);
    }
    catch(error)
    {
      console.error();
      
    }
    
  },
  async func_part(){
    try{
    var Lid=this.Line_id;
    let response = await this.$axios.$get(`/reports/PartQuality/${Lid}`);
    this.part_quality = response.data;
    console.log(this.part_quality);
    }
    catch(error)
    {
      console.error();
    }
  },

  assignData() {
    this.productivity_model1.forEach( (element) => { this.series[0].data.push(100) });
    this.productivity_model1.forEach( (element) => { this.series[1].data.push(200) });
    this.chartOptions = {
      chart: {
        id: 'vuechart-example',
      },
      xaxis: {
        categories: ['Station 1','Station 2','Station 3','Station 4','Station 5'],
      },
    }      
  },

  lineUpdate() {
    this.productivity_model1.forEach( (l1) => { let t1 = parseInt(l1.Avg);  this.lineUpdated1.push(t1) } )
    this.productivity_model2.forEach( (l2) => { let t2 = parseInt(l2.Avg);  this.lineUpdated2.push(t2) } )
    console.log("l")
    console.log(this.lineUpdated1)
    console.log(this.lineUpdated2)
    console.log("l")
    this.series = [{ data: this.lineUpdated1},{ data: this.lineUpdated2}] 
  },

  pieUpdate() {
    
    this.line_quality.forEach( (e) => { let t = parseInt(e.Rejections);  this.pieUpdated.push(t) } )
    console.log(this.pieUpdated)
    this.pieseries = this.pieUpdated
    
  }, 
  
  barUpdate() {
    this.part_quality.forEach( (part) => { let p = parseInt(part.Rejections);  this.barUpdated.push(p) } )
    console.log("k")
    console.log(this.barUpdated)
    console.log("k")
    this.barseries = [{ data: this.barUpdated}] 
 
  },
  async percent_rej(){
    try{
    let response_rej = await this.$axios.$get(`/reports/percentage_rej`);
    this.per_rej = (parseInt(response_rej.data[0].rej)/response_rej.data[0].tot)*100;
    //console.log(response_rej.data[0].rej);
    console.log(this.per_rej);
    }
    catch(error)
    {
      console.error();
      
    }
  },
  async total_subAssembly(){
    try{
    let response = await this.$axios.$get(`/reports/total_subassembly`);
    this.tot = (parseInt(response.data[0].Total));
    //console.log(response_rej.data[0].rej);
    console.log(this.tot);
    }
    catch(error)
    {
      console.error();
      
    }
  }

},

mounted: function () {
  this.$nextTick(async function () {
       this.func_pro()  
       this.func_line()
       this.func_part()
       this.assignData()
       this.percent_rej()
       this.total_subAssembly()
       setTimeout(this.lineUpdate,5000)
       setTimeout(this.pieUpdate,3000)
       setTimeout(this.barUpdate,5000)
  })      
}
}
</script>

<style>

</style>