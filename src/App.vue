<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import brandheader from './components/Brandheader/Brandheader';
  import filters from './components/Filters/Filters';
  import adlist from './components/Adlist/Adlist';

  export default {
    name: 'app',
    components: {
      brandheader,
      adlist,
      filters,
    },
  };
</script>
