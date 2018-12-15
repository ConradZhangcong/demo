<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in data"
          :key="index"
          @click="handleClick(item.title)">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$store.state.selectModule.list
    }
  },
  methods: {
    handleClick (title) {
      this.$store.commit('changeTitle', { title })
    }
  },
  created () {
    this.$store.dispatch('getListAction')
  }
}
</script>

<style>
</style>
