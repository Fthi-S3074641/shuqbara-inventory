<template>
<v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
        <v-card flat class="transparent elevation-0">

    <v-card-text style="height: 400px;">
      <v-list two-line class="transparent elevation-0">
        <v-list-group v-for="(item, index) in filteredArticles" :key="index" no-action :accordion="true" :focusable="true">
        <v-divider :key="index" :inset="true"></v-divider>
        <template v-slot:activator>
          <v-list-item :key="index">
            <v-list-item-avatar :color='getColor(item.iquantity)' size="36">
              <span class="white--text title font-weight-light">{{item.iquantity}}</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title font-weight-light" v-html="`${item.icode}`"></v-list-item-title>
              <v-list-item-subtitle v-html="`<span class='text--primary'>${item.ibrand}</span> &mdash; ${item.itype}.`"></v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>
        </template>

        <v-list-item >
          <v-list-item-content>
            <v-list-item-title>             
              <v-row justify="space-around">
                <Sell :scode="item.icode"/>
                <Restock :rcode="item.icode"/>
                <Edit :ecode="item.icode"/>
                <Delete :dcode="item.icode"/>
              </v-row>
            </v-list-item-title>
            <v-list-item-subtitle v-for="(subItem, index) in item.iactivity" :key="index" v-text="`${subItem.title} ${subItem.idate}`"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card-text>
    </v-card>
  </v-col>
  </v-row>
        
</template>

<script>
import Delete from './../components/menus/delete'
import Sell from './../components/menus/sell'
import Edit from './../components/menus/edit'
import Restock from './../components/menus/restock'
export default {
    props: ['finder'],
    data() {
        return {
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
        },
      getColor(qun) {
                    if(parseInt(qun) > 2) {return 'primary'}
          else {return 'red'}
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
            var articles_array = this.shuqbara
            var searchString = this.finder;

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
    created() {
      this.shuqbara = this.$store.state.allItems
    },
    mounted() {
        const shuqName = JSON.parse(window.localStorage.getItem('shuqName'))
        const shuqPhone = JSON.parse(window.localStorage.getItem('shuqPhone'))
        this.$store.dispatch('setUser', {fullName: shuqName, phoneNumber: shuqPhone})
    }
}
</script>