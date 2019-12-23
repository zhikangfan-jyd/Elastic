<template>
  <div class="container navbar-collapse">
      <nav class="navbar">
          <ul class="nav-box">
              <li>
                  <router-link :to="{path:'/all'}">全部</router-link>
              </li>
              <li>
                  <router-link :to="{path:'/elasticsearch'}">Elasticsearch</router-link>
              </li>
              <li>
                  <router-link :to="{path:'/logstash'}">Logstash</router-link>
              </li>
              <li>
                  <router-link :to="{path:'/kibana'}">Kibana</router-link>
              </li>
              <li>
                  <router-link :to="{path:'/beats'}">Beats</router-link>
              </li>
              <li>
                  <router-link :to="{path:'/job'}">求职招聘</router-link>
              </li>
              <li>
                  <router-link :to="{path:'/dynamic'}">资讯动态</router-link>
              </li>
              <li>
                  <router-link :to="{path:'/activityII'}">活动</router-link>
              </li>
              <li>
                  <router-link :to="{path:'/daily'}">Elastic日报</router-link>
              </li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    margin-bottom: 20px;
}
.navbar{
    min-height: 30px;
}
    .nav-box li{
        float: left;
        margin: 0px 10px 10px 0px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;

    }
    .nav-box li a{
        color: #fff;
        padding: 0px 10px;
    }
    .nav-box li a:hover{
        text-decoration: none;
    }
    .nav-box li:hover{
        background-color: #494a4b;
    }
</style>