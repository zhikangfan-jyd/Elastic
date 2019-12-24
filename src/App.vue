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
  html,body{
    width: 100%;
    height: 100%;
  }
  body{
    background-image: url('./assets/image/bg.jpg');
  }
  .app{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  a:hover{
    text-decoration: none;
  }
</style>