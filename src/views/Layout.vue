<template>
    <div class="w-full overflow-hidden">

        <!-- router view -->
        <div>
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    components: { RouterLink, RouterView },
    data:()=>{
        return{
             
        };
    },
    methods:{
         
    },
    computed:{
    },
    mounted(){
        this.$router.push({ name:'about-us'});
    }
}
</script>
