<template>
<v-container fluid>
    <v-row>
        <v-col cols="8" offset="2">
            <br><br><br><br>
            <v-card  width="80vw" > 
                <v-card-title>
                Request List 
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    prepend-icon="mdi-search"
                    label="Search request"
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
            text: 'Request name',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Request ID', value: 'calories' },
          { text: 'Request type', value: 'fat' },
        //   { text: 'Carbs (g)', value: 'carbs' },
        //   { text: 'Protein (g)', value: 'protein' },
        //   { text: 'Iron (%)', value: 'iron' },
        ],
        requests: [
          {
            name: 'Parts change',
            calories: 159,
            fat: 6.0,
            // carbs: 24,
            // protein: 4.0,
            // iron: '1%',
          },
          {
            name: 'Machine error',
            calories: 237,
            fat: 9.0,
            // carbs: 37,
            // protein: 4.3,
            // iron: '1%',
          },
          {
            name: 'Supply error',
            calories: 262,
            fat: 1,
            // carbs: 23,
            // protein: 6.0,
            // iron: '7%',
          },
          {
            name: 'Request new chasis',
            calories: 305,
            fat: 3,
            // carbs: 67,
            // protein: 4.3,
            // iron: '8%',
          },
          {
            name: 'Assembly restart',
            calories: 356,
            fat: 6,
            // carbs: 49,
            // protein: 3.9,
            // iron: '16%',
          },
        //   {
        //     name: 'Jelly bean',
        //     calories: 375,
        //     fat: 0.0,
        //     carbs: 94,
        //     protein: 0.0,
        //     iron: '0%',
        //   },
        //   {
        //     name: 'Lollipop',
        //     calories: 392,
        //     fat: 0.2,
        //     carbs: 98,
        //     protein: 0,
        //     iron: '2%',
        //   },
        //   {
        //     name: 'Honeycomb',
        //     calories: 408,
        //     fat: 3.2,
        //     carbs: 87,
        //     protein: 6.5,
        //     iron: '45%',
        //   },
        //   {
        //     name: 'Donut',
        //     calories: 452,
        //     fat: 25.0,
        //     carbs: 51,
        //     protein: 4.9,
        //     iron: '22%',
        //   },
        //   {
        //     name: 'KitKat',
        //     calories: 518,
        //     fat: 26.0,
        //     carbs: 65,
        //     protein: 7,
        //     iron: '6%',
        //   },
        ],
      }
    },
  }
</script>