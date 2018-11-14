<template>
  <div class="popup"
       v-if="showPop">
    <div class="popup-container">
      <h1>{{title.title}}</h1>
      弹出框内容
      <button @click="handleClose">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    title: {
      type: Object,
      default: () => {
        return {
          title: '弹出框'
        }
      }
    },
    showPop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.showPop = false
    }
  }
}
</script>

<style scoped>
.popup {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;
}
.popup-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  min-height: 100px;
  background: #fff;
}
</style>
