<template>
  <div id="app">
    <router-view/>
    <loading v-show="isloading"></loading>
  </div>
</template>

<script>

import Loading from '@/components/Shared/Loading'
import { mapState } from 'vuex'
import _ from 'lodash'

export default {
  name: 'App',
  components: { Loading },
  computed: _.extend(
    mapState([ 'isloading' ])
  )
}
</script>
