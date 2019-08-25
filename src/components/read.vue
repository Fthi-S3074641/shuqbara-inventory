<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
        <v-card flat>

      <v-card-title >
      <h2 class="mb-1 headline black--text">&nbsp;&nbsp;&nbsp;&nbsp; </h2>
            <v-autocomplete
            label="Search using a unique code"
            placeholder="Write down ID or code of an item"
            :items="getCodeList"
            prepend-inner-icon="mdi-magnify"
            ></v-autocomplete>
      </v-card-title>

    <v-list three-line>
      <template v-for="(item, index) in getAll">

        <v-divider
          :key="index"
          :inset="true"
        ></v-divider>

        <v-list-item
          :key="item.icode"
        >
          <v-list-item-avatar>
            <v-badge left color="purple">
                <template v-slot:badge>
                    {{item.iquantity}}
                </template>
            </v-badge>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.icode"></v-list-item-title>
            <v-list-item-subtitle v-html="item.idetail"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
  </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
    }),
    computed: {
      getCodeList(){
        return this.getAll.map(fruit => fruit.icode)
        },
      getAll() {
        // console.log(this.$store.state.allItems)
        return this.$store.state.allItems
      }
    }
  }
</script>