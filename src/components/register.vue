<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
      <v-card-title>
      <h2 class="mt-2 mb-1 headline black--text">Add New Item</h2>
      </v-card-title>
        <v-card-text>

    <v-container>
    <v-row justify="center" color="primary">

        <v-col cols="12" sm="6">
          <v-text-field
            label="Write down a unique code"
            placeholder="ID of the new item"
            clearable
            prepend-icon="mdi-hanger"
            autofocus
            required
            ref="icode"
            v-model="icode"
            :rules="[() => !!icode || 'This field is required']"
          ></v-text-field>
        </v-col>

                <v-col cols="12" sm="6" >
          <v-text-field
            label="Number of items to register"
            placeholder="Quantity"
            prepend-icon="mdi-counter"
            clearable
            required
            ref="iquantity"
            v-model="iquantity"
            type="number"
            :rules="[() => !!iquantity || 'This field is required']"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            label="Write down brand name"
            placeholder="Brand of the new item"
            outlined
            clearable
            required
            ref="ibrand"
            v-model="ibrand"
            :rules="[() => !!ibrand || 'This field is required']"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" >
          <v-text-field
            label="Write down type of the new item"
            placeholder="Type or Group of the new item"
            outlined
            clearable
            required
            ref="itype"
            v-model="itype"
            :rules="[() => !!itype || 'This field is required']"
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
        </v-card-text>

        <v-divider class="mt-2"></v-divider>
        <v-card-actions>
          <v-btn text @click="cancel">Cancel</v-btn>
            <div class="flex-grow-1"></div>
            <v-slide-x-reverse-transition>
                <v-tooltip
                v-if="formHasErrors"
                left
                >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  class="my-0"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Start Again</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import format from "date-fns/format"

export default {
    data() {
      return {
        errorMessages: '',
        icode: null,
        iquantity: null,
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
            iregister: this.format(new Date()),
            imodify: this.format(new Date()),
            idetail: `<span class='text--primary'>${this.ibrand}</span> &mdash; ${this.itype}.`,
            iactivity: [{
              title: "Created",
              idate: this.format(new Date())
            }]
          }
          this.$store.dispatch('addItem', inew).then(()=> {
                this.$router.push('/read')
              });
      },
      cancel() {
        this.$router.go(-1)
      }
    },

  }
</script>