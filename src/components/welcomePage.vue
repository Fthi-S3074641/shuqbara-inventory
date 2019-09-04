<template>
  <v-container>

    <v-layout
      text-center
      wrap
      justify-center
      align-center
    >
    <v-flex xs12 sm10 md8>
      <v-card flat style="margin: 10px;">
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
          @click="$router.go('/')"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
              <h1 class="headline text-uppercase mb-3">
          <span> Vision </span>
          <span class="font-weight-light"> Inventory manager</span>
          </h1>

        <p class="subheading font-weight-regular">
          Register | Read | Report
          <br> Made by
          <a href="https://shuqbara.com" target="_blank">PickApp Technology</a>
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
          <em>Continue to get started </em>
        <v-layout justify-center>
            <v-btn
              color="blue lighten-2"
              large
              @click="goThere('/register')"
            >
              Continue
            </v-btn>
        </v-layout>
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

    }
  },
  methods: {
    goThere(distnation){
      this.$router.push(distnation)
    }
  },
  beforeDestroy() {
       const shuqbara = JSON.stringify(this.$store.state.allItems)
        window.localStorage.setItem('shuqbara', shuqbara)
    },
};
</script>
