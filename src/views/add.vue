<template>
  <v-app dense>
    <!-- Start of Navigation -->
    <nav>
      <!-- Start of app toolbar -->
      <v-app-bar app flat dense>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">
          <span @click="$router.push('/')"> Rcube </span>
          <span class="font-weight-light" @click="$router.push('/read')"> Inventory manager</span>
          </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn 
          v-for="(it, index) in items"
          :key="index"
          :to="it.link" text exact> {{ it.text}} </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <!-- End of app toolbar -->

      <!-- Start of mobile side menu -->
      <v-navigation-drawer app v-model="drawer" left>
        <!-- Menu title -->
        <v-app-bar flat>
          <v-list>
            <v-subheader class="title"> Rcube Manager </v-subheader>
          </v-list>
        </v-app-bar>
        <v-divider></v-divider>
        <!-- Menu Links -->
        <v-list>
          <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <!-- End of mobile side menu -->
    </nav>
    <!-- End of Navigation -->

    <v-content style="padding: 0px;">
    <router-view> </router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
    data(){
        return {
            drawer: false,
            item: 1,
            items: [
                { text: 'Register', icon: 'mdi-folder', link: '/register' },
                { text: 'Read', icon: 'mdi-clock', link: '/read' },
                { text: 'Report', icon: 'mdi-update', link: '/report' },
            ]
        }
    },
    methods: {
    goThere(distnation){
      this.$router.push(distnation)
    }
  }
}
</script>