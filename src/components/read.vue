<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
        <v-card flat>

      <v-card-title >
      <h2 class="mb-1 headline black--text">&nbsp;&nbsp;&nbsp;&nbsp; </h2>
          <v-text-field
            label="Search using a unique code"
            placeholder="Write down Id"
            prepend-icon="mdi-magnify"
            clearable
            required
            v-model="searchString"
          ></v-text-field>
      </v-card-title>

    <v-list three-line>
          <v-list-group
        v-for="(item, index) in filteredArticles"
        :key="item.icode"
        no-action
      >
                      <v-divider
          :key="index"
          :inset="true"
        ></v-divider>
      <template v-slot:activator>

        <v-list-item
          :key="item.icode"
        >
              <v-list-item-avatar color="primary" size="36">
                <span class="white--text title font-weight-light">{{item.iquantity}}</span>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="title font-weight-light" v-html="item.icode"></v-list-item-title>
                <v-list-item-subtitle v-html="item.idetail"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="`Created at: ${item.iregister}`"></v-list-item-action-text>
                <v-row justify="space-around">
                 <v-chip
                 v-if="!sold"
                    class="ma-2"
                    color="red"
                    text-color="white"
                    @click="sellOne(item)"
                  >
                   Sell 1
                  </v-chip>
              <v-chip
                 v-if="sold"
                    class="ma-2"
                    color="red"
                    text-color="white"
                    @click="sellOne(item)"
                  >
                   Sell again
                  </v-chip>
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-row>
            </v-list-item-action>

        </v-list-item>
      </template>

              <v-list-item
          v-for="subItem in item.iactivity"
          :key="subItem.title"
        >
          <v-list-item-content>
            <v-list-item-subtitle v-text="`${subItem.title} at:  ${subItem.idate}`"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </v-list-group>
    </v-list>
  </v-card>
  </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        searchString: null,
        sold: false
      }
    },
    methods: {
      getIndex(iicode) {
        return this.getAll.map(function(e) {
          return e.icode;}).indexOf(iicode);
      },
      sellOne() {
        this.sold = true
        
      }
    },
    computed: {
      getCodeList(){
        return this.getAll.map(fruit => fruit.icode)
        },
      getAll() {
        // console.log(this.$store.state.allItems)
        return this.$store.state.allItems
      },        
      
      filteredArticles: function () {
            var articles_array = this.getAll,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.icode.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })
            // Return an array with the filtered data.
            return articles_array
        }
    }
  }
</script>