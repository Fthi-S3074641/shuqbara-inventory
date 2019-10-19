<template>

      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">

        <v-card flat class="transparent elevation-0" ref="form" >

        <v-card-text>
        <v-stepper v-model="e6" vertical flat class="elevation-0" style="background: rgba(0,0,0,0);">
        <v-stepper-step :complete="e6 > 1" step="1">
        Code
        <!-- <small>unique name for the new Item</small> -->
        </v-stepper-step>

        <v-stepper-content step="1">
            <v-row align="center" justify="center" >
                <v-btn text @click="$router.go(-1)">Exit</v-btn>
                  <div class="flex-grow-1"></div>
                <v-btn text color="primary" :disabled="icode == null || (nameExist !== -1)" @click="e6 = 2" style="margin-right: 15px; margin-bottom: 5px;" outlined>Continue</v-btn>
            </v-row>
            <v-text-field autofocus v-on:keyup.enter="e6 = 2" outlined placeholder="ID" clearable  required ref="icode" v-model="icode" :rules="[() => !!icode || 'This field is required']" ></v-text-field>
             <p class="red--text" v-if="(nameExist !== -1)"> Duplicated name. Make it unique </p>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">Brand</v-stepper-step>

        <v-stepper-content step="2">
            <v-row align="center" justify="center" >
                <v-btn icon @click="e6 = 1" style="margin-left: 15px;"> <v-icon> mdi-arrow-up </v-icon></v-btn>
                <div class="flex-grow-1"></div>
                <v-btn text color="primary" :disabled="ibrand == null" @click="e6 = 3" style="margin-right: 15px; margin-bottom: 5px;" outlined>Continue</v-btn>
            </v-row>
              <v-text-field focus v-on:keyup.enter="e6 = 3" outlined placeholder="Brand" clearable  required ref="ibrand" v-model="ibrand" :rules="[() => !!ibrand || 'This field is required']"></v-text-field>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">Group
              <!-- <small>Use this field for anything you like</small> -->
        </v-stepper-step>
        <v-stepper-content step="3">
              <v-row align="center" justify="center" >
                <v-btn icon @click="e6 = 2" style="margin-left: 15px;"> <v-icon> mdi-arrow-up </v-icon></v-btn>
                <div class="flex-grow-1"></div>
                <v-btn text color="primary" :disabled="itype == null" @click="e6 = 4" style="margin-right: 15px; margin-bottom: 5px;" outlined>Continue</v-btn>
            </v-row>
              <v-text-field focus v-on:keyup.enter="e6 = 4" outlined placeholder="Type" clearable required ref="itype" v-model="itype" :rules="[() => !!itype || 'This field is required']"></v-text-field>
        </v-stepper-content>

        <v-stepper-step step="4">
        Quantity 
        <!-- <small> Number of items to register </small> -->
        </v-stepper-step>
        <v-stepper-content step="4">
              <v-row align="center" justify="center" >
                <v-btn text @click="$router.go(-1)">Exit</v-btn>
                <div class="flex-grow-1"></div>
                <v-btn style="margin-right: 15px; margin-bottom: 5px;" outlined class="primary white--text" :disabled="!valueInserted" @click="submit" >Register</v-btn>
            </v-row>
              <v-text-field focus v-on:keyup.enter="submit" min="0" outlined placeholder="Number" clearable required ref="iquantity" v-model="iquantity" type="number" :rules="[() => !!iquantity || 'Must be greater than 1']"></v-text-field>
          </v-stepper-content>
        </v-stepper>
        </v-card-text>
      </v-card>
      </v-col>
      </v-row>
</template>

<script>
import etdate from 'ethiopic-date'
export default {
    data() {
        return {
            e6: 1,
            errorMessages: '',
            icode: null,
            iquantity: null,
            ibrand: null,
            itype: null,
            formHasErrors: false
        }
    },
    methods: {
        resetForm () {
            this.errorMessages = []
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
            this.$refs[f].reset()
            })
            this.e6 = 1
        },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)

        })
        
            const inew = {
            icode: this.icode,
            iquantity: parseInt(this.iquantity),
            ibrand: this.ibrand,
            itype: this.itype,
            istate: "Created",
            iwhen: etdate.now(),
            iactivity: [{title: 'New: ', idate: etdate.now()} ]
          }
          this.$store.dispatch('addItem', inew).then(()=> {
                const shuqbara = JSON.stringify(this.$store.state.allItems)
                window.localStorage.setItem('shuqbara', shuqbara)
                this.$router.push('/read')
              });
      },
      cancel() {
        this.$router.go(-1)
      }
    },
    computed: {
        form () {
            return {
            icode: this.icode,
            iquantity: this.iquantity,
            ibrand: this.ibrand,
            itype: this.itype,
            }
      },
      getAll() {
        return this.$store.state.allItems
      },
      getCode() {
        if(this.icode) {return this.icode.trim().toLowerCase()}
        else {return null}
      },
      nameExist() {
        return this.getAll.map(function(e) {
              return e.icode.trim().toLowerCase();}).indexOf(this.getCode);
      },
      valueInserted() {
        return (
          this.icode !== null &&
          this.ibrand !== null &&
          this.iquantity >= 1 &&
          this.itype !== null 
          )
      }
    },
}
</script>