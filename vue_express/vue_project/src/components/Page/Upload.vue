<template>
<div>
<MainLayout>
 <div class="wrapper">
    <section id="breadcrumb" class="hoc clear">
      <!-- ################################################################################################ -->
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Insert</a></li>
      </ul>
      <!-- ################################################################################################ -->
      <h6 class="heading">Insert</h6>
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
        <h2>파일</h2>
        <form action="#" method="post">
          <div>
            <label for="name">파일 <span>*</span></label>
            <input type="file" name="file_test" id="file_test">
          </div>
        </form>
      </div>
      <button class="btn" @click='Insert'>등록</button>
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
import tests from '@/tests'

export default {
  name: 'Insert',
  components: { MainLayout },
  methods: {
    Insert () {
      if (
        confirm('등록 하시겠습니까?')
      ) {
        var formData = new FormData()
        var fileTest = document.querySelector('#file_test')
        formData.append('file_test', fileTest.files[0])

        this.$store.dispatch(tests.UPLOAD, formData)
        this.$router.push({name: 'List', params: {name: '리스트'}})
      }
    },
    GoList () {
      this.$store.dispatch(tests.LIST, {})
      this.$router.push({name: 'List', params: {name: '리스트'}})
    }
  }
}
</script>
