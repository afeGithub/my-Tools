//state
const state = {
    loginState:'',
    userInfo:{}
};

// getters
const getters = {
    getLoginState:state => state.loginState,
    getUserInfo:state => state.userInfo
};
// actions
const actions = {
    login:({commit},loginObject) =>{
        commit('setLoginState',true);
        // return {state:'error',msg:'账号密码错误！！！'}
        commit('setUserInfo',{id:10,username:'afe'});
        return {state:'success',msg:'登录成功'}

    }
};

// mutations
const mutations = {
    setLoginState:(state,loginState) => state.loginState = loginState,
    setUserInfo:(state,userInfo) => state.userInfo = userInfo
};
export default {
    state,
    getters,
    actions,
    mutations
}