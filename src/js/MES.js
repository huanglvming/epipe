'use strict'
// import $ from "jquery";

let baseURL = 'http://192.168.3.166:8580/mes-webapi/v1';  //测试
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
function getInitToken(){
  return getCookie("auth_token")?getCookie("auth_token"):"1acaef64-d877-4213-b550-224b1bc1a47b";
}
function getNewToken(){
  let new_token = "";
  // $.ajax({
  //   type: "GET",
  //   url: baseURL+"/user/appToken",
  //   data:{
  //     token: getInitToken()
  //   },
  //   async: false,
  //   success: function(data){
  //     if(data.h.code === 200){
  //       new_token = data.b.authToken;
  //     }
  //   },
  //   error: function (err) {
  //     console.log("失败了",err);
  //   }
  // });
  ajax({
    type: "GET",
    url: baseURL+"/user/appToken",
    data:{
      token: getInitToken()
    },
    async: false,
    success: function(data){
      let json = JSON.parse(data);
      if(json.h.code === 200){
        new_token = json.b.authToken;
      }
    },
  });
  return new_token;
}
let newToken = getNewToken();

export default {
  name: "MES",
  get(url, params) {
    /*return $.ajax({
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
    });*/
    return new Promise(function(resolve,reject){
      ajax({
        type: "GET",
        url: baseURL+url,
        headers:{
          'auth_token': newToken
        },
        data:params,
        success: function(res){
          return resolve(JSON.parse(res));
        },
        error: function (err) {
          return reject(err);
        }
      });
    });
  }
}


function ajax(params){

  var res = new XMLHttpRequest();
  //设置默认参数
  var obj = {
    url: "",
    type: 'get',
    data: {},
    callback: '',
    async:true,
    success: function(res){
    }
  }
  //合并参数
  Object.assign(obj,params);
  //参数格式化
  var temParam = '';
  //是否是表单
  var isFormData = obj.data instanceof FormData;
  //object形式
  if( typeof obj.data === 'object' && !isFormData){
    for( var name in obj.data){
      temParam += name + '=' + obj.data[ name ] + '&';
    }
    temParam = temParam.slice(0,-1);
  }else{
    temParam = obj.data;
  }
  //get类型
  if( obj.type.toLowerCase() === 'get'){
    obj.url += '?' + temParam;
  }
  //jsonp类型
  if( obj.type.toLowerCase() === 'jsonp'){
    var id = Math.random().toString().substr(2); //为了避免与别人取的函数名相同，写个随机的ID
    var fnName = 'callback' + id;
    window[fnName] = obj.success;  //挂在window上，作用于全局变量
    obj.url += '?' + temParam +'&callback=' + fnName;
    var js = document.createElement('script');
    js.src = obj.url;
    js.onload = function(){		//避免每次创建的标签
      this.remove();
      delete window[fnName];  //删除属性
    }
    document.body.appendChild( js );
    return;
  }
  res.open( obj.type, obj.url, obj.async);
  if(obj.async){
    res.onreadystatechange = function(){
      if( res.status === 200 && res.readyState === 4){
        obj.success(res.responseText);
      }
    }
  }else{
    res.send();
    obj.success(res.responseText)
    return;
  }
  //post类型
  if( obj.type.toLowerCase() === 'post' && !isFormData){
    res.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  }else{
    res.setRequestHeader('auth_token', newToken);
  }
  res.send(temParam);
}
