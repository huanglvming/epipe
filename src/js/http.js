/**
 * Created by ZWH on 2017/9/4.
 */
import axios from "axios";
/*配置axios的默认*/
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;

// axios.defaults.baseURL = 'http://192.168.3.154:8889/v1';  //刘立伟
// axios.defaults.baseURL = 'http://192.168.3.40:9080/v1';  //曾祥华
// axios.defaults.baseURL = 'http://192.168.3.166:8280/member/v1';  //166地址
// axios.defaults.baseURL = 'http://192.168.3.29:8280/member/v1';  //测试
axios.defaults.baseURL = 'http://192.168.3.166:8280/member/v1';  //测试
// axios.defaults.baseURL = "http://39.108.152.248:18080/member/v1";  //正式
// axios.defaults.baseURL = "http://app.epipe.cn:18080/member/v1";

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
    // if (window.localStorage.auth_token) {
    //   config.headers.auth_token = window.localStorage.auth_token;
    // }
    if(getCookie("auth_token")){
      config.headers.auth_token = getCookie("auth_token");
      window.localStorage.setItem("auth_token",getCookie("auth_token"));
    }else{
      config.headers.auth_token = window.localStorage.auth_token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http响应拦截器
axios.interceptors.response.use(data => {// 如果code是10  就是token过期了
  if (data.data.h.code == 10) {
    window.location.href = "epipe://?&mark=login_out"
  }
  return data
}, error => {
  return Promise.reject(error)
})

export default axios
