<template>
<div>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :lg="4" :sm="12"
        >
          <v-card>
              <v-card-title v-text="card.title"></v-card-title>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

             <v-btn color="#5e35b1" dark >View</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

</div>
</template>

<script>
export default {
    layout:'incharge/incharge-d',
    data: () => ({
      cards: [
        { title: 'Productivity Report', src: '/productivity.jpg', flex: 6 },
        { title: 'Part Quality Report', src: '/part.jpg', flex: 6 },
        { title: 'Line Quality Report', src: '/line.jpg', flex: 6 },
      ],
    }),
}
</script>

<style>

</style>