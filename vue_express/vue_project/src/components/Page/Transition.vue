
<template>
<div>
<MainLayout>
<div class="wrapper">
    <section id="breadcrumb" class="hoc clear">
      <!-- ################################################################################################ -->
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Lorem</a></li>
        <li><a href="#">Ipsum</a></li>
        <li><a href="#">Dolor</a></li>
      </ul>
      <!-- ################################################################################################ -->
      <h6 class="heading">Transition2</h6>
      <!-- ################################################################################################ -->
    </section>
  </div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row3">
  <main class="hoc container clear">
    <!-- main body -->
    <!-- ################################################################################################ -->
    <div class="content">
      <!-- ################################################################################################ -->
      <div id="gallery">
        <figure>
          <header class="heading">Gallery Title Goes Here</header>
          <ul class="nospace clear">
              <li v-for='(list,index) in imgList' v-bind:key="index" class="shadow one_quarter" :class="{ first:index % 4 == 0}">
                <transition name="slide-fade">
                <a style="cursor: pointer;" v-show="list.isShow" v-on:click="test(list)"><img src="/static/images/demo/gallery/01.png" alt=""></a>
                </transition>
              </li>
          </ul>
          <figcaption>Gallery Description Goes Here</figcaption>
        </figure>
      </div>
      <!-- ################################################################################################ -->
      <!-- ################################################################################################ -->
      <nav class="pagination">
        <ul>
          <li><a href="#">&laquo; Previous</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><strong>&hellip;</strong></li>
          <li><a href="#">6</a></li>
          <li class="current"><strong>7</strong></li>
          <li><a href="#">8</a></li>
          <li><a href="#">9</a></li>
          <li><strong>&hellip;</strong></li>
          <li><a href="#">14</a></li>
          <li><a href="#">15</a></li>
          <li><a href="#">Next &raquo;</a></li>
        </ul>
      </nav>
      <!-- ################################################################################################ -->
    </div>
    <!-- ################################################################################################ -->
    <!-- / main body -->
    <div class="clear"></div>
  </main>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
</MainLayout>
</div>
</template>
<script>

import MainLayout from '@/components/Shared/_MainLayout'

export default {
  name: 'Transition2',
  components: { MainLayout },
  data () {
    return {
      msg: '',
      imgList: GetList()
    }
  },
  props: ['name'],
  created: function () {
    console.log(this.name)
  },
  methods: {
    test: function (list) {
      list.isShow = !list.isShow
    }
  }
}

function GetList () {
  var result = new Array(20)
  for (var i = 0; i < 20; i++) {
    result[i] = {isShow: true}
  }
  return result
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
/* 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}
.shadow:hover {
  box-shadow:0 5px 5px #DADADA;
  transition:box-shadow .2s;
 }
</style>
