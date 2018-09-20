<template>
  <!--头部-->
  <div class="headerTab">
    <section>
      <img src="../../../static/img/logo.png" alt="">
      <h1>VUE中文社区</h1>
    </section>
    <router-link tag="span" to="/login">登录</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {

    }
  }
}
</script>

<style lang="scss">
  .headerTab{
    width:100%;
    height: 48px;
    background: #474a4f;
    padding:0 8px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    section{
      display: flex;
      align-items: center;
      h1{
        margin-left: 15px;
      }
      img{
        width:40px;
        height: 40px;
      }
    }
    span{
      margin-right: 10px;
    }
  }
</style>
