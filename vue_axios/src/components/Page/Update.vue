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
            <input type="text" v-model="r_infor.name"  maxlength="20" size="22" required>
          </div>
          <div class="one_third">
            <label for="email">Mail</label>
            <input type="text" v-model="r_infor.email"  maxlength="20" size="22">
          </div>
          <div class="one_third">
            <label for="url">Address</label>
            <input type="text" v-model="r_infor.address"  maxlength="20" size="22">
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
import EventBus from '@//EventBus'
import MainLayout from '@/components/Shared/_MainLayout'

export default {
  name: 'update',
  components: { MainLayout },
  props: ['pk'],
  created () {
    EventBus.$emit('loading', true)
    if (this.pk) {
      EventBus.ajax('/api/test/list', {pk: this.pk}, this, function (component, res) {
        res.data.result[0].regdate = new Date(res.data.result[0].regdate).toLocaleString()
        component.r_infor = res.data.result[0]
      })
    } else {
      alert('잘못된 접근입니다.')
      EventBus.$emit('loading', false)
      this.$router.push({name: 'List', params: {name: '리스트'}})
    }
  },
  data () {
    return {
      r_infor: {}
    }
  },
  methods: {
    update () {
      if (
        confirm('수정 하시겠습니까?')
      ) {
        EventBus.$emit('loading', true)
        EventBus.ajax('/api/test/update', this.r_infor, this, function (component, res) {
          alert('수정되었습니다.')
          component.$router.push({name: 'List', params: {name: '리스트'}})
        })
      }
    },
    GoList () {
      EventBus.$emit('loading', true)
      this.$router.push({name: 'List', params: {name: '리스트'}})
    }
  }
}
</script>
