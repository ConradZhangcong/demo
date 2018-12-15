<template>
  <div class="selectInput">
    <input readonly
           type="text"
           @click="handleShowList"
           :value="title">
  </div>
</template>

<script>
export default {
  props: {
    isShow: Boolean
  },
  computed: {
    initShow () {
      return this.isShow
    },
    title () {
      return this.$store.state.selectModule.title
    }
  },
  methods: {
    handleShowList () {
      this.$emit('update:isShow', !this.initShow)
    }
  }
}
</script>

<style>
</style>
