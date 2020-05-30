<template>
    <div>
        <v-img src="/bgall.jpg" width="100%" height="800px">
        <br><br><br><br>
        <v-row>
            <v-col cols="8" offset="2">
                <v-card elevation="5" class="px-3 py-3" outlined>
                    <v-row>
                        <v-col cols="3">
                            <v-btn
                            readonly
                            dark color="#5e35b1"
                            solo
                            dense>
                            Line Number : {{this.Line_id}}</v-btn>
                        </v-col>
                        <v-col cols="3" offset="4">
                            <v-select
                            :items="items"
                            v-model="station"
                            label="Select Station"
                            outlined
                            dense
                            color="#5e35b1"
                            ></v-select>
                        </v-col>
                        <v-col cols="">
                            <v-btn block dark color="#5e35b1" @click="show()">Show</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-data-table
                            :headers="headers"
                            :items="scan"
                            :items-per-page="5"
                            class="elevation-5"
                            >
                            <template v-slot:top>
                                <v-toolbar flat>
                                <v-toolbar-title>Station Status Table</v-toolbar-title>
                                <v-spacer></v-spacer>  
                                </v-toolbar>           
                            </template>
                            </v-data-table>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        </v-img>
    </div>
</template>
<script>
export default {
    //middleware: ['auth','incharge'],
    layout: 'incharge',
    data() {
        return {
            items: ["S01","S02","S03"],
            Line_id : '',
            station: "",
            headers: [
                {
                    text: 'Subassembly ID',
                    align: 'start',
                    sortable: false,
                    value: 'Sub_Assembly_ID',
                },
                { text: 'T1', value: 'T1' },
                { text: 'Part ID', value: 'Part_ID' },
                { text: 'T2', value: 'T2' },
                { text: 'Rejected', value: 'Reject' },
                { text: 'Cycle Time', value: 'Cycle_Time' },
            ],
            
            scan : [],
        }
    },
    methods : {
        
        async show() {
        console.log(this.station)
        let response = await this.$axios.$get(`scan-details/${this.station}`);
        console.log(response)
        this.scan = response
        
        
        },
    },

    async mounted(){
      let response = await this.$axios.$get(`/incharge/reports/${this.user.email}`);
      this.Line_id = response[0].Line_ID
    }
}
</script>