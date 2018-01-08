import Vue from 'vue'
import Vuex from 'vuex'
import Calendar from './modules/Calender'
import indexed from './modules/indexedDb'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Calendar,indexed
    },
})
