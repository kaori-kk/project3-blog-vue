<template>
  <div class="row my-5">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center my-4">Signup</h3>
          <div class="form-group">
            <input v-bind:class="{ 'is-invalid': errors.name }" v-model="name" type="text" placeholder="Name" class="form-control">
            <div class="errors" v-if="errors.name">
              <small class="text-danger" v-for="error in errors.name" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group">
            <input v-bind:class="{ 'is-invalid': errors.email }" v-model="email" type="text" placeholder="Email" class="form-control">
            <div class="errors" v-if="errors.email">
              <small class="text-danger" v-for="error in errors.email" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group">
            <input v-bind:class="{ 'is-valid': errors.password }" v-model="password" type="password" placeholder="Password" class="form-control">
            <div class="errors" v-if="errors.password">
              <small class="text-danger" v-for="error in errors.password" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group text-center">
            <button @click="registerUser()" :disabled="loading" class="btn btn-info form-control">
              {{ loading ? "Loading" : "Signup"}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errors: {},
      loading: false
    }
  },
  methods: {
    registerUser(){
      this.loading = true;
      Axios.post("https://react-blog-api.bahdcasts.com/api/auth/register", {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(response => { 
        this.loading = false;
        localStorage.setItem('auth', JSON.stringify(response.data.data))
        this.$root.auth = response.data.data;
        this.$noty.success("Successfully registered.")
        this.$router.push("home")
      }).catch(({response}) => {
        this.$noty.error("Oops something went wrong")
        this.loading = false;
        this.errors = response.data;
      })
    }
  }
}
</script>