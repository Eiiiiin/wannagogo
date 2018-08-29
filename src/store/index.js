import Vue from 'vue'
import vuex from 'vuex'

import login from './modules/login'


Vue.use(vuex)

export default new vuex.Store({
    
    modules:{
        login
    }
})