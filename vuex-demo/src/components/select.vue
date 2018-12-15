<template>
  <section class="wrap">
    <div class="searchInput clearfix">
      <select-input></select-input>
      <list></list>
    </div>
  </section>
</template>

<script>
import selectInput from 'components/selectInput.vue'
import list from 'components/list.vue'
export default {
  components: {
    selectInput,
    list
  }
}
</script>

<style>
</style>
