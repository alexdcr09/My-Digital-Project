<template>
    <div class="">
        <Header/>
            <main class="font-body">
                <div class="flex m-auto h-screen justify-center">
                    <div class="w-3/5 m-auto flex flex-wrap justify-center">
                        <h1 class="text-6xl text-blue font-bold">
                            L'ASSOCIATION
                        </h1>
                        <p class="text-dark-900 font-medium mx-20">
                            Soyez les premiers à soutenir notre projet et à proposer le meilleur contenu vidéo pour nos enfants !
                        </p>
                        <div class="sm:mt-4 sm:ml-3 mt-4 flex justify-center">
                            <a href="#" class="w-72 flex items-center rounded-full justify-center px-8 py-3 font-bold text-xl text-white hover:text-gray-100 bg-blue hover:rounded-2xl border-white border-4 hover:border-blue hover:bg-white hover:text-blue md:py-4 md:text-xl md:px-10">
                                FAITES UN DON
                            </a>
                        </div>
                    </div>
                    <div class="w-4/5 flex justify-center mx-auto ">
                        <div id="containerbg" class="md:w-5/6"/>
                    </div>
                </div>
                <div>
                    <div v-for="info in infos" :key="info.id">
                        <BlocVideos :categorie="info"/>
                    </div>
                </div>
            </main>
        <Footer/>
    </div>
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
        Footer,
    },
    data() {
        return {
            infos: [],
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

<style>

    #containerbg {
        background-image: url('../assets/bg.png');
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        width:60%;
        height: 115vh;
        position: absolute;
        z-index: 0;
        top:0;
        right:0;
    }

</style>