<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      persistent
      width="500"
    >
      <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>

      </template>

      <v-card>
        <v-card-title
          class="danger headline grey lighten-1"
          primary-title
        >
          Update details
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
          ></v-text-field>
        </v-col>

                <v-col cols="12" sm="6" >
          <v-text-field
            label="Number of items to register"
            placeholder="Quantity"
            prepend-icon="mdi-counter"
            clearable
            type="number"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            label="Write down brand name"
            placeholder="Brand of the new item"
            outlined
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" >
          <v-text-field
            label="Write down type of the new item"
            placeholder="Type or Group of the new item"
            outlined
            clearable
          ></v-text-field>
        </v-col>
            </v-row>
            </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="secondary"
            text
            @click="cancel()"
          >
            Cancel
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
      cancel() {
        this.dialog = false
        
      },
      update() {
          this.dialog = false
      }
    }
  }
</script>