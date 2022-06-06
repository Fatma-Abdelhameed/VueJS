<template>
  <MainNavbar/>
  <router-view></router-view>
</template>

<script>
import MainNavbar from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    MainNavbar
  }
}
</script>

<style> 
body{
  background-color: #f1f1f1;
}
</style>
