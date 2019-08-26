<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      persistent
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon color="red lighten-2" v-on="on">
                    <v-icon>mdi-delete</v-icon>
        </v-btn>

      </template>

      <v-card>
        <v-card-title
          class="warning headline grey lighten-2"
          primary-title
        >
          Warning
        </v-card-title>

        <v-card-text>
        You are about to delete this item from the database. You will no longer have access to it. Are you sure you want to delete this item???
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
            color="warning"
            text
            @click="dialog = false"
          >
            Yes Remove
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
        
      }
    }
  }
</script>