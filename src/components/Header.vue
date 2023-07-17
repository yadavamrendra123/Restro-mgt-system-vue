<template>
    <div>

        <!-- we will create menu here  -->

        <div class="flex justify-between items-center bg-gray-200 p-4">
            <h1 class="text-2xl font-bold">Restro Management System</h1>
            <div class="flex gap-4">
                <router-link to="/" class="bg-blue-500 text-white px-4 py-2 rounded uppercase">
                    Home
                </router-link>
                <router-link to="/login" class="bg-blue-500 text-white px-4 py-2 rounded uppercase">
                    Add Restaurant
                </router-link>
                <router-link to="/signup" class="bg-blue-500 text-white px-4 py-2 rounded uppercase">
                    Update Restaurant
                </router-link>

                <router-link to="/login" class="bg-blue-500 text-white px-4 py-2 rounded uppercase">
                    Delete Restaurant
                </router-link>

                <button @click="logOut" class="bg-blue-500 text-white px-4 py-2 rounded uppercase">
                    Logout
                </button>
            </div>

        </div>   
        
    </div>
</template>


<script lang="ts">

export default {
    name: 'Header',
    methods:{
        logOut(){
            alert("Are you sure you want to logout")
            localStorage.removeItem('login-info')
            this.$router.push('/login')
        }

    }
   
}
</script>