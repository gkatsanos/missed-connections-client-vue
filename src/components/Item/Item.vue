<template>
  <v-flex d-flex sm12 md6 lg4 xl3>
    <v-card>
      <v-card-media src="http://lorempixel.com/200/200/" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          me: {{ formatSex(item.mySex) }}, you: {{ formatSex(item.yourSex) }}
          {{ item.category.name }}
          {{ item.body }}
          {{ item.username }}
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat class="orange--text">Share</v-btn>
        <v-btn flat class="orange--text">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>

  export default {
    name: 'Item',
    props: {
      item: Object,
    },
    methods: {
      formatSex: (sex) => {
        switch (sex) {
          case 1:
            return 'male';
          case 2:
            return 'female';
          case 3:
            return 'other';
          default:
            return 'male';
        }
      },
    },
  };
</script>
