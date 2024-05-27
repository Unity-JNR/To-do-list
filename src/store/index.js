import { createStore } from 'vuex'
import axios from 'axios'
const user = 'https://to-do-list-5sqk.onrender.com/users'
const login ='https://to-do-list-5sqk.onrender.com/login'
const web = 'https://to-do-list-5sqk.onrender.com/tasks'

export default createStore({
  state: {
    loginIn:false
  },
  getters: {
  },
  mutations: {
    setLogged(state,value){
      state.loginIn = value
    }
  },
  actions: {
    async log_in({commit},user){
      let {data} = await axios.post(login,user)
      console.log(data);
      if (data.token !== undefined) {
        $cookies.set('jwt',data.token)
        let [{userRole}]=data.user
        $cookies.set('userRole',userRole)
        let [user] =data.user
        $cookies.set('user',user)
        let [{UserID}] = data.user
        $cookies.set('userID',UserID)
        console.log($cookies);
        await router.push('/')
      } else {
        $cookies.remove('jwt')
        $cookies.remove('user')
        $cookies.remove('userRole')
        $cookies.remove('userID')
      }
      commit('setLogged')
    }
  },
  modules: {
  }
})
