<template>
<div>
<MainLayout>
 <div class="wrapper">
    <section id="breadcrumb" class="hoc clear">
      <!-- ################################################################################################ -->
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Update</a></li>
      </ul>
      <!-- ################################################################################################ -->
      <h6 class="heading">Update</h6>
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
        <h2>수정</h2>
        <form action="#" method="post">
          <div class="one_third first">
            <label for="name">Name <span>*</span></label>
            <input type="text" v-model="one.name"  maxlength="20" size="22" required>
          </div>
          <div class="one_third">
            <label for="email">Mail</label>
            <input type="text" v-model="one.email"  maxlength="20" size="22">
          </div>
          <div class="one_third">
            <label for="url">Address</label>
            <input type="text" v-model="one.address"  maxlength="20" size="22">
          </div>
        </form>
      </div>
      <button class="btn" @click='update'>수정</button>
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
  name: 'update',
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
      if (
        confirm('수정 하시겠습니까?')
      ) {
        this.$store.dispatch(tests.UPDATE)
        this.$router.push({name: 'List', params: {name: '리스트'}})
      }
    },
    GoList () {
      this.$router.push({name: 'List', params: {name: '리스트'}})
    }
  }
}
</script>
