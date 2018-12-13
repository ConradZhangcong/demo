<template>
  <div class="common-aside">
    <el-menu default-active="4"
             class="el-menu-vertical"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse"
             background-color="#324157"
             text-color="#bfcbd9"
             active-text-color="#20a0ff"
             unique-opened
             router>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <el-menu-item index="home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="document">
        <i class="el-icon-document"></i>
        <span slot="title">文档</span>
      </el-menu-item>
      <el-menu-item index="about">
        <i class="el-icon-setting"></i>
        <span slot="title">关于我们</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Bus from './bus.js'
export default {
  name: 'common-aside',
  data () {
    return {
      isCollapse: false,
      items: [{
        index: 'home',
        title: '首页'
      }]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
    // 从bus获取状态码 判断侧边栏展开
    Bus.$on('collapse', msg => {
      this.isCollapse = msg
    })
  }
}
</script>

<style scoped lang="stylus">
.common-aside
  display block
  position absolute
  left 0
  top 70px
  bottom 0
  color #fff
  .el-menu-vertical
    height 100%
  .el-menu-vertical:not(.el-menu--collapse)
    width 240px
    min-height 400px
.is-active
  background red
</style>
