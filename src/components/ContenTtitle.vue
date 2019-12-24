<template>
  <div class="container">
      <div class="row">
          <div class="col-md-9 content-left">
              <div class="col-top">
                  <div class="title-box">
                      <span class="glyphicon glyphicon-list"></span>
                      <span class="text">发现</span>
                  </div>
                  <div class="link-box">
                    <router-link :to="{path:'new'}">最新</router-link>
                    <router-link :to="{path:'recommend'}">推荐</router-link>
                    <router-link :to="{path:'hot'}">热门</router-link>
                    <router-link :to="{path:'reply'}">消灭零回复</router-link>
                  </div>
                  
              </div>
              <div class="bottom">
                  <router-view></router-view>
              </div>
          </div>
          <div class="col-md-3 content-right">
              <hot-topic />
              <offen-link />
              <community />
          </div>
      </div>
  </div>
</template>

<script>
import HotTopic from './HotTopic.vue'
import OffenLink from './OffenLink.vue'
import Community from './Community.vue'
export default {
    components:{
        HotTopic,
        OffenLink,
        Community
    }
}
</script>

<style scoped>
a:link{
    text-decoration: none;
}
    /* .content-left{
        background-color: yellow
    } */
    .content-right{
        /* background-color: green; */
        border-left: 1px solid #bbb;
    }
    .col-top{
        position: relative;
        height: 64px;
        border-bottom: 1px solid #bbb;
        line-height: 64px;
    }
    .col-top .title-box{
        display: inline-block;
        font-size: 25px;
        font-weight: bold;
    }
    .col-top .title-box .text{
        margin-left: 3px;
    }
    .col-top .link-box{
        position: absolute;
        right: 0;
        bottom: 0px;
        height: 30px;
        line-height: 30px;
        vertical-align: bottom;
    }
    .col-top .link-box a {
        color: #333;
        display: inline-block;
        padding: 0px 10px;

    }
    .col-top .link-box a.active,.col-top .link-box a:hover{
        border-bottom: 1px solid rgb(37, 70, 141);
    }
    a:hover{
        text-decoration: none;
    }
    
</style>