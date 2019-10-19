<template>
  <v-app>
    <!-- Start of Navigation -->
    <Header :title="'Leave a Comment'" />
    <!-- End of Navigation -->

  <v-content style="padding: 0px;">
    <Commentie />
  </v-content>
  
  <v-footer app fixed class="transparent elevation-0">
      <Feedbacker />
  </v-footer>
</v-app>

</template>

<script>
import { db } from './../firebase'
import Feedbacker from './../components/feedback'
import Commentie from './../components/comments'
import Header from './../components/header'

export default {
  props: ['feedback'],
  data() {
    return {
      feedbacks: [],
      e6: 1,
        drawer: false,
        item: 1,
        items: [
                { text: 'Register', icon: 'mdi-plus', link: '/register' },
                { text: 'Read', icon: 'mdi-folder-edit-outline', link: '/read' },
                { text: 'Report', icon: 'mdi-collapse-all', link: '/report' }
        ],
        searchString: 'ftu',
    }
  },
  firestore() {
      return {
        feedbacks: db.collection('feedbacks')
      }
  },
  components: {
    Feedbacker,
    Commentie,
    Header
  },
  computed: {
    getTitle() {
      return this.$store.state.title
    },
  },
  mounted() {
        const shuqName = JSON.parse(window.localStorage.getItem('shuqName'))
    const shuqPhone = JSON.parse(window.localStorage.getItem('shuqPhone'))
    this.$store.dispatch('setUser', {fullName: shuqName, phoneNumber: shuqPhone})
  },
  created() {
    if(this.$store.state.fullName === null || this.$store.state.phoneNumber === null){
      this.$router.push('/getcomment')
    }
  }
}
</script>