<template>
  <div class="row my-5">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center my-4">Signup</h3>
          <div class="form-group">
            <input v-model="name" type="text" placeholder="Name" class="form-control">
            <div class="errors" v-if="errors.name">
              <small class="text-danger" v-for="error in errors.name" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group">
            <input v-model="email" type="text" placeholder="Email" class="form-control">
            <div class="errors" v-if="errors.email">
              <small class="text-danger" v-for="error in errors.email" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group">
            <input v-model="password" type="password" placeholder="Password" class="form-control">
            <div class="errors" v-if="errors.password">
              <small class="text-danger" v-for="error in errors.password" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group text-center">
            <button @click="registerUser()" class="btn btn-info form-control">Signup</button>
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
      errors: {}
    }
  },
  methods: {
    registerUser(){
      console.log(this.name)
      Axios.post("https://react-blog-api.bahdcasts.com/api/auth/register", {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(response => { 
        localStorage.setItem('auth', JSON.stringify(response.data.data))
        this.$root.auth = response.data.data;
        this.$router.push("home")
      }).catch(({response}) => {
        this.errors = response.data;
      })
    }
  }
}
</script>