<template>
<Layout Title="상세">
  <div class="btn_div">
        <button type="button" @click="GoList">리스트로</button>
        <button type="button" @click="tran">트랜지션</button>
  </div>
  <div class="Detail">
    <transition name="fade">
      <img :src="imageInfo.src" v-show="is_show">
    </transition>
    <transition name="bounce">
      <img :src="imageInfo.src" v-show="is_show">
    </transition>
    <transition name="test">
      <img :src="imageInfo.src" v-show="is_show">
    </transition>
    <transition name="slide-fade">
      <img :src="imageInfo.src" v-show="is_show">
    </transition>
    <div class="ImgName">이미지명 : {{imageInfo.name}}</div>
  </div>
</Layout>
</template>

<script>

import Layout from '@/components/_Layout.vue'
import Images from '../images'
import { mapState } from 'vuex'
import _ from 'lodash'

export default {
  name: 'Detail',
  created () {
    this.$store.dispatch(Images.CHANGE_ISLOADING, { isloading: true })
    if (!this.imageInfo) {
      alert('잘못된 접근입니다.')
      this.GoList()
    }
    this.$store.dispatch(Images.CHANGE_ISLOADING, { isloading: false })
  },
  computed: _.extend(
    mapState(['imageInfo', 'imagelist'])
  ),
  components: { Layout },
  data () {
    return {
      is_show: true
    }
  },
  methods: {
    GoList () {
      this.$router.push({name: 'List', query: { page: 1 }})
    },
    tran () {
      this.is_show = false
      var show = this.show
      setTimeout(show, 1000)
    },
    show () {
      this.is_show = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .Detail{
   text-align :center;
 }
 Img {
   width:23%;
   border: 2px solid red;
   border-radius: 5px;
   cursor: pointer;
 }

 .ImgName{
   margin-top: 5px;
   font-size: 20px;
   font-weight: bold;
   color:cornflowerblue;
 }

</style>
