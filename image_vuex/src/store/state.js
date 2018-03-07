import CONF from '../Config.js'

export default {
  isloading: false,
  imageInfo: {src: '', name: ''},
  imagelist: {
    pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 0, images: []
  }
}
