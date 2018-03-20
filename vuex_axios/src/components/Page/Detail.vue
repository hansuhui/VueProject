<template>
<div>
<MainLayout>
 <div class="wrapper">
    <section id="breadcrumb" class="hoc clear">
      <!-- ################################################################################################ -->
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Detail</a></li>
      </ul>
      <!-- ################################################################################################ -->
      <h6 class="heading">Detail</h6>
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
      <div id="comments">
        <h2>상세</h2>
        <ul>
          <li>
            <article>
              <header>
                <figure class="avatar"><img src="/static/images/demo/avatar.png" alt=""></figure>
                <address>
                이름 : <a href="#">{{one.name}}</a>
                </address>
                <time :datetime="one.regdate">{{one.regdate}}</time>
              </header>
              <div class="comcont">
                <p>Eail : {{one.email}}</p>
                <p>address : {{one.address}}</p>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <button class="btn" @click='update'>수정</button>
      <button class="btn" @click='Delete'>삭제</button>
      <button class="btn" style="float:right" @click='GoList'>리스트</button>
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
  name: 'Detail',
  components: { MainLayout },
  props: ['pk'],
  computed: _.extend(
    mapState([ 'one' ])
  ),
  created () {
    if (this.pk) {
      this.$store.dispatch(tests.SELECT, {pk: this.pk})
    } else {
      alert('잘못된 접근입니다.')
      this.$router.push({name: 'List', params: {name: '리스트'}})
    }
  },
  methods: {
    update () {
      this.$router.push({name: 'Update', params: {pk: this.one.pk}})
    },
    GoList () {
      this.$router.push({name: 'List', params: {name: '리스트'}})
    },
    Delete () {
      if (
        confirm('삭제 하시겠습니까?')
      ) {
        this.$store.dispatch(tests.DELETE, {pk: this.pk})
        this.$router.push({name: 'List', params: {name: '리스트'}})
      }
    }
  }
}
</script>
