<template>
  <div class="dashboard">
    <common-header></common-header>
    <common-aside></common-aside>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import commonHeader from 'components/commonHeader'
import commonAside from 'components/commonAside'
export default {
  name: 'dashboard',
  data () {
    return {
    }
  },
  methods: {},
  created () {
    // this.$api.getUserList()
  },
  components: {
    commonHeader,
    commonAside
  }
}
</script>

<style scoped lang="stylus">
.dashboard
  width 100%
  height 100%
  .container
    position absolute
    left 240px
    right 0
    top 70px
    bottom 0
    padding 10px 10px 30px 10px
    -webkit-transition left 0.3s ease-in-out
    transition left 0.3s ease-in-out
    background #f0f0f0
</style>
