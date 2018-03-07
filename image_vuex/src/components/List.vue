<template>
<Layout Title="리스트">
    <div class="list">
      <div class="btn_div">
        <button @click='GetList'>리스트 다시 받기</button>
        <button @click='ResetList'>리스트 초기화</button>
        <button @click='tran'>{{btnMsg}}</button>
      </div>
      <ul
      ><li  v-for='(data,index) in imagelist' :key="index">
          <transition :name="TranName[Math.round(Math.random() * 3)]">
              <img @click='Detail(data)' :src='data.src' @mouseup.right='rightMouse' v-show="is_show">
          </transition>
          <div v-show="is_show" class="ImagName">이름 : {{data.name}}</div>
         </li>
        <li id="Empty" v-show='imagelist.length == 0'>이미지 리스트가 없습니다.</li>
      </ul>
    </div>
    <div class="disNone">
      사이즈가 너무 작다!!
    </div>
    <paginate ref="pagebuttons"
        :page-count="totalpage"
        :page-range="7"
        :margin-pages="3"
        :click-handler="pageChanged"
        :prev-text="'이전'"
        :next-text="'다음'"
        :container-class="'pagination'"
        :page-class="'page-item'">
    </paginate>
</Layout>
</template>

<script>

import Images from '../images'
import { mapState } from 'vuex'
import Paginate from 'vuejs-paginate'
import _ from 'lodash'
import Layout from '@/components/_Layout.vue'

export default {
  name: 'List',
  components: { Layout, Paginate },
  computed: _.extend(
    {
      totalpage: function () {
        var totalcount = this.imagelist.totalcount
        var pagesize = this.imagelist.pagesize
        return Math.floor((totalcount - 1) / pagesize) + 1
      }
    },
    mapState([ 'imagelist' ])
  ),
  mounted: function () {
    var page = 1
    if (this.$route.query && this.$route.query.page) {
      page = parseInt(this.$route.query.page)
    }
    this.GetList(page)
    this.$refs.pagebuttons.selected = page - 1
  },
  watch: {
    '$route': function (to, from) {
      if (to.query.page && to.query.page !== this.imagelist.pageno) {
        var page = to.query.page
        this.GetList(page)
        this.$refs.pagebuttons.selected = page - 1
      }
    }
  },
  data () {
    return {
      ImageList: [],
      is_show: true,
      btnMsg: '숨기기',
      TranName: ['fade', 'bounce', 'test', 'lide-fade']
    }
  },
  methods: {
    pageChanged: function (page) {
      this.$router.push({name: 'List', query: { page: page }})
    },
    GetList (page) {
      this.$store.dispatch(Images.IMAGE_LIST, { pageno: page })
    },
    Detail (imageInfo) {
      this.$store.dispatch(Images.IMAGE_DETAIL, { imageInfo: imageInfo })
      this.$router.push({name: 'Detail'})
    },
    ResetList () {
      this.$store.dispatch(Images.IMAGE_RESET)
    },
    tran () {
      this.is_show = !this.is_show
      if (this.is_show) {
        this.btnMsg = '보이기'
      } else {
        this.btnMsg = '보이기'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.disNone{display:none ;}
.list {
  padding: 20px;
}
  ul{
    margin:0px;
    padding: 0px;
  }
  li {
    width:23%;
    display:inline-block;
    margin: 5px;
    height: 300px;
  }

  li:hover {
    font-weight: bold;
    color: red;
  }

  .ImagName{
    border : 1px solid burlywood;
    background-color: white;
    height: 20px;
    margin-bottom: 5px;
  }

  #Empty{
    border :none;
    padding-top:  30px;
    font-size:  20px;
    color: red;
    font-weight:  bold;
  }

  img {
    width:100%;
    height: 300px;
    border-radius: 10px;
    cursor: pointer;
    border-radius: 10px;
    border : 1px solid;
    border-color: burlywood;
  }

  img:hover {
    border : 2px solid;
    border-color: red;
  }

  @media (max-width : 500px){
    .list{display: none;}
    .disNone{
      display: block;
      padding-top:  30px;
      font-size:  20px;
      color: red;
      font-weight:  bold;
      }
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
