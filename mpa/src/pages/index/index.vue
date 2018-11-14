<template>
  <div id="index">
    <span class="index-span"
          v-for="(item,index) in tabList"
          :key="index"
          @click="handleClick(item.name)">{{item.title}}</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      tabList: [{
        name: 'login',
        title: '登录'
      }, {
        name: 'register',
        title: '注册'
      }]
    }
  },
  methods: {
    handleClick (name) {
      console.log(name)
      this.$router.push({ name: name })
    }
  }
}
</script>

<style scoped>
.index-span {
  font-size: 20px;
  cursor: pointer;
}
</style>
