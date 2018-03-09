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
                이름 : <a href="#">{{r_infor.name}}</a>
                </address>
                <time :datetime="r_infor.regdate">{{r_infor.regdate}}</time>
              </header>
              <div class="comcont">
                <p>Eail : {{r_infor.email}}</p>
                <p>address : {{r_infor.address}}</p>
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
import EventBus from '@//EventBus'
import MainLayout from '@/components/Shared/_MainLayout'

export default {
  name: 'Detail',
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
      this.$router.push({name: 'Update', params: {pk: this.r_infor.pk}})
    },
    GoList () {
      this.$router.push({name: 'List', params: {name: '리스트'}})
    },
    Delete () {
      if (
        confirm('삭제 하시겠습니까?')
      ) {
        axios.post('/api/test/delete', {pk: this.pk})
          .then((res) => {
            if (res.data.code === '00') {
              alert('삭제 되었습니다')
              this.$router.push({name: 'List', params: {name: '리스트'}})
            }
          }).catch(() => {
            alert('에러 발생')
            EventBus.$emit('loading', false)
          })
      }
    }
  }
}
</script>
