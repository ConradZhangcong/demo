<template>
  <div class="dataIndex">
    <div>数据统计</div>
    <button @click="handleLoginOut">退出登录</button>
  </div>
</template>

<script>
export default {
  name: 'dataIndex',
  data () {
    return {
    }
  },
  methods: {
    handleLoginOut () {
      window.location.href = 'index.html'
    }
  }
}
</script>

<style scoped>
</style>
