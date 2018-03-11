<template>
<div>
<MainLayout>
 <div class="wrapper">
    <section id="breadcrumb" class="hoc clear">
      <!-- ################################################################################################ -->
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">List</a></li>
      </ul>
      <!-- ################################################################################################ -->
      <h6 class="heading">List</h6>
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
      <h1>TEST</h1>
      <div class="scrollable">
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>이메일</th>
              <th>주소</th>
              <th>가입일</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in list" :key='data.pk'>
              <td><a href="#" @click='GoDetile(data.pk)'>{{data.name}}</a></td>
              <td>{{data.email}}</td>
              <td>{{data.address}}</td>
              <td>{{new Date(data.regdate).toLocaleString()}}</td>
            </tr>
          </tbody>
        </table>
        <button style="float:right" class="btn" @click='Insert'>등록</button>
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
</MainLayout>
</div>
</template>

<script>
import MainLayout from '@/components/Shared/_MainLayout'
import { mapState } from 'vuex'
import _ from 'lodash'
import tests from '@/tests'

export default {
  name: 'List',
  components: { MainLayout },
  props: ['name'],
  computed: _.extend(
    mapState([ 'list' ])
  ),
  mounted: function () {
    this.$store.dispatch(tests.LIST, {})
  },
  methods: {
    GoDetile (pk) {
      this.$router.push({name: 'Detail', params: {pk: pk}})
    },
    Insert () {
      this.$router.push({name: 'Insert'})
    }
  }
}
</script>
