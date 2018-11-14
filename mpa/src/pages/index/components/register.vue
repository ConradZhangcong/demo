<template>
  <div class="register">
    <p>注册页面</p>
    <button @click="handleOpen">注册</button>
    <popup :showPop="showPop"></popup>
  </div>
</template>

<script>
import Popup from '@/components/popup.vue'

export default {
  name: 'register',
  components: {
    Popup
  },
  data () {
    return {
      showPop: false
    }
  },
  methods: {
    handleOpen () {
      this.showPop = true
    }
  }
}
</script>

<style scoped>
</style>
