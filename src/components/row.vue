<template>
  <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-card-title
      color="teal"
      dark
    >
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

    <v-list>
      <v-list-group
        v-for="item in getAll"
        :key="item.icode"
        v-model="item.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.icode"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.iactivity"
          :key="subItem.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
            <v-list-item-subtitle v-text="subItem.idate"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            action: 'local_activity',
            title: 'Attractions',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' },
            ],
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'directions_run',
            title: 'Family',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'healing',
            title: 'Health',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'content_cut',
            title: 'Office',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'local_offer',
            title: 'Promotions',
            items: [
              { title: 'List Item' },
            ],
          },
        ],
        searchString: null
      }
    },
    computed: {
        getAll() {
            return this.$store.state.allItems
        }
    }
  }
</script>