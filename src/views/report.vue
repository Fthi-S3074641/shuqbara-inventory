<template>
<v-app>
  <Header :title="'Coming Soon!'" />
  <v-content  style="padding: 0px;">
 <v-row justify="center" style="margin-top: 10px;">
        <v-col cols="12" sm="10" md="8" lg="6">
  <v-container>
    <v-layout
      text-center
      wrap
      justify-center
      align-center
    >
    <v-flex xs12 sm10 md8>
      <v-card flat style="margin: 5px;" class="transparent elevation-0">
      <v-card-title>
            <v-flex mb-4>
                    <h1 >
                <span class="headline text-uppercase mb-3 black--text"> Shuqbara </span>
                <span class="headline text-uppercase mb-3 font-weight-light red--text"> Premium</span>
                </h1>
            </v-flex>
       </v-card-title>

    <v-card-text>
      <v-flex mb-5 xs12 >
        <v-layout justify-center>
            <h2 class="font-weight-light"> 
            <span>
            <v-icon left color="red">mdi-comment-text</v-icon> 
                <v-btn outlined color="red lighten-1" large @click="goThere('/comments')"> Coming Up Soon! </v-btn> </span>
                </h2> 
        </v-layout>
        <br>
            <h2 class="font-weight-light"> OR </h2>
            <br>
            <span>
            <v-icon left color="blue lighten-1">mdi-reload</v-icon> 
            <v-btn outlined color="blue lighten-1" large @click="goThere('/register')"> Continue Testing  </v-btn>
            </span>
      </v-flex>
    </v-card-text>

    <v-card-actions> 
    <v-layout justify="center">
    <v-flex mb-5 xs12 >
        <div class="text--primary">
            <h4 class="font-weight-light"> 
            <v-icon>mdi-web</v-icon>
              www.shuqbara.com </h4>
            <h4 class="font-weight-light">
            <!-- <v-icon small>mdi-email</v-icon> -->
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fthialem@gmail.com </h4>
            <h4 class="font-weight-light">
            +251953166155 </h4>
        </div>
        </v-flex>
        </v-layout>
    </v-card-actions>


  </v-card>
    </v-flex>
    </v-layout>
  </v-container>
  </v-col>
</v-row>
</v-content>
</v-app>
</template>

<script>
import Header from './../components/header'
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
  components: {
    Header
  }
};
</script>
