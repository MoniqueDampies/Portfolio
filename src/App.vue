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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

body{
  font-family: 'Source Sans Pro', sans-serif;
  overflow-x: hidden;
  background: linear-gradient(25deg, #a529b9 19.9%, #50b1e1 95%);
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
