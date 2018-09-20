<template>
  <div class="home">
    <tab :options="tabOpt" :state="stateIndex"></tab>
  </div>
</template>

<script>
import tab from '../common/tabs.vue'
export default {
  components: {
    tab
  },
  data: function () {
    return {
      tabOpt: 1,
      stateIndex: 2
    }
  }
}
</script>
