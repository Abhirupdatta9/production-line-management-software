<template>
    <div>
        <br><br><br><br>
        <v-row>
            <v-col cols="6" offset="3">
                <v-card outlined class="px-3 py-3">
                    <v-col cols="12">
                        <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="clearedAssemblies"
                        item-key="number"
                        class="elevation-1"
                        show-select
                        single-select
                        >
                            <template v-slot:top>
                                <v-col cols="4" offset="4">
                                    <v-toolbar flat>
                                        <v-toolbar-title >Dispatch Table</v-toolbar-title>
                                    </v-toolbar>
                                </v-col>
                            </template>

                            <template  v-slot:item.comment="{ }">
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

                    <v-col cols="2" offset="5"><v-btn :onClick=dispatch()>Dispatch</v-btn></v-col>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    layout: 'dispatch',
    data() {
        return{
            dispatched : "false",
            selected : [],
            item: "Clear",
            headers: [
                { text: 'Subassembly ID',align: 'start',sortable: false,value: 'number'},
                { text: 'Status', value: 'clear', width: 180 },
                { text: 'Comments', value: 'comment',width: 180 },
                { text: 'Dispatch Status', value: 'dispatchable',width: 180 },
            ],
            clearedAssemblies: [
                {
                number: 'P00M1098',
                comment: '',
                clear: 'clear' ,
                dispatchable: "",
                },
                {
                number: 'P00M1873',
                comment: '',
                clear: 'clear' ,
                dispatchable: "",
                },
                {
                number: 'P00M1028',
                comment: '',
                clear: 'clear' ,
                dispatchable: "",
                },
                {
                number: 'P00M1673',
                comment: '',
                clear: 'clear' ,
                dispatchable: "",
                },
                {
                number: 'P00M1068',
                comment: '',
                clear: 'clear' ,
                dispatchable: "",
                },
            ],

        }
    },

    methods : {
        dispatch(){
            console.log(this.selected)
        }
    }
}
</script>
