<template>
  <div class="hello">
    <p class="name">{{ name }}</p>
    <button @click="modify">修改</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '11'
    }
  },
  methods: {
    modify () {
      this.name = '22'// 关键的赋值语句，如果注释掉，结果就大不一样了
      const text = document.querySelector('.name').innerText
      // 11
      console.log(1, text)
      this.$nextTick(() => {
        const text = document.querySelector('.name').innerText
        // 还是33啊
        console.log(2, text)
      })
      this.name = '33'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
