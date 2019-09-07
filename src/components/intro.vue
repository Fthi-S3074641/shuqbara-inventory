<template >
<v-app>
      <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">

<v-card flat class="transparent" ref="form" >
<v-card-text>
  <v-stepper v-model="e6" vertical flat class="transparent" style="background: rgba(0,0,0,0);">
    <v-stepper-step :complete="e6 > 1" step="1">
      Code or ID
      <small>unique name for the new Item</small>
    </v-stepper-step>

    <v-stepper-content step="1">
          <v-text-field
            label="Code"
            placeholder="ID of the new item"
            clearable
            outlined
            autofocus
            required
            ref="icode"
            v-model="icode"
            :rules="[() => !!icode || 'This field is required']"
          ></v-text-field>
      <v-btn color="primary" :disabled="icode == null" @click="e6 = 2">Continue</v-btn>
      <v-btn text @click="$router.go(-1)">Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Brand name</v-stepper-step>

    <v-stepper-content step="2">
          <v-text-field
            label="Brand"
            placeholder="Brand of the new item"
            outlined
            clearable
            required
            ref="ibrand"
            v-model="ibrand"
            :rules="[() => !!ibrand || 'This field is required']"
          ></v-text-field>
      <v-btn color="primary" :disabled="ibrand == null" @click="e6 = 3">Continue</v-btn>
      <v-btn text @click="e6 = 1">Go back</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Type or Group of the item
          <small>Use this field for anything you like</small>
    </v-stepper-step>
    <v-stepper-content step="3">
          <v-text-field
            label="Type"
            placeholder="Type or Group of the new item"
            outlined
            clearable
            required
            ref="itype"
            v-model="itype"
            :rules="[() => !!itype || 'This field is required']"
          ></v-text-field>
      <v-btn color="primary" :disabled="itype == null" @click="e6 = 4">Continue</v-btn>
      <v-btn text @click="e6 = 2">Go back</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
    Quantity 
    <small> Number of items to register </small>
    </v-stepper-step>
    <v-stepper-content step="4">
          <v-text-field
            label="Quantity"
            placeholder="Number of items to register"
            clearable
            outlined
            required
            ref="iquantity"
            v-model="iquantity"
            type="number"
            :rules="[() => !!iquantity || 'This field is required']"
          ></v-text-field>
          <v-btn text @click="e6 = 3">Go back</v-btn>
      </v-stepper-content>
        </v-stepper>
  </v-card-text>
      <v-card-actions>
      <v-btn color="primary" :disabled="!formisValid" @click="submit">Register</v-btn>
      <div class="flex-grow-1"></div>
      <v-btn text @click="resetForm">Start Over</v-btn>
</v-card-actions>
 


      </v-card>
    </v-col>
  </v-row>
  </v-app>
</template>

<script>
import format from "date-fns/format"

export default {
    data() {
      return {
        e6: 1,
        errorMessages: '',
        icode: null,
        iquantity: 0,
        ibrand: null,
        itype: null,
        formHasErrors: false
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
      formisValid() {
        return (
          this.icode !== null &&
          this.itype !== null &&
          this.iquantity >= 0 &&
          this.ibrand !== null
        )
      }
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      format(val) {
        return format(val, "mm-dd-yyyy")
      },
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
            iquantity: this.iquantity,
            ibrand: this.ibrand,
            itype: this.itype,
            istate: "Created",
            iwhen: this.format(new Date()),
            iactivity: [ ]
          }
          this.$store.dispatch('addItem', inew).then(()=> {
                this.$router.push('/read')
              });
      },
      cancel() {
        this.$router.go(-1)
      }
    },
    beforeDestroy() {
       const shuqbara = JSON.stringify(this.$store.state.allItems)
        window.localStorage.setItem('shuqbara', shuqbara)
    },

  }
</script>
