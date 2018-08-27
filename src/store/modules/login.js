const state = {
    isLogin:0,
    userInfo :{
        userNmae:'这是测试用的用户名',
        nick:'这是登陆的nick',

    }
}

const getters = {

}

const actions = {

}

const mutations = {
    //更新用户信息
 
    updateUserInfo(state,newUserInfo){
        debugger
        state.userInfo = newUserInfo;
        this.state.isLogin=newUserInfo.loginType//1表示登陆
    },
    
}

export default {
    // namespaced: true,
  state,
  getters,
  actions,
  mutations
}