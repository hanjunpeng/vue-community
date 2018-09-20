<template>
  <div>
    axios
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      url: 'https://www.vue-js.com/api/v1/topics'
    }
  },
  methods: {
    // 获取数据
    getData () {
      this.$axios.get(this.url)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
