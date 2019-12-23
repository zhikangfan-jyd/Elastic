<template>
  <div class="app">
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  components:{
    Home
  }
}
</script>

<style>
  @import url('./assets/style/init.css');
  .app{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  a:hover{
    text-decoration: none;
  }
</style>