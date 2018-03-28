<template>
<div class="bgded overlay bg1" style="background-image:url('/static/images/demo/backgrounds/01.png');">
  <!-- ################################################################################################ -->
  <div class="wrapper row0">
    <div id="topbar" class="hoc clear">
      <!-- ################################################################################################ -->
      <div class="fl_left">
        <ul class="nospace">
          <li><a href="#"><i class="fa fa-lg fa-home"></i></a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </div>
      <div class="fl_right">
        <ul class="nospace">
          <li><i class="fa fa-phone"></i> +00 (123) 456 7890</li>
          <li><i class="fa fa-envelope-o"></i> info@domain.com</li>
        </ul>
      </div>
      <!-- ################################################################################################ -->
    </div>
  </div>
  <!-- ################################################################################################ -->
  <!-- ################################################################################################ -->
  <!-- ################################################################################################ -->
  <div class="wrapper row1">
    <header id="header" class="hoc clear">
      <!-- ################################################################################################ -->
      <div id="logo" class="fl_left">
        <h1><router-link :to="{ name: 'HomeIndex', params: {name : 'HomeIndex' } }">Bronea</router-link></h1>
      </div>
      <!-- ################################################################################################ -->
      <nav id="mainav" class="fl_right">
        <ul class="clear">
          <li :class="{active : activeName =='HomeIndex'}"><router-link :to="{ name: 'HomeIndex', params: {name : 'HomeIndex' } }">Home</router-link></li>
          <li :class="{active : is_Page}"><a class="drop" href="#">Pages</a>
            <ul>
              <li :class="{active : activeName =='Transition'}"><router-link :to="{ name: 'Transition', params: { name : 'Transition' } }">Transition</router-link></li>
              <li :class="{active : activeName =='List'}"><router-link :to="{ name: 'List', params: { name : 'List' } }">List</router-link></li>
              <li :class="{active : activeName =='Upload'}"><router-link :to="{ name: 'Upload', params: { name : 'Upload' } }">Upload</router-link></li>
            </ul>
          </li>
          <li><a class="drop" href="#">Dropdown</a>
            <ul>
              <li><a href="#">Level 2</a></li>
              <li><a class="drop" href="#">Level 2 + Drop</a>
                <ul>
                  <li><a href="#">Level 3</a></li>
                  <li><a href="#">Level 3</a></li>
                  <li><a href="#">Level 3</a></li>
                </ul>
              </li>
              <li><a href="#">Level 2</a></li>
            </ul>
          </li>
          <li><a href="#">Link Text</a></li>
          <li><a href="#">Link Text</a></li>
        </ul>
      </nav>
      <!-- ################################################################################################ -->
    </header>
  </div>
  <slot></slot>
  <div class="wrapper row4">
  <footer id="footer" class="hoc clear">
    <!-- ################################################################################################ -->
    <div class="one_half first">
      <h6 class="heading">Posuere lectus enim quis leo</h6>
      <p class="btmspace-30">Suspendisse potenti ut tempus consequat accumsan donec.</p>
      <ul class="nospace linklist contact">
        <li><i class="fa fa-map-marker"></i>
          <address>
          Street Name &amp; Number, Town, Postcode/Zip
          </address>
        </li>
        <li><i class="fa fa-phone"></i> +00 (123) 456 7890</li>
        <li><i class="fa fa-envelope-o"></i> info@domain.com</li>
      </ul>
    </div>
    <div class="one_quarter">
      <h6 class="heading">Id interdum nisl in</h6>
      <ul class="nospace linklist">
        <li><a href="#">Fermentum massa eget</a></li>
        <li><a href="#">Ipsum ut euismod arcu</a></li>
        <li><a href="#">In volutpat mattis nam</a></li>
        <li><a href="#">Diam leo placerat</a></li>
      </ul>
    </div>
    <div class="one_quarter">
      <h6 class="heading">At nulla ultrices</h6>
      <ul class="nospace linklist">
        <li><a href="#">Id diam in ultrices</a></li>
        <li><a href="#">Molestie neque nulla</a></li>
        <li><a href="#">Massa molestie efficitur</a></li>
        <li><a href="#">Eu tristique magna</a></li>
      </ul>
    </div>
    <!-- ################################################################################################ -->
  </footer>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row5">
  <div id="copyright" class="hoc clear">
    <!-- ################################################################################################ -->
    <p class="fl_left">Copyright &copy; 2017 - All Rights Reserved - <a href="#">Domain Name</a></p>
    <p class="fl_right">Template by <a target="_blank" href="http://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
    <!-- ################################################################################################ -->
  </div>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<a id="backtotop" href="#top"><i class="fa fa-chevron-up"></i></a>
</div>
</template>
<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      activeName: '',
      is_Page: false
    }
  },
  created: function () {
    this.activeName = this._routerRoot._router.history.current.name
    if (this.activeName !== 'HomeIndex') {
      this.is_Page = true
    } else {
      this.is_Page = false
    }
  }
}
</script>
