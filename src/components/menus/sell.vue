<template>
  <div class="text-center">
    <v-menu v-model="dialog"  :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on }">
        <v-chip class="primary lighten-1 font-weight-bold" text-color="white" v-on="on" medium> Sell              </v-chip>
      </template>
      <v-card flat class="elevation-0">
        <v-card-title class="primary headline grey lighten-1" primary-title>Selling: "{{scode}}"</v-card-title>
        <v-card-text>
            Are you sure you want to sell {{amount}} item from "<span class="font-weight-bold">{{scode}}</span>"?
            <v-text-field label="Quantity" clearable outlined min="0"  v-on:keyup.enter="lessOne" v-model="amount" type="number"></v-text-field>
          <div class="font-weight-bold red--text" v-if="!quantityEnough">Must be Positive & less than total number</div>
        </v-card-text>
        <v-card-actions>
                <v-btn color="secondary" text @click="cancel()" >         Cancel             </v-btn>
              <div class="flex-grow-1"></div>
              <v-btn color="primary lighten-1 " @click="lessOne()" :disabled="!quantityEnough" > Confirm </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>    
  </div>
</template>

<script>
import etdate from 'ethiopic-date'

export default {
    props: ['scode'],
    data () {
      return {
        dialog: false,
        less: false,
        amount: null,
        lessItem: {}
      }
    },
    methods: {
      lessOne() {
        const indx = this.getIndex
        const oldq = this.lessItem.iquantity
        var activity = []
        activity.push(...this.lessItem.iactivity)
        activity.push({title: `-${this.amount}: `, idate: etdate.now()})
        this.$store.dispatch('lessItem', {
          index: indx, 
          iquantity: parseInt(oldq) - parseInt(this.amount), 
          iactivity:  activity
        }).then(() => {
          this.dialog = false
          this.less = true
          window.localStorage.setItem('shuqbara', JSON.stringify(this.getAll))
        })
        
      },
      cancel() {
          this.dialog = false
          this.less = false
      }
    },
    computed: {
      getIndex(){
      return this.getAll.map(function(e) {
            return e.icode;}).indexOf(this.scode);
      },
      getAll() {
        return this.$store.state.allItems
      },
      quantityEnough() {
                return (
          parseInt(this.amount) >= 1 &&
          parseInt(this.amount) <= parseInt(this.lessItem.iquantity)
          )
      }
    },
    created() {
      this.lessItem = this.getAll[this.getIndex]
    }
  }
</script>