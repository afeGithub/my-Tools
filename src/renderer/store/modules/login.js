import Vue from 'vue'
import axios from 'axios'
import http from 'http'
Vue.http = axios;
import qs from 'qs'
import dbTools from '../../api/indexedDbTools'
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
    loginAction:({commit},loginObject) =>{
        return  new Promise((resolve, reject) => {
            let userId = loginObject.userId;
            let password = loginObject.password;

            dbTools.openNewDb('User').then(db =>{
                //查询数据库中是否存在该账户
                dbTools.getDataByKey(db, 'userInfo', userId).then(user => {
                    if (!user) {
                       //不存在该账户，去远程数据库请求验证
                       //  console.log(qs.stringify({
                       //      j_username: '0025',
                       //      j_password: '12112212'
                       //  }))
                        Vue.http.post('http://http://portal.hungraim.com/portal/spring_security_login', qs.stringify({
                            j_username: '0025',
                            j_password: '12112212'
                        }),{
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                            },
                            proxy: {
                                host: 'http://wsg.cmszmail.ad',
                                port: 8083,
                            }
                        }).then(response=>{
                            console.log(response)
                        }).catch(response =>{
                            console.log(response)
                        });

                        // http.get('http://www.baidu.com',function(res){
                        //     console.log(res)
                        // });




                        reject({state:'error',msg:'登录失败,不存在该账户！！！'})
                    } else {
                        //存在该账户 直接验证该账户
                        if(user.password === password){
                            commit('setLoginState',true);
                            commit('setUserInfo',{id:10,username:'afe'});
                            resolve({state:'ok',msg:'登录成功'})
                        }else{
                            reject({state:'error',msg:'登录失败,用户名或密码错误！！！'})
                        }

                    }
                });


            });






        })


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