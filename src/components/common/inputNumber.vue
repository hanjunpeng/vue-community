
<template>
  <!-- 输入框组件的 api：
    可选 初始值value
    可选 最大值max
    可选 最小值min
    可选 setp增加减少单位
  -->
  <div class="input-number">
    <input type="text" :value="currentValue" @change="handleChange" @keyup.up="handleUp" @keyup.down="handleDown">
    <button @click="handleDown" :disabled="currentValue <= min">-</button>
    <button @click="handleUp" :disabled="currentValue >= max">+</button>
  </div>
</template>

<script>
function isValueNumber (value) {
  return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value)
}
export default {
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data: function () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue: function (val) {
      this.$emit('input', val)
      // this.$emit('on-change',val);
    },
    value: function (val) {
      this.updataValue(val)
      console.log(val)
    }
  },
  methods: {
    // 父组件传递过来的值可能不符合条件 处理this.value
    updataValue (val) {
      if (val > this.max) {
        val = this.max
      }
      if (val < this.min) {
        val = this.min
      }
      this.currentValue = val
    },
    // 减少
    handleDown () {
      this.currentValue -= this.step
      if (this.currentValue <= this.min) {
        this.currentValue = this.min
      }
    },
    // 增加
    handleUp () {
      this.currentValue += this.step
      if (this.currentValue >= this.max) {
        this.currentValue = this.max
      }
    },
    // 改变input
    handleChange (event) {
      console.log(event)
      var val = event.target.value.trim()
      var max = this.max
      var min = this.min
      if (isValueNumber(val)) {
        val = Number(val)
        this.currentValue = val
        if (val > max) {
          this.currentValue = max
        }
        if (val < min) {
          this.currentValue = min
        }
      } else {
        event.target.value = this.currentValue
      }
    }
  },
  created () {
    this.updataValue(this.value)
    console.log('value:' + this.value, 'max:' + this.max, 'min:' + this.min, 'step:' + this.step)
  }
}
</script>

<style lang="scss">
.input-number {
    margin: 50px;
    input {
        border: 1px solid #eee;
    }
}
</style>
