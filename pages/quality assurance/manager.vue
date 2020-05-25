<template>
    <div>
        <br><br><br><br>
        <v-row>
            <v-col cols="8" offset="2">
                <v-card outlined class="px-2 py-3">
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

                                <template  v-slot:item.status="{item}">
                                    <v-select       
                                    :items="items"
                                    v-model="item.status"
                                    label="Select status"
                                    outlined
                                    dense
                                    class="mt-2 mb-n5"
                                    ></v-select>
                                </template>
                                
                                <template  v-slot:item.comments="{item}">
                                    <v-text-field
                                    label="Comments"
                                    v-model="item.comments"
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
                { text: 'Subassembly ID', align: 'start', sortable: false, value: "qnumber" },
                { text: 'Status', value: "status", width: 180 },
                { text: 'Comments',value: "comments", width: 700 },
            ],
            quality: [
                // {
                // qnumber: '',
                // status: '',
                // comments: '' ,
                // },
                // {
                // qnumber: '',
                // status: '',
                // comments: '' ,
                // },
                // {
                // qnumber: '',
                // status: '',
                // comments: '' ,
                // },
                // {
                // qnumber: '',
                // status: '',
                // comments: '' ,
                // },
                // {
                // qnumber: '',
                // status: '',
                // comments: '' ,
                // },  
            ],

        }
    },

    methods : {
        update() {
            console.log(this.quality)
        }
    },

    mounted: function () {
        this.$nextTick(async function () {
                let response = await this.$axios.$get('quality');
                this.parts = response.data
                console.log(this.parts)

                this.parts.forEach(part => {
                    this.quality.push(
                        {
                        qnumber: '1',
                        status: '',
                        comments: '' ,
                        }
                    )
                });
            
                let count = 0 
                this.quality.forEach((i)=>{i.qnumber = this.parts[count].uniqueParts;  count++;})
                console.log(this.quality)
               
        })
    }
}
</script>