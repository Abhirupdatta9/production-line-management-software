<template>
    <v-container>
        <v-row>
            <v-col>
                <br><br><br><br><br><br>
                <!-- The below code is temporary-->
                <v-row >
        <v-col
          v-for="card in cards"
          :key="card.title"
          :lg="4" :sm="12"  
        
        >
          <v-card
          class="mx-auto"
          max-width="370"
          height="200"
          :elevation="20"
          raised
          >
            <v-card-title v-text="card.title"></v-card-title>
            <v-card-text v-text="card.content">

            </v-card-text>
            <v-card-actions>
              
              <v-btn
                color="#5e35b1"
                dark
                block
              >
                View More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

export default {
   layout:'incharge',
   data: () => ({
      cards: [
        { title: 'Line Status', content: 'Click here to check the status of any line'},
        { title: 'Issue Report Request',content: 'Click here to issue any change requests to the reports' },
        { title: 'Scan ', content: 'Scan, rescan or reject parts in an ongoing line' },
      ],
    }),
}
</script>
<style>

</style>