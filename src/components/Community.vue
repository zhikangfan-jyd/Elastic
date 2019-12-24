<template>
    <div class="community-box">
        <dl>
            <dt>社区日报</dt>
            <dd>
                <input type="text" placeholder="输入电邮地址">
                <button>订阅</button>
            </dd>
        </dl>
        <div class="ad-box">
            <img src="../assets/image/ad1.png" alt="" class="ad1">
            <img src="../assets/image/ad2.png" alt="" class="ad2">
            <img src="../assets/image/ad1.png" alt="" class="ad1">
        </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.community-box dl dd{
    margin-top: 15px;
    width: 100%;
}
.community-box dl dd input,.community-box dl dd button{
    height: 30px;
}
.ad-box {
    margin-bottom: 20px;
}
.ad-box .ad1,.ad2{
    width: 100%;

}
</style>