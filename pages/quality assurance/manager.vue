<template>
    <div>
        <br><br><br><br>
        <v-row>
            <v-col cols="8" offset="2">
                <v-card outlined class="px-3 py-3">
                    <v-row>
                        <v-col>
                            <v-data-table
                            :headers="headers"
                            :items="quality"
                                :items-per-page="5"
                                class="elevation-1"
                            >

                                <template v-slot:top>
                                    <v-toolbar flat>
                                    <v-toolbar-title>Quality Assessment Status Table</v-toolbar-title>
                                    </v-toolbar>
                                </template>

                                <template  v-slot:item.operator="{}">
                                    <v-select       
                                    :items="items"
                                    label="Select status"
                                    outlined
                                    dense
                                    class="mt-2 mb-n5"
                                    ></v-select>
                                </template>
                                
                                <template  v-slot:item.name="{}">
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
        <v-row>
            <v-col cols="2" offset="5">
                 <v-btn block outlined @click="update()">Update Data</v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    layout: 'quality',
    data() {
        return{
            parts : [],
            items: [ "Clear", "Hold"],
            headers: [
                { text: 'Subassembly ID', align: 'start', sortable: false, value: "number" },
                { text: 'Status', value: "operator", width: 180 },
                { text: 'Comments',value: "name", width: 700 },
            ],
            quality: [
                {
                qnumber: '',
                name: 'Wheels',
                operator: 'honey singh' ,
                assigned: false,
                },
                {
                qnumber: '',
                name: 'Doors',
                operator: 'honey singh' , 
                assigned: false, 
                },
                {
                qnumber: '',
                name: 'Engine',
                operator: 'honey singh' , 
                assigned: false, 
                },
                {
                qnumber: '',
                name: 'Dashboard',
                operator: 'honey singh' , 
                assigned: false, 
                },
                {
                qnumber: '',
                name: 'Seats',
                operator: 'honey singh' , 
                assigned: false, 
                },
            ],

        }
    },

    methods : {
        update() {

        }
    },

    mounted: function () {
        this.$nextTick(async function () {
                let response = await this.$axios.$get('quality');
                this.parts = response.data
                console.log(this.parts)

                this.quality.forEach((i)=>{i.qnumber=this.parts.forEach( function (id) {return id.uniqueParts})})

                console.log(this.quality)

                // console.log(this.parts.forEach((id)=>{return id.uniqueParts}))

                // this.parts.forEach(function (e) {console.log(e.uniqueParts);})
        })
    }
}
</script>