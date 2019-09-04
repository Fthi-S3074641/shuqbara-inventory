<template>
  <v-container style="max-width: 700px;">
    <v-timeline dense clipped>
      <v-timeline-item
        fill-dot
        class="white--text mb-5"
        color="orange"
        large
      >
        <template v-slot:icon>
          <span>JL</span>
        </template>
        <v-text-field
          v-model="input"
          hide-details
          flat
          label="Leave a comment..."
          solo
          @keydown.enter="comment"
        >
          <template v-slot:append>
            <v-btn
              class="mx-0"
              depressed
              @click="comment"
            >
              Post
            </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition
        group
      >
        <v-timeline-item
          v-for="event in timeline"
          :key="event.id"
          class="mb-3"
          color="pink"
          small
        >
          <v-layout justify-space-between>
            <v-flex xs7 v-text="event.text"></v-flex>
            <v-flex xs5 text-xs-right v-text="event.time"></v-flex>
          </v-layout>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item
        class="mb-4"
        hide-dot
      >
        <span>TODAY</span>
      </v-timeline-item>


      <v-timeline-item
        class="mb-3"
        small
      >
        <v-layout justify-space-between>
          <v-flex xs12 sm8>
            <v-chip
              class="white--text ml-0"
              color="purple"
              label
              small
            >
              Shuqbara
            </v-chip>
            This is a feedback Forum to test out the beta version of our Shuqbara mobile application. Feel free to share your feedback. We highly value the comments we get from all our clients!!!
          </v-flex>
          <v-flex xs5 text-xs-right>Fthi Arefayne</v-flex>
        </v-layout>
      </v-timeline-item>




    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      events: [],
      input: null,
      nonce: 0
    }),

    computed: {
      timeline () {
        return this.events.slice().reverse()
      }
    },

    methods: {
      comment () {
        const time = (new Date()).toTimeString()
        this.events.push({
          id: this.nonce++,
          text: this.input,
          time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          })
        })

        this.input = null
      }
    }
  }
</script>
