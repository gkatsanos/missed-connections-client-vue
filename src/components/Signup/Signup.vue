<template>
  <v-dialog width="600"
            v-model="isVisible"
            persistent>
    <v-btn primary
           dark
           slot="activator">Register
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Register</span>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
              label="Email"
              required
              v-model="signup.email"
              :counter="10"
              :error-messages="errors.collect('signup.email')"
              data-vv-name="signup.email"
              v-validate="'required|email'"
          ></v-text-field>
          <v-text-field
              label="Password"
              required
              type="password"
              v-model="signup.password"
              required
              :error-messages="errors.collect('signup.password')"
              data-vv-name="signup.password"
              v-validate="'required'"
          ></v-text-field>
          <v-text-field
              label="First Name"
              required
              v-model="signup.firstName"
              v-validate="'required'"
          ></v-text-field>
          <v-text-field
              label="Last Name"
              required
              v-model="signup.lastName"
              v-validate="'required'"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-alert v-if="!signupDialog.isValid" error value="true">
        {{ signupDialog.errorMsg }}
      </v-alert>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="blue--text darken-1"
               flat
               @click="toggleDialog()">Close
        </v-btn>
        <v-btn class="blue--text darken-1"
               flat
               @click="submitRegisterForm(signup)">Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    $validates: true,
    name: 'signup',
    data() {
      return {
        valid: false,
        dialog: false,
        signup: {},
      };
    },
    computed: {
      ...mapState([
        'signupDialog',
      ]),
      // why? because we can't directly modify a model via Vuex
      // https://vuex.vuejs.org/en/forms.html
      isVisible: {
        get() {
          return this.$store.state.signupDialog.isVisible;
        },
        set() {
          this.toggleDialog();
        },
      },
    },
    methods: {
      toggleDialog() {
        this.$store.dispatch('toggleDialog', { dialog: 'signupDialog' });
      },
      submitRegisterForm(formData) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$store.dispatch('register', formData);
          }
          return false;
        });
      },
    },
  };
</script>
