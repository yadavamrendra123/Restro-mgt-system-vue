<template>

    <div class="flex flex-col gap-2 max-w-[500px] shadow-md bg-slate-400">
        <h1>Login Page</h1>

        <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="logindetails.email" class="border border-gray-500 rounded" />

            <label for="password">Password</label>
            <input type="password" id="password" v-model="logindetails.password" class="border border-gray-500 rounded" />

            <button @click="login" class="bg-blue-500 text-white px-4 py-2 rounded uppercase">
                Login
            </button>
        </div>
    </div>

</template>

<script lang="ts">
import axios from 'axios'

export default {
    
    name: 'Login',
    data(){
       return {
        logindetails:{
            email: "",
            password: "",
        }
       }
    },
    methods:{
        login(){
            axios.get(`http://localhost:3000/users?email=${this.logindetails.email}&password=${this.logindetails.password}`).then((response) => {
    
              if(response.data.length>0){
                alert("User Logged In Successfully")
                localStorage.setItem('login-info',JSON.stringify(response.data))
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
    },
    mounted() {
        let user = localStorage.getItem('login-info')
        if(user){
            this.$router.push('/')
        }
    }
   
}
</script>