<template>
    <div>
        <v-img src="/bgall.jpg" width="100%" height="800px">
        <v-col cols="2" offset="5" float>
            <v-form style="margin-top:100px;" @submit.prevent="submit"> 
                <v-text-field solo rounded :type="'text'" label="Enter Chassis ID" required style="margin-bottom:-30px" v-model="chassis" class="justify-center"></v-text-field>
            </v-form>
        </v-col>

         <v-col cols="2" offset="5" float>
            <v-btn @click="submit" type="submit" block large rounded dark color="#5e35b1" style="margin-bottom=-5px;">Submit</v-btn>
        </v-col>

        <v-card elevation="5" width="500px" height="400px" style="margin-top:50px; margin-left:32%; padding-bottom:30px" class="justify-center">
            
            <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="parts"
              :hide-default-footer="true"
              class="elevation-5"
            >
              <template v-slot:top>
                <v-col cols="7" offset="3">
                    <v-toolbar flat>
                        <v-toolbar-title >Assembled Parts</v-toolbar-title>
                    </v-toolbar>
                </v-col>
              </template>

            </v-data-table>
          </v-col>

        </v-card>
        </v-img> 
    </div>
</template>
<script>
export default {
    //middleware: ['auth','incharge'],
    layout:'incharge',
    data () {
        return {
            chassis:'',
            parts : [],
            headers: [
                {
                    text: 'Assembled Parts',
                    align: 'center',
                    sortable: false,
                    value: 'part_id',
                },
            ],
        }
    },

    methods : {
        async submit(){
            try{
                let response = await this.$axios.$get(`tracking/${this.chassis}`);
                this.parts = response.data
            }
            catch(error){
                console.log(error)
            }
        }
    }
}
</script>