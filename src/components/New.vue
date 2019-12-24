<template>
  <div class="new-box">
    <div class="list-box" v-for="(item,index) in stickInfo" :key="index">
      <img :src="item.headImg">
       <div class="list-box-right">
        <p>
          <span class="glyphicon glyphicon-bullhorn icon-bullhorn"></span>
          <a href="">{{item.title}}</a>
        </p>
        <p class="info"> 发布了置顶文章•{{item.commentNum}}个评论•{{item.browseNum}}次浏览•{{item.date}} {{item.time}}</p>
      </div>
    </div>
    <div class="list-box" v-for="(item,index) in InfoList" :key="item+index">
      <img :src="item.headImg">
      <div class="list-box-right">
        <p>
          <a href="">{{item.title}}</a>
        </p>
        <p class="info">
          <span class="classify">{{item.classify}}</span>
          <span class="user">•{{item.user}}</span>
          <span class="sposor">{{item.isSposor ? '发起了' : '回复了'}}问题</span>
          <span class="concernNum">•{{item.concernNum}}人关注</span>
          <span class="replyNum">•{{item.replyNum}}个回复</span>
          <span class="browseNum">•{{item.browseNum}}次浏览</span>
          <span class="ago">•{{item.ago}}</span>
        </p>
      </div>
      <span class="reply" v-if="item.isSposor">回复</span>
      <span class="reply" v-else>
        <div>贡献</div>
        <img :src="item.contributeImg">
      </span>

    </div>

    <!-- 分页 -->
    <div class="page-box">
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      currentPage:1,//当前页码
      allPageInfo:60,//总共多少条信息
      pageSize:10,//每页展示几条信息
      stickInfo:[
        {
          headImg:require('../assets/image/head.jpeg'),
          title:'重磅《Elasticsearch 中国开发者调查报告》探索开发者的现状和未来',
          commentNum:34,
          browseNum:2344,
          date:'2019-12-24',
          time:'9:00'
        }
      ],
      InfoList:[
       
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        }, 
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
         {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        }, 
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        },
        {
          user:'匿名用户',
          headImg:require('../assets/image/head.jpeg'),
          classify:'默认分类',
          isSposor:true,
          title:'新注册社区账号，无法回复、评论？',
          concernNum:11,
          replyNum:3,
          browseNum:55,
          ago:'6分钟前',
          contributeImg:require('../assets/image/head.jpeg')
        }

      ]
    }
  }
}
</script>

<style scoped>
a:hover{
  text-decoration: none;
}
a:active{
  text-decoration: none;
}
  .new-box .list-box{
    position: relative;
    border-bottom: 1px solid #bbb;
    padding: 15px 0px;
  }
  .new-box .list-box img{
    width: 50px;
    height: 50px;
    border-radius: 5px;
    vertical-align: middle;
  }
  .new-box .list-box .list-box-right{
    display: inline-block;
    margin-left: 15px;
    vertical-align: middle;
  }
  .new-box .list-box .list-box-right p{
    margin: 5px 0px;
  }
  .new-box .list-box .list-box-right p .icon-bullhorn{
    color: #f40;
    margin-right: 8px;
  }
  .new-box .list-box .list-box-right .info{
    font-size: 12px;
    color: #bbb;
  }
  .new-box .list-box .list-box-right .info span{
    margin: 0px 2px;
  }
  .new-box .list-box .list-box-right .info .classify{
    padding: 2px 3px;
    background-color: rgb(125, 170, 236);
    border-radius: 3px;
    color: #fff;
  }
  .new-box .list-box  .reply{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: #bbb;
  }
   .new-box .list-box  .reply img{
     width: 20px;
     height: 20px;
     border-radius: 50%;
   }
  .new-box .page-box{
    float: right;
  }
</style>