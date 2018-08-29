const state = {
    isLogin:false,
    // userInfo :{
    //     userName:'这是测试用的用户名',
    //     nick:'这是登陆的nick',

    // }
}

const getters = {
// isLogin(state){
//     if((state.isLogin) == false ){
//         debugger
//        return state.isLogin =  sessionStorage.getItem('isLogin')
//         // state.userName =    sessionStorage.getItem('userName')
//     }
    
// },
isLogin:state=>state.isLogin
}

const actions = {
   
}

const mutations = {
    //更新用户信息
   isLogin(state,userInfo){
       debugger;
    //    sessionStorage.setItem('isLogin',userInfo.isLogin)
    state.isLogin = userInfo.isLogin;
    // state.userName = userInfo.userName;
    // sessionStorage.setItem('userName',userInfo.userName)
   }
    
    
}

export default {
    // namespaced: true,
  state,
  getters,
  actions,
  mutations
}