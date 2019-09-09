<template>
  <v-timeline>
    <v-timeline-item
      v-for="(feed, index) in feedbacks"
      :key="index"
      color="red lighten-2"
      small
    >
      <template v-slot:opposite>
        <span>{{feed.fullName}} <br> <small> {{feed.phoneNumber}}</small></span>
      </template>
      <v-card class="elevation-0">
        <v-card-title class="title font-weight-regular">{{feed.feedbackTitle}}</v-card-title>
        <v-card-text>
          {{feed.mainFeedback}}.
          <span><small>{{ feed.iwhen}} </small></span>
        </v-card-text>
      </v-card>
    </v-timeline-item>
      <v-row justify="center">
  <v-col cols="12" sm="10" md="8" lg="6">
<v-stepper v-model="e6" vertical class="elevation-0">
    <v-stepper-content step="1">

          <v-text-field
            placeholder="Main Title"
            clearable
            outlined
            required
            v-model="feedbackTitle"
             :rules="[() => !!feedbackTitle || 'This field is required']"
        ></v-text-field>
        <v-textarea
          outlined
          clearable
          required
          label="Write all Your feedback"
          value="..."
          v-model="mainFeedback"
          :rules="[() => !!mainFeedback || 'This field is required']"
        ></v-textarea>
           <v-row align="center" justify="center" style="margin: 3px;">
            <v-btn text @click="$router.go(-1)">Exit</v-btn>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" :disabled="!mainFeedback || !feedbackTitle" @click="submit" text>Submit</v-btn>
          </v-row>
          </v-stepper-content>
</v-stepper>
</v-col>
</v-row>
  </v-timeline>
</template>

<script>
import etdate from 'ethiopic-date'
import { db } from './../firebase'

export default {
  props: ['feedback'],
  data() {
    return {
      feedbacks: [],
      mainFeedback: null,
      feedbackTitle: null,
      e6: 1
    }
  },
  firestore() {
      return {
        feedbacks: db.collection('feedbacks')
      }
  },
  methods: {      
    submit() {
      const newFeedback = {
            fullName: this.$store.state.fullName,
            phoneNumber: this.$store.state.phoneNumber,
            feedbackTitle: this.feedbackTitle,
            mainFeedback: this.mainFeedback,
            iwhen: etdate.now()
          }

            this.$firestore.feedbacks.add(newFeedback)
            // this.$router.push({name: '/comments', params: {feedback: newFeedback}})
    }
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