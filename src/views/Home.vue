<template>
<Header/>
<main class="font-body">
    <div class="flex m-auto justify-center">
        <div class="w-screen p-8 m-auto flex flex-wrap justify-center">
            <h1 class="text-6xl text-dark-900 font-bold mt-15">
                LES DEUX PAUMES
            </h1>
            <h3 class="text-3xl text-dark-900 font-bold m-3">
                FAITES PARTIS DE L’AVENTURE !
            </h3>
            <p class="text-dark-900 font-medium mx-32 mb-6">
                Soyez les premiers à soutenir notre projet et à proposer le meilleur contenu vidéo pour nos enfants !
            </p>
            <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 sm:mt-0 sm:ml-3 flex justify-center">
                <a href="#" class="w-72 flex items-center rounded-full justify-center px-8 py-3 font-bold text-xl text-gray-800 hover:text-white bg-primary hover:bg-third md:py-4 md:text-xl md:px-10">
                    FAITES UN DON
                </a>
            </div>
        </div>
        <div class="w-4/5 flex justify-center m-auto text-5xl font-bold">
            Bloc 2
        </div>
    </div>
    <div>
        <div v-for="info in infos" :key="info.id">
            <BlocVideos :categorie="info"/>
        </div>
    </div>
    
</main>
    <Footer/>
</template>

<script>
import BlocVideos from '../components/BlocVideos.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import axios from 'axios'
// @ is an alias to /src

export default {
    name: 'Home',
    components: {
        Header,
        BlocVideos,
        Footer
    },
    data() {
        return {
            infos: []
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios
                .get('http://localhost:3000/data')
                .then(response => {
                    this.infos = response.data
                    console.log(this.infos)
                })
        },
  }
}
</script>