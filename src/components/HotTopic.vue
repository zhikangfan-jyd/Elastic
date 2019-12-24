<template>
  <dl class="hot-topic-box">
      <dt>
          热门话题
          <a href="">更多></a>
      </dt>
      <dd  v-for="(item,index) in HotTopicInfo" :key="index">
        <img :src="item.imgUrl" class="head-portrait">
        <div>
            <a href="">{{item.linkTitle}}</a>
            <p>{{item.questionNum}}个问题，{{item.attentionNum}}人关注</p>
        </div>
      </dd>
   
  </dl>
</template>

<script>
export default {
    data () {
        return {
            HotTopicInfo:[
                {
                    imgUrl:require('../assets/image/head.jpeg'),
                    linkTitle:'Elastic日报',
                    questionNum:769,
                    attentionNum:234
                },
                {
                    imgUrl:require('../assets/image/head.jpeg'),
                    linkTitle:'Elastic日报',
                    questionNum:769,
                    attentionNum:234
                },
                {
                    imgUrl:require('../assets/image/head.jpeg'),
                    linkTitle:'Elastic日报',
                    questionNum:769,
                    attentionNum:234
                },
                {
                    imgUrl:require('../assets/image/head.jpeg'),
                    linkTitle:'Elastic日报',
                    questionNum:769,
                    attentionNum:234
                },
                {
                    imgUrl:require('../assets/image/head.jpeg'),
                    linkTitle:'Elastic日报',
                    questionNum:769,
                    attentionNum:234
                }
            ]
        }
    }
}
</script>

<style scoped>
.hot-topic-box{
    margin-top: 45px;
}
.hot-topic-box dt{
    margin-bottom: 10px;
}
.hot-topic-box dt a{
    float: right;
}
.hot-topic-box dt a:hover{
    text-decoration: none;

}
.hot-topic-box dd{
    height: 50px;
    margin: 5px 0px;
}
.hot-topic-box dd img{
    width: 32px;
    height: 32px;
    vertical-align: middle;
}
.hot-topic-box dd div{
    display: inline-block;
    width: 160px;
    margin-left: 8px;
    vertical-align: middle;
}
.hot-topic-box dd div a{
    padding: 2px 4px;
    border-radius: 3px;
    background-color: rgb(91, 121, 218);
    color: #fff;
}
.hot-topic-box dd div a:hover{
    background-color: rgb(26, 76, 241);
    text-decoration: none;
}
.hot-topic-box dd div p{
    margin: 0px;
    color: #bbb;
}
</style>