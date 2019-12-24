<template>
  <dl class="offen-link-box">
      <dt>常用链接</dt>
      <dd v-for="(item,index) in linkList" :key="index">
          <span class="glyphicon glyphicon-link"></span>
          <a :href="item.link">{{item.offenLink}}</a>
      </dd>
  </dl>
</template>

<script>
export default {
    data () {
        return {
            linkList:[
                {
                    offenLink:'kibana中文手册',
                    link:'#'
                },
                {
                    offenLink:'kibana中文手册',
                    link:'#'
                },
                {
                    offenLink:'kibana中文手册',
                    link:'#'
                },
                {
                    offenLink:'kibana中文手册',
                    link:'#'
                },
                {
                    offenLink:'kibana中文手册',
                    link:'#'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .offen-link-box dd{
        margin: 5px 0px;
        color: #1c71f1;
        font-size: 14px;
    }
    .offen-link-box dd a{
        margin-left: 8px;
    }
    .offen-link-box dd a:hover{
        text-decoration: none;
        color: #1c71f1;
    }
</style>