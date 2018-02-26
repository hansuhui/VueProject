<template>
<div class="bgded overlay bg1" style="background-image:url('@/assets/images/demo/backgrounds/01.png');">
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
              <li :class="{active : activeName =='Transition2'}"><router-link :to="{ name: 'Transition2', params: { name : 'Transition2' } }">Transition2</router-link></li>
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
</div>
</template>

<script>

export default {
  name: 'LayoutHeader',
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

<style src="@/assets/layout/styles/layout.css"></style>
