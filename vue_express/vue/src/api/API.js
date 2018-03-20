import CONF from '../Config.js'
import axios from 'axios'

export default {
  List: function () {
    return axios.post(CONF.LIST, {})
  },
  Insert: function (params) {
    return axios.post(CONF.INSERT, params)
  },
  Detail: function (params) {
    return axios.post(CONF.DETAIL, params)
  },
  Delete: function (params) {
    return axios.post(CONF.DELETE, params)
  },
  Update: function (params) {
    return axios.post(CONF.UPDATE, params)
  }
}
