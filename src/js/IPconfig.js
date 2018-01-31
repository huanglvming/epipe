export const baseURL = {
  // mall: "http://192.168.3.111/epmall-front",  //梁焱升本地
  // mall: "http://192.168.3.167:8888",             //167测试环境
  mall: "https://mall.epipe.cn",                //正式环境
};
export const mallToken = {
  setToken: function(token){
    localStorage.setItem("mallLoginToken",token);
    console.log("设置成功");
  },
  getToken: function(){
    const token = localStorage.getItem("mallLoginToken");
    return token;
  }
};
