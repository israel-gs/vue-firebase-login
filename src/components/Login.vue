<template>
  <div class="login">
    <div class="container">
      <section>
        <h1 class="title">Sign In</h1>
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
          <button class="button is-link" v-on:click="signIn">
            <span class="icon is-small">
              <i class="fas fa-bold"></i>
              <font-awesome-icon icon="sign-in-alt" />
            </span>
            <span>Connection</span>
          </button>
        </b-field>
      </section>
    </div>
    <p>You do not have an account yet? You can <router-link to="/sign-up">create one</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: `login`,
  data: function () {
    return {
      email: ``,
      password: ``,
      error: ``
    }
  },
  methods: {
    signIn () {
      const loadingComponent = this.$loading.open()
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
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
        .then(() => {
          loadingComponent.close()
        })
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 40px;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
