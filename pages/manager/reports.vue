
<template>

  <div style="margin-top:50px;background-color:#E8E8E8" class="pa-8" >
    <!-- <v-img src="/bgall.jpg" width="100%" height="1000px"> -->
      <v-row>

          <v-col>
            <div class="v-card--material 
            pa-3 v-card--material-chart 
            v-card v-sheet theme--light 
            v-card--material--has-heading" 
            hover-reveal="">
            <div class="text-start v-card--material__heading mb-n6 v-sheet 
            theme--dark elevation-6 pa-7" style="width: 100%; height:270px; background-color: #F8BBD0; border-color: rgb(233, 30, 99);">
            
            <div id="chart">
              <apexchart type="line" height="200" :options="chartOptions" :series="series" ></apexchart>
            </div>
            
            </div>
            <v-card height="100">
                <v-card-title> Producitivity Report </v-card-title>
                <!-- <v-card-subtitle>{{this.Line_id}}</v-card-subtitle> -->
                <v-row>
                  <v-col>
                    <v-row>
                      <v-col><v-text-field small dense label="Line Id  " outlined style="margin-top:-35px; margin-left:16px"  v-model="Line_id_new"></v-text-field></v-col>
                    <v-col><v-btn small style="margin-top:-55px; margin-right:-50px" @click="change_lid_prod()">Submit</v-btn></v-col></v-row>
                  </v-col>
                </v-row>
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
            theme--dark elevation-6 pa-7" style="width: 100%; height:270px; background-color: #A5D6A7; border-color: #4caf50;">
            
            <div>
              <apexchart type="pie" width="300" :options="piechartOptions" :series="pieseries"></apexchart>
            </div>

            </div>
            <v-card height="100">
                <v-card-title> Line Quality Report </v-card-title>              
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
            theme--dark elevation-6 pa-7" style="width: 100%; height:270px; background-color: #BBDEFB; border-color: #00cae3;">
            
            <div>
              <apexchart height="200" type="bar" :options="barchartOptions" :series="barseries"></apexchart>
            </div>
            
            </div>
            <v-card height="100">
                <v-card-title> Part Quality Report </v-card-title>
                <v-row>
                  <v-col>
                    <v-row>
                      <v-col><v-text-field small dense label="Line Id  " outlined style="margin-top:-35px; margin-left:16px"  v-model="Line_id_new"></v-text-field></v-col>
                    <v-col><v-btn small style="margin-top:-55px; margin-right:-50px" @click="change_lid_part()">Submit</v-btn></v-col></v-row>
                  </v-col>
                </v-row>

              
            </v-card>
            </div>

          </v-col>
      </v-row>
      <v-row>
        <v-col>
            <v-card style="margin-left:30px" width="320" height="120">
            <v-row>
                   <v-col> <v-img height="100" style="margin-left:10px" width='100' src="/rejection.png"></v-img> </v-col>
                    <v-col > <v-card-title class="display-1">{{this.per_rej}}%</v-card-title>
                    <v-card-text small>% Rejections</v-card-text></v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col>
            <v-card style="margin-left:20px" width="320" height="120">
            <v-row>
                   <v-col > <v-img height="100" style="margin-left:10px" width='100' src="/car.png"></v-img> </v-col>
                    <v-col> <v-card-title class="display-1">{{this.tot}}</v-card-title>
                    <v-card-text small>Total Assemblies</v-card-text></v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col>
            <v-card style="margin-left:20px" width="320" height="120">
            <v-row>
                   <v-col cols="5"> <v-img height="100" style="margin-left:10px" width='100' src="/time.png"></v-img> </v-col>
                    <v-col cols="7"> <v-card-title class="display-1">{{this.avd}}</v-card-title>
                    <v-card-text small class="caption">Average Deviation</v-card-text></v-col>
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
    <!-- </v-img> -->
  </div>
</template>

<script>

export default {
  middleware: ['auth'],
  layout:'manager',
  data: () => ({
    productivity_model1:[], //line graph
    productivity_model2:[], //line graph combined with previous
    line_quality:[], //piechart
    part_quality:[], //bar graph
    Line_id:"L01",
    sct_model1:[50,25,12,32,18],
    sct_model2:[40,20,10,30,20],
    pieUpdated: [],
    barUpdated: [],
    lineUpdated1: [],
    lineUpdated2: [],
    SCT2:[50,25,12,32,18],
    SCT1:[58,20,10,30,20],
    per_rej:"",
    tot:"",
    line_id_new:"",

    avd:"",

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
                { text: 'Deviation', value: 'Deviation' },
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
              name: "Model 2",
              data: [25,20,30,32,19]
            },
            {
              name: "Model 1",
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
              enabled: true,

            },
            labels : ['Line L01','Line L02','Line L03'],
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
  change_lid_prod(){
    this.Line_id=this.line_id_new;
    this.func_pro()
    this.lineUpdate()
  },
    change_lid_part(){
    this.Line_id=this.line_id_new;
    this.func_part()
    this.barUpdate()
  },
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
    // console.log(okok)
    console.log(this.line_quality);
    // console.log(okok)
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
    console.log("part")
    console.log(this.part_quality);
    }
    catch(error)
    {
      console.error();
    }
  },


  lineUpdate() {
    this.lineUpdated1=[]
    this.lineUpdated2=[]
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
    console.log("p")
    console.log(this.pieUpdated)
    console.log("p")
    this.pieseries = this.pieUpdated
    
  }, 
  
  barUpdate() {
    this.barUpdated=[]
    this.part_quality.forEach( (part) => { let p = parseInt(part.Rejections);  this.barUpdated.push(p) } )
    console.log("b")
    console.log(this.barUpdated)
    console.log("b")
    this.barseries = [{ data: this.barUpdated}] 
 
  },
  async percent_rej(){
    try{
    let response_rej = await this.$axios.$get(`/reports/percentage_rej`);
    this.per_rej = parseInt((parseInt(response_rej.data[0].rej)/parseInt(response_rej.data[0].tot))*100);
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
  },
  caldeviation() {
    let c=0, s=0
    this.productivity_model1.forEach( (element) => { element.Deviation = parseInt(element.Avg) - parseInt(this.sct_model1[c]); 
      s = s + element.Deviation
      console.log(parseInt(element.Avg)- parseInt(this.sct_model1[c]))
      console.log(element.Deviation)
      c++
    })
    this.avd = s/c
  }

},

mounted: function () {
  this.$nextTick(async function () {
       this.func_pro()  
       this.func_line()
       this.func_part()
      
       
       this.percent_rej()
       this.total_subAssembly()
       setTimeout(this.lineUpdate,8000)
       setTimeout(this.pieUpdate,8000)
       setTimeout(this.barUpdate,8000)
       setTimeout(this.caldeviation,5000)
  })      
}
}
</script>

<style>

</style>