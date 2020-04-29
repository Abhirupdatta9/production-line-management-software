<template>
    <div>
        <br><br><br><br>
        <v-row>
            <v-col cols="8" offset="2">
                <v-card class="px-3 py-3" outlined>
                    <v-row>
                        <v-col cols="3">
                            <v-select
                            :items="lines"
                            v-model="station"
                            label="Select Line"
                            outlined
                            dense
                            
                            ></v-select>
                        </v-col>
                        <v-col cols="3" offset="4">
                            <v-select
                            :items="stations"
                            v-model="station"
                            label="Select Station"
                            outlined
                            dense
                            
                            ></v-select>
                        </v-col>
                        <v-col cols="">
                            <v-btn outlined block @click="show()">Show</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-data-table
                            :headers="headers"
                            :items="scan"
                            :items-per-page="5"
                            class="elevation-1"
                            >
                            <template v-slot:top>
                                <v-toolbar flat>
                                <v-toolbar-title>Station Productivity Table</v-toolbar-title>
                                <v-spacer></v-spacer> 
                                <v-text-field
                                outlined
                                readonly
                                dense
                                value="Standard Cycle Time - 12:10:56"
                                class="mt-8">
                                </v-text-field> 
                                </v-toolbar>           
                            </template>
                            </v-data-table>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card
                                class="mx-auto text-center"
                                color="green"
                                dark
                                max-width="600"
                            >
                                <v-card-text>
                                <v-sheet color="rgba(0, 0, 0, .12)">
                                    <v-sparkline
                                    :value="value"
                                    color="rgba(255, 255, 255, .7)"
                                    height="100"
                                    padding="24"
                                    stroke-linecap="round"
                                    smooth
                                    >
                                    <template v-slot:label="item">
                                        ${{ item.value }}
                                    </template>
                                    </v-sparkline>
                                </v-sheet>
                                </v-card-text>

                                <v-card-text>
                                <div class="display-1 font-weight-thin">Production Last 24h</div>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions class="justify-center">
                                <v-btn block text>Go to Report</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    layout: 'manager',
    data() {
        return {
            lines: ["L01","L02","L03"],
            stations: ["S01","S02","S03"],
            station: "",
            value: [
                423,
                446,
                675,
                510,
                590,
                610,
                760,
            ],
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
                { text: 'Cycle Time', value: 'Cycle_Time' },
                { text: 'Deviation', value: 'Reject' },
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
    }
}
</script>