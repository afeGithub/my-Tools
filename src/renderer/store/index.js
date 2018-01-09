import Vue from 'vue'
import Vuex from 'vuex'
import Calendar from './modules/Calender'
import login from './modules/login'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Calendar,login
    },
})
