<template>
  <div class="sign-up">
    <div class="container">
      <section>
        <h1 class="title">Let's create a new account !</h1>
        <b-notification v-show="error" type="is-danger">
            {{ error }}
        </b-notification>
        <b-field>
          <b-input v-model="email" placeholder="Email"></b-input>
        </b-field>
        <b-field>
          <b-input type="password" v-model="password" placeholder="Password"></b-input>
        </b-field>
        <b-field>
          <button class="button is-link" v-on:click="signUp">
            <span class="icon is-small">
              <font-awesome-icon icon="sign-in-alt"/>
            </span>
            <span>Sign Up</span>
          </button>
        </b-field>
      </section>
    </div>
    <span class="go-back-message">or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: `signUp`,
  data: function () {
    return {
      email: ``,
      password: ``,
      error: ``
    }
  },
  methods: {
    signUp () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace(`hello`)
          },
          err => {
            this.error = `${err.message}`
            setTimeout(() => {
              this.error = ``
            }, 3000)
          }
        )
    }
  }
}
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}
.go-back-message {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
