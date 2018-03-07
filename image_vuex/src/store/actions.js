import ImageAPI from '../api/ImageAPI'
import images from '../images'

export default {
  [images.IMAGE_LIST]: (store, payload) => {
    store.dispatch(images.CHANGE_ISLOADING, { isloading: true })
    ImageAPI.imageList()
      .then((res) => {
        if (res.data.result === '00') {
          store.commit(images.IMAGE_LIST, {imagelist: JSON.parse(res.data.list)})
          store.dispatch(images.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  },
  [images.IMAGE_RESET]: (store) => {
    store.commit(images.IMAGE_RESET)
  },
  [images.IMAGE_DETAIL]: (store, payload) => {
    store.dispatch(images.CHANGE_ISLOADING, { isloading: false })
    store.commit(images.IMAGE_DETAIL, {imageInfo: payload.imageInfo})
  },
  [images.CHANGE_ISLOADING]: (store, payload) => {
    store.commit(images.CHANGE_ISLOADING, payload)
  }
}
