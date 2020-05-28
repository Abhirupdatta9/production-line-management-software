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
                        item-key="sid"
                        class="elevation-1"
                        single-select
                        show-select
                        >
                            <template v-slot:top>
                                <v-col cols="4" offset="4">
                                    <v-toolbar flat>
                                        <v-toolbar-title >Dispatch Table</v-toolbar-title>
                                    </v-toolbar>
                                </v-col>
                            </template>
                        </v-data-table>
                    </v-col>

                    <v-col cols="2" offset="5"><v-btn @click="dispatch_delete()">Dispatch</v-btn></v-col>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    middleware: ['auth','dispatch'],
    layout: 'dispatch',
    data() {
        return{
            selected : [],
            parts : [],
            headers: [
                { text: 'Subassembly ID',align: 'start',sortable: false,value: 'sid'},
                { text: 'Status', value: 'status', width: 180 },
            ],
            clearedAssemblies: [],
        }
    },

    methods : {
        dispatch_delete(){
            this.selected.forEach((item) => {this.$axios.$delete(`dispatch/${item.sid}`)})
            for(var i = 0; i <this.selected.length; i++){
                    const index = this.clearedAssemblies.indexOf(this.selected[i]);
                    this.clearedAssemblies.splice(index, 1);
            } 
        },
    },

    mounted: function () {
        this.$nextTick(async function () {
                let response = await this.$axios.$get('dispatch');
                this.parts = response.data
                this.parts.forEach(part => {
                    this.clearedAssemblies.push(
                        {
                        sid: '',
                        status: '',
                        }
                    )
                });
            
                let count = 0 
                this.clearedAssemblies.forEach((i)=>{i.sid = this.parts[count].uniqueParts;  count++;})

                count = 0 
                this.clearedAssemblies.forEach((i)=>{i.status = "clear";  count++;})

                console.log(this.clearedAssemblies)
        })
    }
}
</script>