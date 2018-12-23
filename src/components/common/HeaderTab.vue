<template>
  <!-- 顶部tabs -->
  <div class="HeaderTab">
    <mt-navbar v-model="selected" class="tabs">
      <mt-tab-item id="all">全部</mt-tab-item>
      <mt-tab-item id="good">精华</mt-tab-item>
      <mt-tab-item id="weex">weex</mt-tab-item>
      <mt-tab-item id="share">分享</mt-tab-item>
      <mt-tab-item id="ask">问答</mt-tab-item>
      <mt-tab-item id="job">招聘</mt-tab-item>
    </mt-navbar>

    <!-- 中间列表 -->
    <mt-tab-container v-model="selected" class="center">
      <mt-tab-container-item id="all">
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <li v-for="(item,index) in list" :key="index">
            <section class="list">
              <router-link v-if="item.author" to="/Home" :src="item.author.avatar_url" tag="img" alt="user"></router-link>
              <router-link  to="/Home" tag="div" class="content">
                <div class="list-title">
                  <span v-if="item.top">置顶</span>
                  <span v-if="item.good">精华</span>
                  <span v-else-if="item.tab === 'share'" >分享</span>
                  <span v-else-if="item.tab === 'ask'" >问答</span>
                  <span v-else-if="item.tab === 'job'" >招聘</span>
                  <strong>{{item.title}}</strong>
                </div>
                <!-- 评论数和访问量 -->
                <div class="timer">
                  <span>{{item.reply_count}} {{item.visit_count}}</span>
                  <span>{{item.last_reply_at | TimeData }}</span>
                </div>
              </router-link>
            </section>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="good">
       ddd
      </mt-tab-container-item>
      <mt-tab-container-item id="weex">
        weex
      </mt-tab-container-item>
      <mt-tab-container-item id="share">
        share
      </mt-tab-container-item>
      <mt-tab-container-item id="ask">
        ask
      </mt-tab-container-item>
      <mt-tab-container-item id="job">
        job
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      search: {},
      selected: 'all',
      list: {},
      url: 'https://www.vue-js.com/api/v1/topics?tab=all'
    }
  },
  methods: {
    // 下拉刷新
    loadMore () {
      this.loading = false
      setTimeout(() => {
        // let last = this.list[this.list.length - 1]
        // for (let i = 1; i <= 10; i++) {
        //   this.list.push(last + i)
        // }
        // this.loading = false
      }, 2500)
    },
    // 获取数据
    getData () {
      this.$axios
        .get(this.url)
        .then((res) => {
          if (res.status === 200) {
            let _data = res.data
            this.list = _data.data
          } else {
            this.$toast('请求失败！稍候重试')
          }
        })
    }
  },
  created () {
    this.search.page = '1'
    this.search.limit = '10'
    this.getData(this.search)
  }
}
</script>

<style lang="scss">
  .HeaderTab{
    overflow: auto;
    height: 100vh;
    margin-top:48px;
    .tabs{
      width:100%;
      // position: fixed;
      // top:0;
      // left:0;
      // right:0;
      background:#474a4f;
      color:rgba(255, 255, 255, 0.7);
    }
    .list{
      border-bottom: 0.6rem solid #EFF2F7;
      padding: 12px;
      display:flex;
      >img{
        width:36px;
        height: 36px;
        margin-right: 12px;
      }

      .content{
        display: flex;
        flex:1;
        flex-direction:column;
        justify-content: space-between;
        .list-title{
          text-align: left;
          >span{
            background: #369219;
            color: #ffffff;
            padding:2px;
            border-radius: 2px;
            font-size: 12px;
            margin-right: 5px;
          }
          strong{
            font-size: 1.4rem;
            color:#423b3b;
            font-weight: 600;
          }
        }
        .timer{
          display: flex;
          justify-content:space-between;
          padding-top: 1rem;
        }
      }
    }
  }
  //修改muit-ui样式
  .mint-tab-item-label{
    font-size: 14px;
  }
</style>
