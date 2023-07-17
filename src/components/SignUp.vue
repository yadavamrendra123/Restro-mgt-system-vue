<template>
  <!-- here we will create a form for the user to sign up -->

  <div
    class="flex flex-col items-center justify-center m-8 p-4 shadow-md max-w-[500px mx-auto]"
  >
    <h1>Singn Up</h1>

    <div class="flex flex-col items-center justify-center gap-4">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" class="border border-gray-500 rounded"/>

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email"   class="border border-gray-500 rounded"/>

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" class="border border-gray-500 rounded" />

      <label for="password-confirmation">Password Confirmation</label>
      <input
        type="password"
        id="password-confirmation"
        v-model="passwordConfirmation"
        class="border border-gray-500 rounded"
      />

        <button @click="signUp" class="bg-blue-500 text-white px-4 py-2 rounded uppercase">
            Sign Up
        </button>

        <p>
            Already have an account? <router-link to="/login">Login</router-link>
        </p>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  },
  methods:{
    signUp(){
        
        axios.post('http://localhost:3000/users', {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation
        }).then((response) => {

          if(response.status==201){
            alert("User Created Successfully")
            localStorage.setItem('user-infor',JSON.stringify(response.data))
            this.$router.push('/')
            
          }
          else{
            alert("Something went wrong")
          }
            console.log(response)

            
        }).catch((error:any) => {
            console.log(error)
        })


    }
  }
};
</script>
