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
          Update "{{ ecode }}" details
        </v-card-title>

        <v-card-text>
        <v-container>
        <v-row justify="center" color="primary" class="form row">

        <v-col cols="12" sm="6">
          <v-text-field
            label="Code"
            clearable
            autofocus
            outlined
            v-model="newicode"
          ></v-text-field>
                    <v-text-field
            label="Brand"
            outlined
            clearable
            v-model="newibrand"
          ></v-text-field>
                    <v-text-field
            label="Type"
            outlined
            clearable
            v-model="newitype"
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
            @click="updateDetails()"
          >
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from "date-fns/format"
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
      format(val) {
        return format(val, "mm-dd-yyyy")
      },
      cancel() {
        this.dialog = false
        
      },
      updateDetails() {
        const indx = this.getIndex
        
        this.$store.dispatch('removeItem', indx).then(()=> {
          this.updateItem.icode = this.newicode
          this.updateItem.ibrand = this.newibrand
          this.updateItem.itype = this.newitype
          this.updateItem.istate = "Modified"
          this.updateItem.iwhen = this.format(new Date())
          this.$store.dispatch('addItem', this.updateItem).then(() => {
            this.dialog = false
          });
        });
      }
    },
    computed: {
      getIndex(){
      return this.getAll.map(function(e) {
            return e.icode;}).indexOf(this.ecode);
      },
      getAll() {
        return this.$store.state.allItems
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