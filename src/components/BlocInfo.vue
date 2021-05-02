<template>
    <div class="flex-grow w-1/6" v-if="info">
        <router-link to="/DetailsVideo" class="hover:underline">
            <img :src="info.src" class="w-96 ">
            <p class="text-left text-sm font-medium"> {{ info.text }} </p>
        </router-link>
    </div>
</template>

<script>
export default {
  
  props: {
      info: Object
  }
}
</script>