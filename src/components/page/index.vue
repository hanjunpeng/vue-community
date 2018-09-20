<template>
  <div class="index-wrapper">
    <!-- 顶部 -->
    <HeaderBar></HeaderBar>
    <!-- 顶部的tabs及列表内容 -->
    <HeaderTab></HeaderTab>
    <!-- 底部导航 -->
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import HeaderBar from '../common/HeaderBar.vue'
import HeaderTab from '../common/HeaderTab.vue'
import FooterNav from '../common/FooterNav.vue'
import { mapState } from 'vuex'

export default {
  components: {
    HeaderBar,
    HeaderTab,
    FooterNav
  },
  data: function () {
    return {

    }
  },
  computed: mapState({
    count: state => state.count
  }),
  methods: {},
  created () {
    // console.log(this.$store.getters.getTodoById(1))
    console.log(this.count)
  }
}
</script>

<style scoped lang="scss">
    .index-wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>
