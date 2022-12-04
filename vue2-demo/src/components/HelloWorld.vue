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
      name: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    modify () {
      this.name = '22'// 关键的赋值语句，如果注释掉，结果就大不一样了
      this.$nextTick(() => {
        const text = document.querySelector('.name').innerText
        console.log(text)
      })
      this.name = '333'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
