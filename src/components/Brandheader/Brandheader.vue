<template>
  <v-toolbar app
             scroll-off-screen
             fixed
             dark
             class="primary">
    <v-toolbar-title>Missed Connections</v-toolbar-title>
    <v-spacer></v-spacer>
    {{ user.firstName }}
    <v-menu offset-y v-if="isAuthenticated">
      <v-btn icon slot="activator" dark>
        <v-icon large dark>account_circle</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon medium>account_circle</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ user.firstName }} {{ user.lastName }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile>
          <v-btn block
                 primary
                 small
                 @click="submitLogout()">Logout
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-menu>
    <signup v-if="!isAuthenticated"></signup>
    <login v-if="!isAuthenticated"></login>
  </v-toolbar>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  import signup from '../Signup/Signup';
  import login from '../Login/Login';

  export default {
    name: 'brandheader',
    components: {
      signup,
      login,
    },
    computed: {
      ...mapGetters([
        'isAuthenticated',
      ]),
      ...mapState([
        'user',
      ]),
    },
    methods: {
      submitLogout() {
        this.$store.dispatch('logout');
      },
    },
  };
</script>
