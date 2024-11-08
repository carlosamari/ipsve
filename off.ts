import { store } from '../store'

export default {
  mounted() {
    const storeObject = store.getStore()
    console.log(storeObject)
  }
}
