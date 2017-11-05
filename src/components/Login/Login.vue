<template>
  <v-dialog width="600" v-model="isVisible">
    <v-btn primary dark slot="activator">Login</v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
              label="Email"
              required
              v-model="loginData.email"
              :counter="10"
              :error-messages="errors.collect('loginData.email')"
              data-vv-name="loginData.email"
              v-validate="'required|email'"
          ></v-text-field>
          <v-text-field
              label="Password"
              required
              type="password"
              v-model="loginData.password"
              required
              :error-messages="errors.collect('loginData.password')"
              data-vv-name="loginData.password"
              v-validate="'required'"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-alert v-if="!loginDialog.isValid" error value="true">
        {{ loginDialog.errorMsg }}
      </v-alert>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            class="blue--text darken-1"
            flat
            @click="toggleDialog()">Close
        </v-btn>
        <v-btn
            class="blue--text darken-1"
            flat
            @click="submitLogin(loginData)">Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    $validates: true,
    name: 'login',
    data() {
      return {
        loginData: {},
      };
    },
    computed: {
      ...mapState([
        'loginDialog',
      ]),
      // why? because we can't directly modify a model via Vuex
      // https://vuex.vuejs.org/en/forms.html
      isVisible: {
        get() {
          return this.$store.state.loginDialog.isVisible;
        },
        set() {
          this.toggleDialog();
        },
      },
    },
    methods: {
      toggleDialog() {
        this.$store.dispatch('toggleDialog', { dialog: 'loginDialog' });
      },
      submitLogin(formData) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$store.dispatch('login', formData);
          }
          return false;
        });
      },
    },
  };
</script>
