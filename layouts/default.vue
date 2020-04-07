<template>
<div>
  <Nuxt/>
</div>
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
