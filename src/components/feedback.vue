<template class="transparent">
  <v-expansion-panels v-model="panel" dense flat :accordion="true" :focusable="true" class="transparent elevation-0" style="background: rgba(0,0,0,0);">
    <v-expansion-panel>
      <v-expansion-panel-header class=" font-weight-light"><span class='text--primary'>{{getName}}&nbsp; &mdash; &nbsp;{{getPhone}} </span> 
         <template v-slot:actions>
            <v-icon color="red lighten-2">mdi-heart</v-icon>
          </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row justify="center">
          <v-col cols="12" sm="4" md="4" lg="6">
                       <v-text-field placeholder="Write your Name" preppend-icon="mdi-person" clearable required ref="fullName" v-model="fullName" :rules="[() => !!fullName || 'This field is required']" ></v-text-field>
          <v-text-field placeholder="Phone number" preppend-icon="mdi-phone" clearable required ref="phoneNumber" type="number" v-model="phoneNumber" :rules="[() => !!phoneNumber || 'Only numbers supported']" ></v-text-field>
            </v-col>
          <v-col cols="12" sm="10" md="8" lg="6">
             <v-text-field placeholder="Main Title" clearable outlined required v-model="feedbackTitle" :rules="[() => !!feedbackTitle || 'This field is required']"></v-text-field>
              <v-textarea v-on:keyup.enter="submit" outlined clearable required label="Write all Your feedback" value="..." v-model="mainFeedback" :rules="[() => !!mainFeedback || 'This field is required']"></v-textarea>
            <v-row align="center" justify="center" style="margin: 3px;">
              <div class="flex-grow-1"></div>
              <v-btn color="primary" :disabled="!mainFeedback || !feedbackTitle" @click="submit" text outlined>Submit</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import etdate from 'ethiopic-date'
import { db } from './../firebase'

export default {
    data() {
        return {
            feedbacks: [],
            mainFeedback: null,
            feedbackTitle: null,
            panel: [],
            phoneNumber: null,
            fullName: null
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
                    fullName: this.fullName,
                    phoneNumber: this.phoneNumber,
                    feedbackTitle: this.feedbackTitle,
                    mainFeedback: this.mainFeedback,
                    iwhen: etdate.now()
                }

                    this.$firestore.feedbacks.add(newFeedback)
                    this.panel = []
            window.localStorage.setItem('shuqName', JSON.stringify(this.fullName))
            window.localStorage.setItem('shuqPhone', JSON.stringify(this.phoneNumber))
        }
    },
    computed: {
        getPhone() {
          if(this.$store.state.phoneNumber !== null) { 
            // this.phoneNumber = this.$store.state.phoneNumber
            return this.$store.state.phoneNumber
            }
          else {return '+251'}
        },
        getName() {
          if(this.$store.state.fullName !== null) { 
            // this.fullName = this.$store.state.fullName
            return this.$store.state.fullName
            }
          else {return 'Share Your feedback'}
        }
    },
    created() {
      this.phoneNumber = this.getPhone
      this.fullName = this.getName
    },
    mounted() {
        const shuqName = JSON.parse(window.localStorage.getItem('shuqName'))
        const shuqPhone = JSON.parse(window.localStorage.getItem('shuqPhone'))
        this.$store.dispatch('setUser', {fullName: shuqName, phoneNumber: shuqPhone})
    }
}
</script>