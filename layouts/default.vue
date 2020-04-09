<template>
<v-app>
<div>
  <Nuxt/>
</div>
</v-app>
</template>

<script>
  export default {
    
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>

</style>
