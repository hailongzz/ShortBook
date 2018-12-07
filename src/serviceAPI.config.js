const BASEURL = ' https://www.easy-mock.com/mock/5c05e28de1eaff56e652ceda/shortbook/'
const LOCALURL = ' http://localhost:3000/'
const URL = {
    getShoppingMallInfo:BASEURL+'index',//用户首页
    registerUser: LOCALURL+'user/register',//注册页
    login: LOCALURL+'user/login',           //登录页


}
module.exports = URL