<template>
    <v-app>
        <v-content>
        <v-app-bar
        color="#5e35b1"
        dark
        fixed
        flat
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Dispatch Manager</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon v-on="on" >
            <v-icon >mdi-bell</v-icon>
            </v-btn>
            <v-btn icon>
            <v-icon>mdi-account</v-icon>
            </v-btn>
            <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
    
        <Nuxt/>
        </v-content>
    </v-app>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>