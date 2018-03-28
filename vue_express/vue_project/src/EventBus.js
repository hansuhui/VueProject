import Vue from 'vue'
import axios from 'axios'

export default new Vue({
  name: 'EventBus',
  methods: {
    ajax (url, params, component, callback) {
      this.$emit('loading', true)
      axios.post(url, params)
        .then((res) => {
          if (res.data.code === '00') {
            callback(component, res)
          } else {
            alert(res.data.msg)
          }
          this.$emit('loading', false)
        }).catch(() => {
          this.$emit('loading', false)
          alert('에러 발생')
        })
    }
  }
})
