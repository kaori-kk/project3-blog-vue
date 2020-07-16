<template>
  <div class="row my-5">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center my-4">Login</h3>
          <div class="form-group">
            <input v-model="email" type="text" placeholder="Email" class="form-control">
          </div>
          <div class="form-group">
            <input v-model="password" type="password" placeholder="Password" class="form-control">
            <div class="errors" v-if="errors.email">
              <small class="text-danger" v-for="error in errors.email" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group text-center">
            <button @click="login()" :disabled="loading" class="btn btn-info form-control">
              {{ loading ? "Loading" : "Login"}}
            </button>
            <div class="errors" v-if="errors.password">
              <small class="text-danger" v-for="error in errors.password" :key="error">{{error}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data(){
    return {
      email: "",
      password: "",
      errors: {},
      loading: false
    }
  },
  methods: {
    login(){
      this.loading = true;
      Axios.post("https://react-blog-api.bahdcasts.com/api/auth/login", {
        email: this.email,
        password: this.password
      }).then(response => {
        this.loading = false
        this.$root.auth = response.data.data;
        localStorage.setItem('auth', JSON.stringify(response.data.data))
        this.$router.push("home")
      }).catch(({response}) => {
        this.loading = false
        if (response.status === 401){
          this.errors = {
            email: ["There credentials do not match our records."]
          };
        }else {
          this.errors = response.data;
        }
      })
    }
  }
}
</script>