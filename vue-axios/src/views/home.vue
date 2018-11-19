<template>
  <div class="home">home</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {},
  created () {
    this.$api.getUserList()
  }
}
</script>

<style scoped>
</style>
