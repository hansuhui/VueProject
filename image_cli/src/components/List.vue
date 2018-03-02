<template>
<Layout Title="리스트">
    <div class="list">
      <div class="btn_div">
        <button @click='GetList'>리스트 다시 받기</button>
        <button @click='ResetList'>리스트 초기화</button>
        <button @click='tran'>{{btnMsg}}</button>
      </div>
      <ul
      ><li  v-for='(data,index) in ImageList' :key="index">
          <transition :name="TranName[Math.round(Math.random() * 3)]">
              <img @click='Detail(data)' :src='data.src' @mouseup.right='rightMouse' v-show="is_show">
          </transition>
          <div v-show="is_show" class="ImagName">이름 : {{data.name}}</div>
         </li>
        <li id="Empty" v-show='ImageList.length == 0'>이미지 리스트가 없습니다.</li>
      </ul>
    </div>
    <div class="disNone">
      사이즈가 너무 작다!!
    </div>
</Layout>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>
<script>

import Layout from '@/components/_Layout.vue'
import Bus from '@/Bus.vue'

export default {
  name: 'List',
  created () {
    this.ImageList = Bus.getList()
  },
  components : { Layout },
  data () {
    return {
      ImageList: [],
      is_show : true,
      btnMsg : "숨기기",
      TranName : ["fade","bounce","test","slide-fade"]
    }
  },
  methods : {
    GetList () {
      this.ImageList = Bus.getList()
    },
    Detail (ImageInfor) {
      debugger
      this.is_show = false;
      Bus.ImageInfor = ImageInfor
      this.$router.push({name: 'Detail'})
    },
    ResetList(){
        this.ImageList = []
    },
    tran(){
      this.is_show = !this.is_show
      if(this.is_show){this.btnMsg = "보이기"}
      else{this.btnMsg = "보이기"}
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
