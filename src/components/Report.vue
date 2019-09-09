<template>
  <v-container>

    <v-layout
      text-center
      wrap
      justify-center
      align-center
    >
    <v-flex xs12 sm10 md8>
      <v-card flat style="margin: 10px;" class="transparent elevation-0">
      <v-flex xs12>
        <v-img
          :src="require('../assets/shuqbarapremium.svg')"
          class="my-3"
          contain
          height="200"
          @click="$router.go('/')"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
              <h1 class="headline text-uppercase mb-3">
          <span> Shuqbara </span>
          <span class="font-weight-light"> Premium</span>
          </h1>
      </v-flex>

      <v-flex mb-5 xs12 >
        <v-layout justify-center>
       <h2 class="font-weight-light"> <v-icon left color="red">mdi-phone</v-icon> 0953166155</h2>
        </v-layout>
         <div class="text--primary">
           <v-icon class="blue--text text--lighten-2">mdi-web</v-icon><a href="https://shuqbara.com" target="_blank">www.shuqbara.com</a> <br>
        <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>fthialem@gmail.com<br>
        <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>Axum, Tigray, Ethiopia <br>
        <h2 class="font-weight-light" @click="$router.push('/getcomment')"> Give us feedback</h2> 
            </div>
      </v-flex>
    </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        inumber: null
    }
  },
  methods: {
    goThere(distnation){
      this.$router.push(distnation)
    },
    requestPremium() {
        if(!this.inumber){
            this.$router.push('/read')
        }
    }
  }
};
</script>
