import CONF from '../Config.js'

export default {
  isloading: false,
  Info: {name: '', email: '', address: ''},
  list_infro: {
    pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 0, list: []
  }
}
