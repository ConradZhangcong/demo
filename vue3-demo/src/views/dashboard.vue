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
  },
  beforeRouteUpdate (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log('beforeRouteUpdate')
    next((vm) => {

    })
  }
}
</script>

<style scoped lang="stylus">
.v-enter, .v-leave-to
  opacity 0
.v-enter-to, .v-leave
  opacity 1
.v-enter-active, .v-leave-active
  transition 1s
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
