<template>
<div >
    <v-app-bar
      color="#5e35b1"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Operator</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
    <v-list nav dense>
      <v-list-item-group v-model="item" color="primary">
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
</div>
</template>

<script>
export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        { text: 'Dashboard', icon: 'mdi-apps', to: 'operator-dashboard'},
        { text: 'Task', icon: 'mdi-playlist-edit', to: 'operator-task'},
        { text: 'Workdesk', icon: 'mdi-chart-bubble', to: 'operator-workdesk' },
        { text: 'Settings', icon: 'mdi-settings', to: 'operator-settings' },
        { text: 'Help', icon: 'mdi-help', to: 'operator-help' },
      ],
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