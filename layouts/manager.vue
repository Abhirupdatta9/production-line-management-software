<template>
  <v-app>
    <v-content>
      <v-app-bar
        color="#5e35b1"
        dark
        fixed
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Manager</v-toolbar-title>

        <v-spacer></v-spacer>

        

        <v-menu
        transition="slide-y-transition"
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" >
          <v-icon >mdi-bell</v-icon>
        </v-btn>
          <!-- <v-btn
            class="purple"
            color="primary"
            dark
            v-on="on"
          >
            Slide Y Transition
          </v-btn> -->
        </template>
        <v-list>
          <v-list-item
            v-for="(notification, i) in notifications"
            :key="i"
            
            absolute
            offset-y
          >
            <v-list-item-title>{{ notification.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

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
        bottom
        temporary
      >
          <!-- <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg">
            </v-list-item-avatar>
            &nbsp;&nbsp;&nbsp;
            <v-list-item-content>
              <v-list-item-title>Jane Smith</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> -->
        

        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            v-for="item in items" :key="item"
          >
              <v-list-item :to="item.to">
                  
                  <v-list-item-title><v-icon >{{item.icon}}</v-icon>&nbsp;&nbsp; {{item.title}}</v-list-item-title>
              </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>  
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
      name: 'manager',
      methods:{
        logout(){
            this.$auth.logout()
        }
      },
    data: () => ({
      drawer: false,
      group: null,

      notifications: [
        { title: 'Notification 1' },
        { title: 'Notification 2' },
        { title: 'Notification 3' },
        { title: 'Notification 4' },
      ],
 
      items: [
          {
              title: 'View Report',
              icon: 'mdi-chart-areaspline-variant',
              to:'/manager/reports'
          },
          { title: 'Track Assemblies', icon: 'mdi-account-edit', to:'tracking' },
          {
              title: 'Line Status',
              icon: 'mdi-progress-clock',
              to:'/manager/line-status'
          },
          {
              title: 'Help',
              icon: 'mdi-help',
              to:'/manager/help'
          },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      }
    }
  }
</script>

<style scoped>

</style>
