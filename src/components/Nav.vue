<template>
  <div class="nav-content container hidden-xs">
      <a href="#" class="logo-box">
          <img src="../assets/image/logo.svg" alt="Elastic中文社区">
      </a>
      <div class="search-box hidden-xs hidden-sm">
          <input type="text" placeholder="搜索问题、话题或人" class="search">
          <span class="glyphicon glyphicon-search search-icon"></span>
      </div>
      <div class="nav-wrapper">
        <router-link :to="{name:'find'}" class="router">
            <span class="icon glyphicon glyphicon-list"></span>
            <span class="text">发现</span>
        </router-link>
        <router-link :to="{name:'share'}" class="router">
            <span class="icon glyphicon glyphicon-share-alt"></span>
            <span class="text">分享</span>
        </router-link>
        <router-link :to="{name:'article'}" class="router">
            <span class="icon glyphicon glyphicon-list-alt"></span>
            <span class="text">文章</span>
        </router-link>
        <router-link :to="{name:'activity'}" class="router">
            <span class="icon glyphicon glyphicon-calendar"></span>
            <span class="text">活动</span>
        </router-link>
        <router-link :to="{name:'download'}" class="router">
            <span class="icon glyphicon glyphicon-save"></span>
            <span class="texdt">下载</span>
        </router-link>
      </div>
      <button class="login-btn">登录</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a{
    text-decoration: none;
}
a:hover{
    text-decoration: none;
}
a:active{
    text-decoration: none;
}
a:link{
    text-decoration: none;
}
.container{
    position: relative;
}
.logo-box{
    display: inline-block;
    width: 90px;
    height: 40px;
    margin: 7px 0 0 0;
}
.logo-box img{
    width: 100%;
    height: 100%;
}
.search-box{
    position: relative;
    display: inline-block;
    width: 230px;
    margin: 10px 0px;
    height: 32px;
}
.search-box .search{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    outline: none;
    border: none;
    padding: 0px 5px;
    margin-left: 10px;
}
.search-box .search-icon{
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: #bbb;
}
.nav-wrapper{
    display: inline-block;
    margin-left: 15px;

}
.nav-wrapper .router{
    display: inline-block;
    width: 80px;
    height: 53px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 53px;
}
.nav-wrapper .icon{
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 3px;
    color: #fff;
    text-align: center;
    line-height: 18px;
    vertical-align: text-bottom;
}
.nav-wrapper .router.active,.nav-wrapper .router:hover{
    background-color: rgb(43, 145, 235);
}
.login-btn{
    position: absolute;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    border: none;
    outline: none;
    line-height: 30px;
    color: #fff;
    background-color: rgba(211, 201, 201, 0.6);
}
.login-btn:hover{
    background-color: rgba(211, 201, 201, 0.4);
}
</style>