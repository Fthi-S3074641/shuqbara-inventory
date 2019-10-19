<template>
  <div class="text-center">
    <v-menu v-model="dialog"  :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on }">
            <v-btn icon v-on="on"> <v-icon large color="primary lighten-2" >mdi-cart-plus</v-icon> </v-btn>
      </template>
      <v-card flat class="elevation-0">
        <v-card-title class="primary headline grey lighten-2" primary-title> Adding: "{{rcode}}" </v-card-title>
        <v-card-text>
           Are you sure you want to add {{amount}} item to "<span class="font-weight-bold">{{rcode}}</span>"?
            <v-text-field label="Quantity" clearable min="0"  v-on:keyup.enter="addMore" outlined v-model="amount" type="number"></v-text-field>
            <p  class="font-weight-bold red--text" v-if="!quantityEnough">Must be Positive & less than total number</p>
        </v-card-text>
        <v-card-actions>
            <v-btn color="secondary" text @click="cancel()" > Cancel </v-btn>
            <div class="flex-grow-1"></div>
            <v-btn color="primary lighten-2" @click="addMore()" :disabled="!quantityEnough" > Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import etdate from 'ethiopic-date'

export default {
    props: ['rcode'],
    data () {
      return {
        dialog: false,
        more: false,
        amount: null,
        moreItem: {}
      }
    },
    methods: {
      addMore() {
        const indx = this.getIndex
        const oldq = this.moreItem.iquantity
        var activity = []
        activity.push(...this.moreItem.iactivity)
        activity.push({title: `+${this.amount}`, idate: etdate.now()})
        this.$store.dispatch('moreItem', {
          index: indx, 
          iquantity: parseInt(oldq) + parseInt(this.amount), 
          iactivity:  activity
        }).then(() => {
          this.dialog = false
          this.more = true
          window.localStorage.setItem('shuqbara', JSON.stringify(this.getAll))
        })
        
      },
      cancel() {
          this.dialog = false
          this.more = false
      }
    },
    computed: {
      getIndex(){
      return this.getAll.map(function(e) {
            return e.icode;}).indexOf(this.rcode);
      },
      getAll() {
        return this.$store.state.allItems
      },
      quantityEnough() {
        return (
          parseInt(this.amount) >= 1
          )
      }
    },
    created() {
      this.moreItem = this.getAll[this.getIndex]

    }
  }
</script>
