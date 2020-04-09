<template>
    <v-container>
        <v-row>
        <v-col>
            <br><br><br><br><br><br>
            <v-card >
                
                <br>
                <center><h1>Welcome to dashboard</h1></center>
                <v-card-title></v-card-title>
                <br><br>
                <center><h1>Task status</h1></center>
                <v-card flat>
                    <v-container>
                    <v-row>
                        <v-col cols="4" >
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
                
                <br><br><br>
                <!-- <v-container> -->
                

                <center><h1>Production status</h1></center><br><br>
                <!--chart  -->
                <v-row>
                    <v-col cols="8" offset="2">
                        <!--chart  -->
                        <v-card
                            class="mt-4 mx-auto"
                            width="800"
                        >
                            <v-sheet
                            class="v-sheet--offset mx-auto"
                            color="#FF9100"
                            elevation="12"
                            width=""
                            >
                            <v-sparkline
                                :labels="labels"
                                :value="value"
                                color="white"
                                line-width="2"
                                padding="16"
                            ></v-sparkline>
                            </v-sheet>

                            <v-card-text class="pt-0">
                            <div class="title font-weight-light mb-2">User Registrations</div>
                            <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                            <v-divider class="my-2"></v-divider>
                            <v-icon
                                class="mr-2"
                                small
                            >
                                mdi-clock
                            </v-icon>
                            <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <!-- <v-col cols="5">
                        
                        <v-card
                            class="mt-4 mx-auto"
                            width=""
                        >
                            <v-sheet
                            class="v-sheet--offset mx-auto"
                            color="#FF9100"
                            elevation="12"
                            width=""
                            >
                            <v-sparkline
                                :labels="labels"
                                :value="value"
                                color="white"
                                line-width="2"
                                padding="16"
                            ></v-sparkline>
                            </v-sheet>

                            <v-card-text class="pt-0">
                            <div class="title font-weight-light mb-2">User Registrations</div>
                            <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                            <v-divider class="my-2"></v-divider>
                            <v-icon
                                class="mr-2"
                                small
                            >
                                mdi-clock
                            </v-icon>
                            <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
                            </v-card-text>
                        </v-card>
                    </v-col> -->
                </v-row>
                
                <!-- </v-container> -->
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>
<script>

export default {
   layout:'incharge',
   data: () => ({
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
    }),
}
</script>
<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>