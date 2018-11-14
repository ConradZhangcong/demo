<template>
  <div class="login">
    <p>登录页面</p>
    <button @click="handleLogin">确定</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  },
  methods: {
    handleLogin () {
      window.location.href = 'data.html'
    }
  }
}
</script>

<style scoped>
</style>
