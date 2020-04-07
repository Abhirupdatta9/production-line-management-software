<template>
<div>
    
    <particles-bg type="cobweb" color="#5E35B1" :bg="true" /> 

 
  <br><br><br><br><br><br>
  <v-row >
    <v-col  cols="4" offset="4">
      <v-card width="600px" height="400px">
        <v-app-bar color="#5e35b1" dark><v-card-title>Manager Login</v-card-title></v-app-bar>

          <v-row>
            <v-col offset="1" cols="10">
              <v-form>
                <v-text-field prepend-icon="mdi-account" label="Email" required ></v-text-field>
                <v-text-field prepend-icon="mdi-lock" label="Password" :type="'password'" required></v-text-field>
              </v-form>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="10" offset="1">
              <v-btn block color="#5e35b1" dark to="dashboard">Login</v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6" offset="1">
              <nuxt-link to="/">Dont have an account? Sign up</nuxt-link>
            </v-col>
            <v-col offset="1">
              <nuxt-link to="/">Forgot password?</nuxt-link>
            </v-col>
          </v-row>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
    layout:'operator/operator-login',
    data: () => ({
      drawer: false,
      group: null,
      items: [
        { text: 'Back', icon: 'mdi-page-previous' }
      ]
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