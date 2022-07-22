<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar, Footer
  }
}
</script>


<style>


body{
  overflow-x: hidden;
  background-color: rgb(245, 239, 239);
}

::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(50deg, #8c38fe 20%, #b72ee4 50%, #9c66e5 100%);
    border-radius: 500px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(50deg, #8c38fe 20%, #b72ee4 50%, #9c66e5 100%);
  }

</style>
