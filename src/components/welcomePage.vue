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
      <v-card-title>
      <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-flex>
                <v-img
                  :src="require('../assets/shuqbara.svg')"
                  class="my-3"
                  contain
                  height="200"
                  @click="$router.go('/')"
                ></v-img>
        </v-flex>
      </v-col>
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-flex  >
                <h1 class="headline text-uppercase mb-3"> Shuqbara <span class="font-weight-light"> Inventory</span> </h1>
              <v-layout justify-center>
                  <v-btn outlined color="blue lighten-2" large @click="goThere('/register')"  > 
                  Get started         
                  </v-btn>
              </v-layout> 
                  <p>
                    <a href="https://github.com/Fthi-S3074641/shuqbara-inventory" target="_blank">
                      <img src="https://img.shields.io/github/stars/Fthi-S3074641/shuqbara-inventory.svg?style=social&label=Star">
                      <img src="https://img.shields.io/github/forks/Fthi-S3074641/shuqbara-inventory.svg?style=social&label=Fork">
                    </a>
                </p> 
          </v-flex>
      </v-col>
          </v-row>
      </v-card-title>
      

    </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goThere(distnation){
      this.$router.push(distnation)
    }
  }
};
</script>
