<template>
  <v-content>
    <v-container fluid grid-list-md>
      <v-layout v-if="isAuthenticated" row wrap>
        <item
            v-for="item in items"
            :key="item.id"
            :item="item">
        </item>
      </v-layout>
      <v-layout v-else>
        <h3>{{ statusMessage }}</h3>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  import Item from '../Item/Item';

  export default {
    name: 'Adlist',
    components: {
      Item,
    },
    computed: {
      ...mapGetters([
        'items',
        'token',
        'isAuthenticated',
      ]),
      ...mapState([
        'statusMessage',
      ]),
    },
    created() {
      if (this.token) {
        this.$store.dispatch('requestItems');
      } else {
        this.$store.dispatch('changeStatus', 'You need to login or register.');
      }
    },
  };
</script>
