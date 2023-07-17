<template>
    <div>
        <Header/>
       <h1 class="text-center">Hello {{ name }},welcome to the Home page</h1>

         <div class="grid grid-cols-3 gap-4 p-4">
              <div v-for="restaurant in restaurants" :key="restaurant.id" class="bg-gray-200 p-4">
                <h1 class="text-xl font-bold">{{ restaurant.name }}</h1>
                <p>{{ restaurant.address }}</p>
               
                <p>{{ restaurant.phone }}</p>

                <p>{{ restaurant.email }}</p>

               <div class="flex gap-3 m-4">
                <p>
                    <router-link :to="'/update/'+restaurant.id" class="bg-blue-500 text-white p-2 rounded uppercase">
                        Update
                    </router-link>
                </p>

                <button @click="deleteRestaurant(restaurant.id)" class="bg-blue-500 text-white p-2 rounded uppercase">
                    Delete
                </button>
               </div>

              </div>

              



             

         </div>
    </div> 
</template>



<script lang="ts">
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'Home',
    components:{
        Header
    },
    methods:{

       async deleteRestaurant(id:number){
           await axios.delete(`http://localhost:3000/restaurants/${id}`).then((response) => {
                console.log(response)
                alert("Restaurant Deleted Successfully")
               
            })
        }
       
    },
    data() {
        return {
            name: "",
            restaurants: [],
        }
    },
   async mounted() {
         let user = localStorage.getItem('login-info')
         if(user){
             user = JSON.parse(user)
             this.name = user?.[0]?.name
            }

            if(!user){
                this.$router.push('/login')
            }

            let result = await axios.get('http://localhost:3000/restaurants')

            this.restaurants = result.data




    }
}
</script>