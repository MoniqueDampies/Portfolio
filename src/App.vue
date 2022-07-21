<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>


<style>


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
