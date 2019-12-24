<template>
    <!-- 网页整体区域 -->
    <div class="wrapper">
        <!-- 存放头部导航区域 -->
        <div class="top">
            <Nav />
        </div>
        <!-- 名言警句显示区域 -->
        <div class="ana">
            <div class="container" v-if="isShow">
                <p>{{ana}}</p>
                <span class="glyphicon glyphicon-remove" @click="handleClick"></span>
            </div>
        </div>
       
        <!-- 根据点击不同链接显示不同的内容,显示区域 -->
        <div class="main">
            <router-view class="main-show container"></router-view>
        </div>
        <!-- 底部区域 -->
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
    data () {
        return {
            isShow:true,
            ana:'心之所动就随风去吧，以爱之名你还愿意吗！'
        }
    },
    components:{
        Nav
    },
    methods:{
        handleClick () {
            this.isShow = false;
        }
    }
}
</script>

<style scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        font-size: 14px;
    }
    .main{
        /* width: 100%;
        height: 100%; */
        margin-top: 30px;
    }
    .wrapper .top{
        width: 100%;
        height: 53px;
        background-color: rgb(73,158,243);
    }
    .ana{
        background-color: #3b4045;
        color: #c9cccf;
    }
    .ana .container{
        position: relative;
        overflow: hidden;
        height: 30px;
        line-height: 30px;
    }
    .ana p{
        display: inline-block;
    }
    .ana span{
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    /* .main .main-show{
        background-color: pink;
    } */
    .footer{
        margin:20px 0px;
        text-align: center;
        font-size: 12px;
    }
</style>