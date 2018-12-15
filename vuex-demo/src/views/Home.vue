<template>
  <section class="wrap">
    <div class="searchInput clearfix">
      <select-input :title="title"
                    :is-show.sync="listShow"></select-input>
      <list v-show="listShow"
            @change-title="handleTitle"></list>
    </div>
  </section>
</template>

<script>
import selectInput from 'components/selectInput.vue'
import list from 'components/list.vue'
export default {
  data () {
    return {
      listShow: false,
      title: ''
    }
  },
  methods: {
    handleTitle (title) {
      this.title = title
    }
  },
  components: {
    selectInput,
    list
  }
}
</script>

<style>
</style>
