<template>
  <div class=container>
    <h2>简易的加法计算器</h2>
    <div>
      <input type="button"
             value="-"
             @click="handleDe({m:5})">
      <span>{{count}}</span>
      <input type="button"
             value="+"
             @click="handleAdd">
      <p>{{num2}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  // computed: mapState({
  // num: state => state.count
  // num: 'count'
  // num (state) {
  //   return state.count + 100
  // }
  // }),
  computed: {
    ...mapState(['count']),
    ...mapGetters({ num2: 'filterCount' })
  },
  methods: {
    ...mapActions({
      handleAdd: 'addAction'
    }),
    ...mapMutations({
      handleDe: 'deIncrement'
    })
    // handleAdd () {
    //   // this.$store.commit('addIncrement', { n: 5 })
    //   this.$store.dispatch('addAction')
    // },
    // handleDe () {
    //   console.log(this.$store)
    //   this.$store.commit({
    //     type: 'deIncrement',
    //     m: 10
    //   })
    // }
  }
}
</script>

<style scoped>
.container {
  width: 500px;
  height: 300px;
  margin: 100px auto;
  border: 1px solid #333;
  text-align: center;
}
</style>
