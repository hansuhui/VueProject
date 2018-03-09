import api from '../api/API'
import test from '../tests'

export default {
  [test.LIST]: (store, payload) => {
    store.dispatch(test.CHANGE_ISLOADING, { isloading: true })
    api.List()
      .then((res) => {
        if (res.data.result === '00') {
          store.commit(test.LIST, {list: res.data.list})
          store.dispatch(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  },
  [test.INSERT]: (store, payload) => {
    api.Insert(payload)
      .then((res) => {
        if (res.data.result === '00') {
          store.dispatch(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  },
  [test.UPDATE]: (store, payload) => {
    api.Update(payload)
      .then((res) => {
        if (res.data.result === '00') {
          store.dispatch(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  },
  [test.DETAIL]: (store, payload) => {
    api.Detail(payload)
      .then((res) => {
        if (res.data.result === '00') {
          store.dispatch(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  },
  [test.DELETE]: (store, payload) => {
    api.Delete(payload)
      .then((res) => {
        if (res.data.result === '00') {
          store.dispatch(test.CHANGE_ISLOADING, { isloading: false })
        } else {
          alert(res.data.message)
        }
      })
  }
}
