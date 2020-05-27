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

        <v-toolbar-title>Incharge</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon v-on="on" >
          <v-icon >mdi-bell</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn text @click="logout()">
          Logout
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        left
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item 
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            
            >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>&nbsp;&nbsp;&nbsp;
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <Nuxt/>
    </v-content>
  </v-app>
  
    

</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      dropdown:false,
      group: null,
      item: 1,
      items: [
        { text: 'Workdesk', icon: 'mdi-chart-bubble', to:'workdesk' },
        { text: 'Line Status', icon: 'mdi-progress-clock', to:'line-status' },
        { text: 'View Reports', icon: 'mdi-chart-areaspline-variant', to:'view-reports' },
        { text: 'Track Assemblies', icon: 'mdi-account-edit', to:'tracking' },
        { text: 'Error Details', icon: 'mdi-alert-circle', to:'error' },
        { text: 'Help', icon: 'mdi-help' , to:'help'},
        
      ],
      items_d: [
        { text: 'Profile', icon: 'mdi-apps', to:'incharge' },
        { text: 'Logout', icon: 'mdi-chart-bar', to:'view-reports' },
      ]
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
      methods:{
        logout(){
            this.$auth.logout()
        }
    },
  }
</script>

<style scoped>

</style>
