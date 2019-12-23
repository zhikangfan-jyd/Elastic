<template>
  <div class="container">
    <div class="nav-box">
      <Classify />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Classify from '../components/Classify-nav.vue'
export default {
  components:{
    Classify
  }
}
</script>

<style scoped>
.container{
  background-color: red;
}
</style>