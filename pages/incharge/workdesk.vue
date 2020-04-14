<template>
<div>
  <br><br><br><br><br>
  <v-row>
    <v-col cols="8" offset="2">
      <v-card class="px-5 py-8" outlined height="600" >
        <v-row>
          <v-col cols="4">
            <v-text-field
           
            value="Line Number : 1"
            outlined
            dense
          ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <!-- operator assign table -->
            <v-data-table
              :headers="headers"
              :items="stations"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Operator Assign Table</v-toolbar-title>
                  
                </v-toolbar>
              </template>
              <template  v-slot:item.operator="{ item }">
                <v-btn v-if="item.assigned != true" small outlined v-model="item.operator" @click="assign()">Assign</v-btn>
                <template v-else>
                  {{item.operator}}
                </template>
              </template>
            </v-data-table>
          </v-col>

          <!-- operators table -->
          <v-col cols="6">
            <v-data-table
              :headers="operator_headers"
              :items="operators"
              :items-per-page="5"
              class="elevation-1"
              :hidden="operators_hidden"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Available Operators</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn small @click="done()">Done</v-btn>
                </v-toolbar>
              </template>
              <template  v-slot:item.assign="{ item }">
                <v-simple-checkbox v-model="item.assign"></v-simple-checkbox>
                
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <br><br><br>
</div>
</template>

<script>
export default {
    layout:'incharge',
    data: () => ({
      operators_hidden: true,
      assigned: false,
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
            value: 'name',
          },
          { text: 'Skills', value: 'skills' },
          { text: 'Assign', value: 'assign' },
      ],
      stations: [
        {
          number: 1,
          name: 'Wheels',
          operator: 'honey singh' ,
          assigned: true, 
        },
        {
          number: 2,
          name: 'Doors',
          operator: 'honey singh' , 
          assigned: false, 
        },
        {
          number: 3,
          name: 'Engine',
          operator: 'honey singh' , 
          assigned: false, 
        },
        {
          number: 4,
          name: 'Dashboard',
          operator: 'honey singh' , 
          assigned: false, 
        },
        {
          number: 5,
          name: 'Seats',
          operator: 'honey singh' , 
          assigned: false, 
        },
        {
          number: 6,
          name: 'Frozen Yogurt',
          operator: 'honey singh' , 
          assigned: false, 
        },
        {
          number: 7,
          name: 'Frozen Yogurt',
          operator: 'honey singh' , 
          assigned: false, 
        },
        {
          number: 8,
          name: 'Frozen Yogurt',
          operator: 'honey singh' ,
          assigned: false,  
        },
        {
          number: 9,
          name: 'Frozen Yogurt',
          operator: 'honey singh' , 
          assigned: false, 
        },
        {
          number: 10,
          name: 'Frozen Yogurt',
          operator: 'honey singh' , 
          assigned: false, 
        },
      ],  
      operators: [
        {
          name: 'Kaloraat',
          skills: 'I assume u know',
          assign: false,
        },
        {
          name: 'Kaloraat',
          skills: 'I assume u know',
          assign: false,
        },
        {
          name: 'Kaloraat',
          skills: 'I assume u know',
          assign: false,
        },
        {
          name: 'Kaloraat',
          skills: 'I assume u know',
          assign: false,
        },
        {
          name: 'Kaloraat',
          skills: 'I assume u know',
          assign: false,
        },
      ]

    }),

    methods: {
      assign() {
        this.operators_hidden = false
      },
      done() {
        this.operators_hidden = true
      }
    }
}
</script>

<style scoped>

</style>