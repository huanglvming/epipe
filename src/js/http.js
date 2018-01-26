/**
 * Created by ZWH on 2017/9/4.
 */
import axios from "axios";
/*配置axios的默认*/
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;

const dev = 'http://192.168.3.166:8280/member/v1'; //测试
const product = "http://app.epipe.cn:18080/member/v1"; //正式
axios.defaults.baseURL = window.location.href.indexOf("app.epipe.cn")>0 ? product : dev;

function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
if (getCookie("auth_token")) {
  window.localStorage.setItem("auth_token",getCookie("auth_token"));
}

axios.interceptors.request.use(
  config => {
    if(getCookie("auth_token")){
      if(!config.headers.auth_token){
        config.headers.auth_token = getCookie("auth_token");
      }
      window.localStorage.setItem("auth_token",getCookie("auth_token"));
    }else{
      if(!config.headers.auth_token){
        config.headers.auth_token = window.location.href.indexOf("app.epipe.cn")>0 ? window.localStorage.auth_token : "b2e18163-9b2b-45f5-a1ef-8e72eef808ff";
      }
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http响应拦截器
axios.interceptors.response.use(data => {// 如果code是10  就是token过期了
  try{
    if (data.data.h.code == 10) {
      window.location.href = "epipe://?&mark=login_out"
    }
  }catch (err){
    console.log(err);
  }finally{
    return data
  }
}, error => {
  return Promise.reject(error)
})

export default axios
