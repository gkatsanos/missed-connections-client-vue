<style src="./wrapper.scss" lang="scss"></style>

<template>
  <v-app>
    <filters></filters>
    <brandheader></brandheader>
    <main>
      <adlist></adlist>
    </main>
  </v-app>
</template>

<script>
  import brandheader from '../Brandheader/Brandheader';
  import filters from '../Filters/Filters';
  import adlist from '../Adlist/Adlist';

  export default {
    name: 'app',
    components: {
      brandheader,
      adlist,
      filters,
    },
    beforeRouteEnter(to, from, next) {
      // Pass a callback to next (optional)
      next((vm) => {
        if (to.name === 'authentication') {
          vm.$store.dispatch('authenticate', to.params.activationId);
          vm.$router.push({ name: 'home' });
        }
      });
    },
  };
</script>
