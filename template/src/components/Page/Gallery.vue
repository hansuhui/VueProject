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
      <h6 class="heading">Gallery</h6>
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
            <li class="one_quarter first"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter first"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter first"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
            <li class="one_quarter"><a href="#"><img src="@/assets/images/demo/gallery/01.png" alt=""></a></li>
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
<Footer></Footer>
</div>
</template>
<script>

import Header from '@/components/Shared/_Header'
import Footer from '@/components/Shared/_Footer'

export default {
  name: 'Gallery',
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

</style>
