<template>
  <div class="common-header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn"
         @click="handleChangeCollapse">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">退出登录</div>
  </div>
</template>

<script>
import Bus from './bus.js'
export default {
  name: 'common-header',
  data () {
    return {
      collapse: false
    }
  },
  methods: {
    // 侧边栏 状态码传递到bus
    handleChangeCollapse () {
      this.collapse = !this.collapse
      Bus.$emit('collapse', this.collapse)
    }
  }
}
</script>

<style scoped lang="stylus">
.common-header
  width 100%
  height 70px
  background-color #242f42
  color #fff
  .collapse-btn
    padding 0 21px
    float left
    line-height 70px
    cursor pointer
    .el-icon-menu
      font-size 20px
      color #fff
  .logo
    float left
    width 250px
    line-height 70px
  .header-right
    float right
</style>
