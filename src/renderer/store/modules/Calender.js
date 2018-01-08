//state
const state = {
    selectDay:new Date().getDate()<10?"0"+new Date().getDate():new Date().getDate(),
    modifyDaily:false,
    calendarShow:false
};

// getters
const getters = {
    getSelectDay:state=> state.selectDay,
    getModifyDaily:state=> state.modifyDaily,
    getCalendarShow:state=> state.calendarShow

};
// actions
const actions = {
    setSelectDay:({commit},day) =>commit('setSelectDay',day),
    setModifyDaily:({commit},modifyDaily) =>commit('setModifyDaily',modifyDaily),
    setCalendarShow:({commit},calendarShow) =>commit('setCalendarShow',calendarShow),
};

// mutations
const mutations = {
    setSelectDay:(state,day) =>state.selectDay = day,
    setModifyDaily:(state,modifyDaily) =>state.modifyDaily = modifyDaily,
    setCalendarShow:(state,calendarShow) =>state.calendarShow = calendarShow,
};
export default {
    state,
    getters,
    actions,
    mutations
}