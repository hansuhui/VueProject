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
            <tr v-for="data in r_List" :key='data.pk'>
              <td><a href="#" @click='GoDetile(data.pk)'>{{data.name}}</a></td>
              <td>{{data.email}}</td>
              <td>{{data.address}}</td>
              <td>{{new Date(data.regdate).toLocaleString()}}</td>
            </tr>
          </tbody>
        </table>
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
import axios from 'axios'
import MainLayout from '@/components/Shared/_MainLayout'
import EventBus from '@//EventBus'

export default {
  name: 'List',
  components: { MainLayout },
  props: ['name'],
  created () {
    EventBus.$emit('loading', true)
    axios.post('/api/test/list', {})
      .then((res) => {
        if (res.data.code === '00') {
          this.r_List = res.data.result
          EventBus.$emit('loading', false)
        }
      }).catch(() => {
        EventBus.$emit('loading', false)
        alert('에러 발생')
      })
  },
  data () {
    return {
      r_List: []
    }
  },
  methods: {
    GoDetile (pk) {
      EventBus.$emit('loading', true)
      this.$router.push({name: 'Detail', params: {pk: pk}})
    }
  }
}
</script>
