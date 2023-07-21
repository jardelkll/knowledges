import { createStore } from 'vuex'

export default createStore({
  state: {
    titles: {
      home: 'Monte o seu burger:',
      orders: 'Gerenciar pedidos:'
    }
  },
  getters: {
  },
  mutations: {
    testeMut(state,data){
      console.log('testeMut',data);
    }
  },
  actions: {
  },
  modules: {
  }
})
