<template>
  <div>
    Count is {{$store.state.count}}
    <!-- <button @click="increment">+5</button>
    <button @click="decrement">-3</button> -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: {
    options: {
      type: Number,
      default: 0
    },
    state: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {}
  },
  watch: {
    options (val) {
      console.log(val, 5656)
    }
  },
  computed: mapGetters({

  }),

  methods: {
    // increment(){
    //   this.$store.commit('increment',10)
    // },
    // decrement(){
    //   this.$store.commit('decrement',10)
    // }
  },
  mounted () {

  },
  created () {
    console.log(this.options)
  }
}
</script>
