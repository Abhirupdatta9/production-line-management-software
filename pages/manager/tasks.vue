<template>
    <v-container>
        <br><br><br><br><br><br>
        <v-card>
            <v-card-title><h2>Task Panel</h2></v-card-title>
            <v-container>
                
                <v-row>
                    <v-col cols="4">
                        <v-card height="100"  >
                            <v-card-title ><b>Daily task</b>
                            <v-spacer></v-spacer>
                            <v-icon color="#FF9100" x-large>mdi-format-list-bulleted</v-icon>
                            </v-card-title>
                            
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card height="100"  >
                            <v-card-title><b>Pending task</b>
                            <v-spacer></v-spacer>
                            <v-icon color="#00B0FF" x-large>mdi-playlist-check</v-icon>
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <!-- color="#00C853" -->
                    <v-col cols="4">
                        <v-card height="100"  >
                            <v-card-title><b>Completed task</b>
                            <v-spacer></v-spacer>
                            <v-icon color="#00C853" x-large>mdi-check-circle</v-icon></v-card-title>
                            
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        
    </v-container>
</template>

<script>
export default {
    layout:'manager',
}
</script>