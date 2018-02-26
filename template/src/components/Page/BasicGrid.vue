<template>
<div>
<Header></Header>
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
      <h6 class="heading">Basic Grid</h6>
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
      <h2>Half</h2>
      <!-- ################################################################################################ -->
      <div class="group btmspace-50 demo">
        <div class="one_half first">1/2</div>
        <div class="one_half">1/2</div>
      </div>
      <!-- ################################################################################################ -->
      <h2>Quarter</h2>
      <!-- ################################################################################################ -->
      <div class="group btmspace-50 demo">
        <div class="one_quarter first">1/4</div>
        <div class="one_quarter">1/4</div>
        <div class="one_quarter">1/4</div>
        <div class="one_quarter">1/4</div>
      </div>
      <div class="group btmspace-50 demo">
        <div class="one_quarter first">1/4</div>
        <div class="one_quarter">1/4</div>
        <div class="two_quarter">2/4 or 1/2</div>
      </div>
      <div class="group btmspace-50 demo">
        <div class="one_quarter first">1/4</div>
        <div class="three_quarter">3/4</div>
      </div>
      <!-- ################################################################################################ -->
      <h2>Third</h2>
      <!-- ################################################################################################ -->
      <div class="group btmspace-50 demo">
        <div class="one_third first">1/3</div>
        <div class="one_third">1/3</div>
        <div class="one_third">1/3</div>
      </div>
      <div class="group demo">
        <div class="one_third first">1/3</div>
        <div class="two_third">2/3</div>
      </div>
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
<Footer></Footer>
</div>
</template>
<script>

import Header from '@/components/Shared/_Header'
import Footer from '@/components/Shared/_Footer'

export default {
  name: 'BasicGrid',
  components: { Header, Footer },
  data () {
    return {
      msg: ''
    }
  },
  props: ['name'],
  created: function () {
    console.log(this.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* DEMO ONLY */
.container .demo{text-align:center;}
.container .demo div{padding:8px 0;}
.container .demo div:nth-child(odd){color:#FFFFFF; background:#CCCCCC;}
.container .demo div:nth-child(even){color:#FFFFFF; background:#979797;}
@media screen and (max-width:900px){.container .demo div{margin-bottom:0;}}
/* DEMO ONLY */
</style>
