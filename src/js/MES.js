'use strict'
import $ from "jquery";

let baseURL = 'http://192.168.3.166:8580/mes-webapi/v1';  //测试
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
function getInitToken(){
  return getCookie("auth_token")?getCookie("auth_token"):"bc0b43b3-c9b2-49a5-b1c9-72c029580437";
}
function getNewToken(){
  let new_token = "";
  $.ajax({
    type: "GET",
    url: baseURL+"/user/appToken",
    data:{
      token: getInitToken()
    },
    async: false,
    success: function(data){
      if(data.h.code === 200){
        new_token = data.b.authToken;
      }
    },
    error: function (err) {
      console.log("失败了",err);
    }
  });
  return new_token;
}

export default {
  name: "MES",
  get(url, params) {
    return $.ajax({
      type: "GET",
      url: baseURL+url,
      headers:{
        'auth_token': getNewToken()
      },
      data:params,
      success: function(res){
        return res;
      },
      error: function (err) {
        return err;
      }
    });
  }
}
