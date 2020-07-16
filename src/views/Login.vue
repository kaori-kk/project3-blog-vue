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
            <button @click="login" class="btn btn-info form-control">Login</button>
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
      errors: {}
    }
  },
  methods: {
    login(){
      Axios.post("https://react-blog-api.bahdcasts.com/api/auth/login", {
        email: this.email,
        password: this.password
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        this.errors = response.data;
      })
    }
  }
}
</script>