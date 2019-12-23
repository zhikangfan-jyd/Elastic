<template>
    <div class="wrapper">
        <div class="top">
            <Nav />
        </div>
        
        <div class="main">
            <router-view class="main-show container"></router-view>
        </div>
        <div class="footer">
            Copyright © 2019 • <a href="">CC BY-NC-5A 3.0 • </a>
            <a href="">Elastic中文社区</a>
            • 服务器赞助：
            <a href="">阿里云</a>
            • 网站程序：
            <a href="">WeCenter</a>
            • 
            <a href="">湘ICP备1700782号</a>

        </div>
    </div>
    
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
    components:{
        Nav
    }
}
</script>

<style scoped>
    @import url('../assets/style/home.css');
    .wrapper{
        background-image: url('../assets/image/bg.jpg');
    }
    .main{
        width: 100%;
        height: 100%;
        margin-top: 30px;
        background-color: brown;
    }
    .main .main-show{
        background-color: pink;
    }
    .footer{
        text-align: center;
        font-size: 12px;
    }
</style>