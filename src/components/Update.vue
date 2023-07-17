<template>
    <div>
        <Header />
        <div class="container mx-auto">
       <h1 class="text-xl font-extrabold">{{ id }}</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import Header from './Header.vue'
import axios from 'axios'

export default {
    name: 'App',
    components:{
        Header
    },
    data() {
        return {

            id: "",
            
        }


    },

    async mounted(){

        this.id = this.$route.params.id

        let result = await axios.get(`http://localhost:3000/restaurants/${this.id}`)

        console.log(result.data)

    }
   
}

</script>