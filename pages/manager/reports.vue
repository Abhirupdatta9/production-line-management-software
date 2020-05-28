
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
            </div>
            <v-card height="100">
                <v-card-title> Producitivity Report </v-card-title>
                <v-card-subtitle>{{this.Line_id}}</v-card-subtitle>
                <v-btn text style="margin-top:-30px" @click="func_pro()">Know more</v-btn>
              
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
                <v-btn text style="margin-top:-30px" @click="func_line()">Know more</v-btn>
              
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
            </div>
            <v-card height="100">
                <v-card-title> Part Quality Report </v-card-title>
                <v-card-subtitle>Description</v-card-subtitle>
                <v-btn text style="margin-top:-30px" @click="func_part()">Know more</v-btn>
              
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
  middleware: ['auth','manager'],
  layout:'manager',
  data: () => ({
    productivity_model1:{ //line graph

    },
    productivity_model2:{ //line graph combined with previous

    },
    line_quality:{ //piechart
      
    },
    part_quality:{ //bar graph

    }, 
    Line_id:"L01",
    sct_model1:{},
    sct_model2:{},
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

    //var Lid=this.Line_id;
    
    
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
  async func_part(Lid){
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
    
    
  }
}
}
</script>

<style>

</style>