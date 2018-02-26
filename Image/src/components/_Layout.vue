<template>
<div>
  <header><h1>{{Title}}</h1></header>
  <div class="content">
    <slot></slot>
  </div>
  <footer><div style="float:left;margin-left:10px;">만든이 : 한수희</div><div style="float:right;margin-right:10px;">일자 : 2018.02.22</div></footer>
</div>

</template>

<script>
export default {
  name: 'Layout',
  props : ['Title']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    margin:0px;
  }

  header {
    color: white;
    background-color: darkgray;
    text-align:left;
    padding:9px;
  }

  .content{
    background-color: cornsilk;
    min-height: calc(100vh - 85px);
  }

  footer{
    height: 23px;
    background-color: darkgray;
    color: indigo;
    font-weight: bold;
  }
  
</style>
