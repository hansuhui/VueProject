import api from '../api/API'
import test from '../tests'

export default {
  [test.LIST]: (store, payload) => {
    store.commit(test.CHANGE_ISLOADING, { isloading: true })
    api.List()
      .then((res) => {
        if (res.data.code === '00') {
          store.commit(test.LIST, {list: res.data.result})
          store.commit(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.msg)
        }
      })
  },
  [test.INSERT]: (store) => {
    api.Insert(store.state.one)
      . then((res) => {
        if (res.data.code === '00') {
          alert('등록되었습니다')
          store.dispatch(test.LIST, {})
          store.commit(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  },
  [test.UPDATE]: (store) => {
    api.Update(store.state.one)
      .then((res) => {
        if (res.data.code === '00') {
          alert('수정 되었습니다')
          store.dispatch(test.LIST, {})
          store.commit(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  },
  [test.SELECT]: (store, payload) => {
    api.Detail({pk: payload.pk})
      .then((res) => {
        if (res.data.code === '00') {
          store.commit(test.SELECT, {one: res.data.result[0]})
          store.commit(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  },
  [test.DELETE]: (store, payload) => {
    api.Delete({pk: payload.pk})
      .then((res) => {
        if (res.data.code === '00') {
          alert('삭제 되었습니다')
          store.dispatch(test.LIST, {})
          store.commit(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  },
  [test.UPLOAD]: (store, payload) => {
    api.Upload({pk: payload})
      .then((res) => {
        if (res.data.code === '00') {
          alert('등록 되었습니다')
          store.dispatch(test.LIST, {})
          store.commit(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  }
}
