<template>
  <div class="max-w-7xl mx-auto overflow-hidden pb-2 mb-20" v-if="categorie">
         <div class="block">
            <h2 class="text-left my-4">
                <a href="#">
                    <span class="bg-red-500 hover:bg-third text-left text-white hover:underline text-3xl font-semibold px-4 py-1">
                        {{ categorie.categorie }} 
                    </span>
                </a>
            </h2>
        </div>
        <div class="flex flex-wrap mx-auto" v-for="item in categorie.data" :key="item.id">
            <BlocInfo :info="item"/>
        </div>
  </div>
</template>

<script>
import BlocInfo from './BlocInfo.vue'

export default {
        components: {
            BlocInfo
        },
        props : {
            categorie : Object
        }
}
</script>