<template>
    <v-navigation-drawer
      permanent
      app
    >
        <v-card class="ma-3">
            <v-list dense class="py-0">
                <v-radio-group v-model="mySex" :mandatory="false">
                    <v-radio label="male" value="1"></v-radio>
                    <v-radio label="female" value="2"></v-radio>
                    <v-radio label="intersex" value="3"></v-radio>
                </v-radio-group>
            </v-list>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Filters',
    data() {
      return {
        mySex: '',
      };
    },
    watch: {
      mySex(value) {
        this.$store.dispatch('setFilter', Number(value));
      },
    },
  };
</script>
