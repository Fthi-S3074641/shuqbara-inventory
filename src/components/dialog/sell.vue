<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      persistent
      width="500"
    >
      <template v-slot:activator="{ on }">
                 <v-chip
                 v-if="!sold"
                    class="primary lighten-1 ma-2"
                    text-color="white"
                    v-on="on"
                    small
                  >
                   Sell 1
                  </v-chip>
              <v-chip
                 v-if="sold"
                    class="primary lighten-1 ma-2"
                    text-color="white"
                    v-on="on"
                    small
                  >
                   Sell again
                  </v-chip>
      </template>

      <v-card>
        <v-card-title
          class="primary headline grey lighten-2"
          primary-title>
          Sales information
        </v-card-title>

        <v-card-text>
        1 item will be sold from your stock. Therefore the quantity of available items will decrease by 1. Confirm if 1 item is sold?
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
            @click="sellOne()"
          >
            Confirm
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
        sold: false
      }
    },
    methods: {
      sellOne() {
          this.dialog = false
        this.sold = true
        
      },
      cancel() {
          this.dialog = false
          this.sold = false
      }
    }
  }
</script>