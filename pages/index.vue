<template>
<div>
  <v-img src="/bg2.jpg" height="100vh" width="100vw">
    <v-container fluid>
      <v-row>
        <v-col cols="4" offset="3">
          <br><br><br><br><br><br><br><br>
          <v-img src="/logo-01.png" height="300px" width="300px"></v-img>
          <!-- <v-btn dark color=#5e35b1 style="margin:10px;margin-left:55px">Assembly Line System</v-btn> -->
        </v-col>
        <v-col cols="4">
            <div>
              <v-card width="400px" height="520px" style="margin-top:80px; margin-left:90px; padding-bottom:30px" elevation="5" class="justify-right">
                <!-- <v-app-bar color="#5e35b1"> -->
                  <v-card-text class="justify-center  display-1 font-weight-black " style="text-align:center; size=20px">USER LOGIN</v-card-text>
                <!-- </v-app-bar> -->
                <v-row>
                  <v-col offset="1" cols="10">
                    <v-form style="margin-top:50px;" @submit.prevent="submit">
                      <v-text-field solo rounded prepend-icon="mdi-account" :type="'email'" label="Enter User ID" required style="margin-bottom:-20px" v-model="form.email"></v-text-field>
                      <small style="color:red" v-if="errors.email">{{errors.email[0]}}</small>
                      <v-text-field solo rounded prepend-icon="mdi-lock" label="Enter Password" :type="'password'" required style="margin-bottom:-20px" v-model="form.password"></v-text-field>
                      <small style="color:red" v-if="errors.password">{{errors.password[0]}}</small>
                      <v-select :items="items" prepend-icon="mdi-ticket-account" solo rounded label="User Type" required v-model="form.name"></v-select>
                      <small style="color:red" v-if="errors.name">The type field is required.</small>
                      <v-row>
                  <v-col cols="11" offset="1" float>
                    <v-btn type="submit" block large rounded dark color="#5e35b1" style="margin-bottom=-5px;">Login</v-btn>
                  </v-col>
                  <v-col offset="1" style="color:grey;margin-bottom=50">
                    <nuxt-link to="/" style="text-decoration:none;" text-color="grey">Forgot password?</nuxt-link>
                  </v-col>
                </v-row>
                    </v-form>
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
    // middleware: ['guest'],
    data: () => ({
      items: ['Operator', 'Incharge', 'Manager','Quality','Dispatch'],
      form:{
        email:'',
        password:'',
        name:''
    }
    }),

    methods:{
        async submit(){
          try{
              await this.$auth.loginWith('local',{data: this.form})
              if(this.form.name === 'Operator')
                this.$router.push("/operator/workdesk");
              else if(this.form.name === 'Incharge')
                this.$router.push("/incharge/workdesk");
              else if(this.form.name === 'Manager')
                this.$router.push("/manager/reports");
              else if(this.form.name === 'Quality')
                this.$router.push("/quality_assurance/manager");
              else if(this.form.name === 'Dispatch')
                this.$router.push("/dispatch/manager");
          }catch(e){console.log(e);}
        }
    },

    
}
</script>



<style scoped>
  .my-input{
    border-radius: 100px;
  }
</style>