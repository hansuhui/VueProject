import test from '../tests'

// 상태를 변경하는 기능만을 뽑아서..
export default{
  [test.LIST]: (state, payload) => {
    state.list = payload.list
  },
  [test.RESET]: (state) => {
    state.one = {pk: '', name: '', email: '', address: ''}
  },
  [test.SELECT]: (state, payload) => {
    state.one = payload.one
  },
  [test.CHANGE_ISLOADING]: (state, payload) => {
    state.isloading = payload.isloading
  }
}
