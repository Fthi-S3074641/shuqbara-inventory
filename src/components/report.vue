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
          <span> Shuqbara </span>
          <span class="font-weight-light"> Premium</span>
          </h1>

        <p class="subheading font-weight-regular">
          <br> Download premium from
          <a href="https://shuqbara.com" target="_blank">PickApp Technology</a>
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
  <em>Or call us to get a Premium version </em>
        <v-layout justify-center>
       <h2 class="font-weight-light"> 0953166155</h2>

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
  },
  beforeDestroy() {
       const shuqbara = JSON.stringify(this.$store.state.allItems)
        window.localStorage.setItem('shuqbara', shuqbara)
    },
};
</script>
