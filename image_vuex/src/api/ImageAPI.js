import CONF from '../Config.js'
import axios from 'axios'

export default {
  imageList: function () {
    var formData = new FormData()
    formData.append('req_name', 'han')
    return axios.post(CONF.LIST, formData, {responseType: 'json'})
  }
}
