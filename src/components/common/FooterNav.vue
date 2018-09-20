<template>
<!-- 底部导航 -->
  <div class="FooterNav">
    <mt-tabbar v-model="selected" class="footer">
      <mt-tab-item id="all">
        <div style="width:100%;height:100%;display:block;font-size:2.5rem;"></div>
        首页
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" >
        信息
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" >
        我的
      </mt-tab-item>
      <mt-tab-item >
        <img slot="icon" src="../../../static/img/logo.png">
        更多
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selected: 'all'
    }
  }
}
</script>

<style lang="scss" scope>
  .FooterNav{
    position: fixed;
    bottom: 0;
    left:0;
    right: 0;
    height: 56px;
      width: 100%;
    .footer{

    }
  }
</style>
