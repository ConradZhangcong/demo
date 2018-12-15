<template>
  <div class="clearFix el-menu--dark">
    <ul class="el-menu menu-horizontal el-menu--dark el-menu--horizontal header-nav">
      <router-link to="/"
                   class="el-menu-item logo"
                   exact
                   tag="li">
        <img src="../assets/miaov.png">
      </router-link>
      <router-link to="/project"
                   class="el-menu-item"
                   tag="li">
        <i class="fa fa-home"></i>
        我的项目
      </router-link>
      <router-link to='/workbench'
                   class="el-menu-item"
                   tag="li">
        <i class="fa fa-code"></i>
        工作台
      </router-link>
      <router-link to="/doc"
                   class="el-menu-item"
                   tag="li">
        <i class="fa fa-book"></i>
        文档
      </router-link>
    </ul>
    <div class="user-info-box"
         v-show="isLogin">
      <div class="el-submenu__title">
        <img src="../assets/portrait.png">
        <span>{{userName}}</span>
      </div>
      <div class="header-menu">
        <ul class="menu-nav">
          <li class="el-menu-item"
              @click="loginOut">登出</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      userName: '',
      isLogin: false
    }
  },
  created () {
    let info = this.$local.fetch('miaov')
    this.isLogin = info.login
    this.userName = info.userName
  },
  methods: {
    loginOut () {
      this.$local.save('miaov', null)
      this.$router.push('/login')
    }
  }
}
</script>
<style>
.header-nav {
  float: left;
}

.user-info-box {
  float: right;
  position: relative;
}

.user-info-box img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-right: 10px;
  vertical-align: middle;
}

.header-menu {
  position: absolute;
  top: 65px;
  left: 0;
  border: 1px solid #d1dbe5;
  padding: 5px 0;
  background-color: #fff;
  z-index: 100;
  text-align: center;
  min-width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  opacity: 0;
  height: 0;
  transition: 0.5s;
  overflow: hidden;
}

.user-info-box:hover .header-menu {
  opacity: 1;
  height: 60px;
}

.header-menu li {
  height: 50px;
  color: #000;
}
</style>
