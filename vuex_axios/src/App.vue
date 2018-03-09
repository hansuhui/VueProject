<template>
  <div id="app">
    <router-view/>
    <loading v-show="isloading"></loading>
  </div>
</template>

<script>

import Loading from '@/components/Shared/Loading'
import EventBus from './EventBus'

export default {
  name: 'App',
  components: { Loading },
  created () {
    EventBus.$on('loading', this.loading)
  },
  data () {
    return {isloading: false}
  },
  methods: {
    loading (loading) {
      this.isloading = loading
    }
  }
}
</script>
