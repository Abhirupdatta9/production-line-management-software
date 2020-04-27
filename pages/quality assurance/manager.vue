<template>
    <div>
        <br><br><br><br>
        <v-row>
            <v-col cols="8" offset="2">
                <v-card outlined class="px-3 py-3">
                    <v-row>
                        <v-col cols="6">
                            <v-data-table
                            :headers="headers"
                            :items="stations"
                            :items-per-page="5"
                            class="elevation-1"
                            >
                            <template v-slot:top>
                                <v-toolbar flat>
                                <v-toolbar-title>Quality Assessment Status Table</v-toolbar-title>
                                
                                </v-toolbar>
                            </template>
                            <template  v-slot:item.operator="{ item }">
                                <v-select
                                v-if="item.assigned != true"
                                :items="items"
                                label="Select status"
                                outlined
                                dense
                                class="mt-2 mb-n5"
                                ></v-select>
                                <template v-else>
                                {{item.operator}}
                                </template>
                            </template>
                            <template  v-slot:item.name="{ item }">
                                <v-text-field
                                label="Comments"
                                outlined
                                dense
                                class="mt-2 mb-n5"
                                >
                                </v-text-field>
                            </template>
                            </v-data-table>
                        </v-col>
                        
                        <v-col cols="6">
                            <v-data-table
                            :headers="headers"
                            :items="stations"
                            :items-per-page="5"
                            class="elevation-1"
                            >
                            <template v-slot:top>
                                <v-toolbar flat>
                                <v-toolbar-title>On Hold Table</v-toolbar-title>
                                
                                </v-toolbar>
                            </template>
                            <template  v-slot:item.operator="{ item }">
                                <v-select
                                v-if="item.assigned != true"
                                :items="items"
                                label="Select status"
                                outlined
                                dense
                                class="mt-2 mb-n5"
                                ></v-select>
                                <template v-else>
                                {{item.operator}}
                                </template>
                            </template>
                            <template  v-slot:item.name="{ item }">
                                <v-text-field
                                label="Comments"
                                outlined
                                dense
                                class="mt-2 mb-n5"
                                >
                                </v-text-field>
                            </template>
                            </v-data-table>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    layout: 'quality',
    data() {
        return{
       
            items: [
                "Clear", "Hold"
            ],
            headers: [
            {
                text: 'Subassembly ID',
                align: 'start',
                sortable: false,
                value: 'number',
                
            },
            { text: 'Status', value: 'operator', width: 180 },
            { text: 'Comments', value: 'name',width: 180 },
            ],
            stations: [
                {
                number: 'S01',
                name: 'Wheels',
                operator: 'honey singh' ,
                assigned: false,
                },
                {
                number: 'S02',
                name: 'Doors',
                operator: 'honey singh' , 
                assigned: false, 
                },
                {
                number: 'S03',
                name: 'Engine',
                operator: 'honey singh' , 
                assigned: false, 
                },
                {
                number: 'S04',
                name: 'Dashboard',
                operator: 'honey singh' , 
                assigned: false, 
                },
                {
                number: 'S05',
                name: 'Seats',
                operator: 'honey singh' , 
                assigned: false, 
                },
            ],

        }
    }
}
</script>
