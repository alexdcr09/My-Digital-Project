<template>
  <header class="flex justify-between shadow-md sm:flex sm:items-center sm:px-2 sm:py-2 mb-5 w-full font-body">
    <div class="flex items-center px-4 py-3 sm:p-0">
      <div>
        <router-link to="/" class="inline-block px-2 py-1 font-semibold rounded">
                <img class="h-10" src="../assets/logo.png" alt="Logo">
        </router-link>
      </div>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <div class="flex justify-around transform motion-safe:hover:scale-110 ">
            <router-link to="/" class="inline-block mx-8 px-2 py-1 font-semibold rounded text-xl	text-gray-900 hover:text-secondary">Dessins animés</router-link>
            <router-link to="/about" class="inline-block mx-8 px-2 py-1 font-semibold rounded text-xl text-gray-900	hover:text-secondary">Activités</router-link>
            <router-link to="/detailsvideo" class="inline-block mx-8 px-2 py-1 font-semibold rounded text-xl text-gray-900	hover:text-secondary">Musique</router-link>
            <router-link to="/detailsvideo" class="inline-block mx-8 px-2 py-1 font-semibold rounded text-xl text-gray-900	hover:text-secondary">Parentalité</router-link>
            <router-link to="/detailsvideo" class="inline-block mx-8 px-2 py-1 font-semibold rounded text-xl text-gray-900	hover:text-secondary">L'association</router-link>
        </div>
        <router-view/>
    </nav>
      <div class="bg-white-500 flex items-center h-auto shadow-inner rounded-full border-gray-200 mr-8">
        <input class="rounded-l-full w-full py-2 px-6 text-gray-800 leading-tight focus:outline-none" id="search" type="text" placeholder="Que recherchez vous">
      <div>
        <button class="bg-primary text-white rounded-full rounded-l-lg focus:outline-none w-10 h-10 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.66052" cy="8.66052" r="7.66052" stroke="white" stroke-width="2"/>
            <rect x="13.8868" y="14.2615" width="10.2963" height="1" rx="0.5" transform="rotate(48.3735 13.8868 14.2615)" fill="white" stroke="white"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>