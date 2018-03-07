import images from '../images'

// 상태를 변경하는 기능만을 뽑아서..
export default{
  [images.IMAGE_LIST]: (state, payload) => {
    state.imagelist = payload.imagelist
  },
  [images.IMAGE_RESET]: (state) => {
    state.imagelist = []
  },
  [images.IMAGE_DETAIL]: (state, payload) => {
    state.imageInfo = payload.imageInfo
  },
  [images.CHANGE_ISLOADING]: (state, payload) => {
    state.isloading = payload.isloading
  }
}
