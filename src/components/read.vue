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

<v-card-text>
        <p justify="center" align="center"> Available Items: Order Decreasing <v-icon @click="descendingList" color="primary"> mdi-arrow-down</v-icon> Order Increasing  <v-icon @click="increasingList" color="primary"> mdi-arrow-up</v-icon></p>
    <v-list three-line>

          <v-list-group
        v-for="(item, index) in filteredArticles"
        :key="item.icode"
        no-action
        :accordion="true"
        :focusable="true"
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
                <v-list-item-subtitle v-html="`<span class='text--primary'>${item.ibrand}</span> &mdash; ${item.itype}.`"></v-list-item-subtitle>
              </v-list-item-content>

        </v-list-item>
      </template>

              <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle 
              v-for="subItem in item.iactivity"
              :key="subItem.title"
              v-text="`${subItem.title} at:  ${subItem.idate}`"></v-list-item-subtitle>
          </v-list-item-content>


              <v-list-item-action>
                <v-list-item-action-text v-text="`${item.istate} at: ${item.iwhen}`"></v-list-item-action-text>
                <v-row justify="space-around">
                  <Sell :scode="item.icode"/>
                  <Restock :rcode="item.icode"/>
                  <Edit :ecode="item.icode"/>
                  <Delete :dcode="item.icode"/>
                </v-row>
            </v-list-item-action>
        </v-list-item>
        </v-list-group>
    </v-list>

    </v-card-text>
    <v-card-actions>
    <v-spacer />
      <v-btn  fab dark color="primary" @click="$router.push('/register')">
      <v-icon > mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
</template>

<script>
import Delete from './dialog/delete'
import Sell from './dialog/sell'
import Edit from './dialog/edit'
import Restock from './dialog/restock'

export default {
    data() {
      return {
        searchString: null,
        sold: false,
        shuqbara: []
      }
    },
    methods: {
      getIndex(iicode) {
        return this.getAll.map(function(e) {
          return e.icode;}).indexOf(iicode);
      },
      increasingList() {
          this.shuqbara.sort((a, b) => a.iquantity - b.iquantity);
        },
      descendingList() {
          this.shuqbara.sort((a, b) => b.iquantity - a.iquantity);
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
            var articles_array = this.shuqbara,
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
    },
    components: {
      Delete,
      Sell,
      Edit,
      Restock
    },
    beforeDestroy() {
       const shuqbara = JSON.stringify(this.$store.state.allItems)
        window.localStorage.setItem('shuqbara', shuqbara)
    },
    created() {
      this.shuqbara = this.$store.state.allItems
    },
  }
</script>
