<template>
  <div class="text-center">
    <v-menu v-model="dialog" :close-on-content-click="false" offset-y >
      <template v-slot:activator="{ on }">
            <v-btn icon v-on="on"> <v-icon large>mdi-pencil</v-icon></v-btn>
      </template>
      <v-card flat>
        <v-card-title class="danger headline grey lighten-1" primary-title> Modify: "{{ ecode }}"</v-card-title>
        <v-card-text>
          <br>
          <v-text-field label="Code" clearable  v-model.trim="newicode"></v-text-field>
          <p class="red--text" v-if="(nameExist !== -1 || isSame)"> Duplicated name. Make it unique </p>
          <v-text-field label="Brand"  clearable v-model="newibrand"></v-text-field>
          <v-text-field label="Type"  autofocus clearable v-model="newitype"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" text @click="cancel()"> Cancel </v-btn>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" @click="updateDetails()" :disabled="(nameExist !== -1 || isSame)"> Save Edit </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import etdate from 'ethiopic-date'

export default {
    props: ['ecode'],
    data () {
      return {
        dialog: false,
        updateItem: {},
        newicode: "",
        newibrand: "",
        newitype: ""
      }
    },
    methods: {
      cancel() {
        this.dialog = false
        
      },
      updateDetails() {
        const indx = this.getIndex
        this.$store.dispatch('updateItem', {
          index: indx, 
          icode: this.newicode, 
          ibrand: this.newibrand, 
          itype: this.newitype, 
          istate: 'Modified', 
          iwhen: etdate.now()
        }).then(() => {
          this.dialog = false
          window.localStorage.setItem('shuqbara', JSON.stringify(this.getAll))
        })
      }
    },
    computed: {
      getIndex(){
      return this.getAll.map(function(e) {
            return e.icode;}).indexOf(this.ecode);
      },
      getAll() {
        return this.$store.state.allItems
      },
      nameExist() {
        return this.getAll.map(function(e) {
              return e.icode.toString().toLowerCase();}).indexOf(this.newicode.toString().toLowerCase());
      },
      isSame() {
        return (this.newicode.toString().toLowerCase() === this.ecode.toString().toLowerCase())
      }
    },
    created() {
      this.updateItem = this.getAll[this.getIndex]
      this.newicode = this.ecode
      this.newibrand = this.updateItem.ibrand
      this.newitype = this.updateItem.itype
    }
  }
</script>
