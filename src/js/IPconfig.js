export const baseURL = {
    //mall: "http://192.168.3.111/epmall-front",  //梁焱升本地
    mall: "http://192.168.3.167:8888",             //167测试环境
};
export const mallToken = {
  setToken: function(token){
    localStorage.setItem("mallLoginToken",token);
    console.log("设置成功");
  },
  getToken: function(){
    const token = localStorage.getItem("mallLoginToken") || "266db896f05f44cba53b504f34d32253";
    return token;
  }
};
