<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Enter your Name</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Write Feedback</v-stepper-step>

      <v-divider></v-divider>

    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
                <v-row          justify="center"        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Enter Name & Phone Number</v-toolbar-title>
                <div class="flex-grow-1"></div>
               
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      v-on="$router.go(-1)"
                    >
                      <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                  </template>
                  <span>Go Back</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Name"
                    v-model="name"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="phoneNumber"
                    label="Phone Number"
                    prepend-icon="mdi-phone"
                    type="number"
                    hint="+251... / 09..."
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
              <v-btn text @click="$router.go(-1)">Cancel</v-btn>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" :disabled="!formisvalid" @click="e1 = 2">Next</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
      <Feedback />
      </v-stepper-content>


    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Feedback from './feedback'

  export default {
    data () {
      return {
        e1: 0,
        name: '',
        phoneNumber: ''
      }
    },
    components: {
        Feedback
    },
    computed: {
        formisvalid() {
            return (
                this.name !== '' &&
                this.phoneNumber !== ''
                )
        }
    }
  }
</script>