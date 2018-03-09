import test from '../tests'

// 상태를 변경하는 기능만을 뽑아서..
export default{
  [test.LIST]: (state, payload) => {
    state.imagelist = payload.imagelist
  },
  [test.INSERT]: (state) => {
    state.imagelist = []
  },
  [test.IMAGE_DETAIL]: (state, payload) => {
    state.imageInfo = payload.imageInfo
  },
  [test.CHANGE_ISLOADING]: (state, payload) => {
    state.isloading = payload.isloading
  }
}
