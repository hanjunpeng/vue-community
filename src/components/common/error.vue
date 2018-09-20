<template>
  <!-- error页面 -->
  <div class="error">
    <img src="../../../static/img/error.png" alt="错误页面">
    <div class="error-txt">
      <p>未找到该页面，请确保页面路径正确</p>
    </div>
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

<style>
.error {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.error-txt {
  width: 100%;
  text-align: center;
  font-size: 1rem;
  color: #ccc;
}
</style>
