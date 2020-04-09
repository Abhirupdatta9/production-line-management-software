<template>
<div>
  <v-img src="/bg2.jpg">
    <v-container fluid>
      <v-row>
        <v-col >
            <div class="float-right " style="background-color:rgba(255,255,255,0.5);width=50%;">
              <v-card width="400px" height="450px" style="margin-top:80px; margin-left:90px; padding-bottom:30px" class="justify-right">
                <v-app-bar>
                  <v-card-text primary-title text-color="#5e35b1" class="justify-center display-1 font-weight-black " style="text-align:center; size=20px">USER LOGIN</v-card-text>
                </v-app-bar>
                <v-row>
                  <v-col offset="1" cols="10">
                    <v-form style="margin-top:50px;">
                      <v-text-field solo prepend-icon="mdi-account" class="my-input" :type="'number'" label="Enter UserID" required style="margin-bottom:-20px"></v-text-field>
                      <v-text-field solo prepend-icon="mdi-lock" label="Enter Password" class="my-input" :type="'password'" required style="margin-bottom:-20px"></v-text-field>
                      <v-select :items="items" prepend-icon="mdi-ticket-account" solo label="User Type"  class="my-input"></v-select>
                    </v-form>
                  </v-col>
                </v-row>
          
                <v-row>
                  <v-col cols="10" offset="1" float>
                    <v-btn block large rounded dark color="#5e35b1" to="dashboard" style="margin-bottom=-5px;">Login</v-btn>
                  </v-col>
                  <v-col offset="1" style="color:grey;margin-bottom=50">
                    <nuxt-link to="/" style="text-decoration:none;" text-color="grey">Forgot password?</nuxt-link>
                  </v-col>
                </v-row>
              </v-card>
          </div>
    </v-col>
      </v-row>
    </v-container>
  </v-img>
</div>
</template>

<script>
export default {

    data: () => ({
      items: ['Operator', 'Incharge', 'Manager'],
    }),

}
</script>

<style scoped>
  
  .my-input{
  border-radius: 100px;
}
</style>