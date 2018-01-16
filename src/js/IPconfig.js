export const baseURL = {
  // mall: "http://192.168.3.111/epmall-front",  //梁焱升本地
   mall: "http://192.168.3.167:8888",             //167测试环境
};
// function fn() {
//   const token = localStorage.getItem("token");
//   return token;
// }
export const mallToken = {
  setToken: function(token){
    localStorage.setItem("token",token);
    console.log("设置成功");
  },
  getToken: function(){
    const token = localStorage.getItem("token") || "暂时没有数据";
    console.log("token",token)
    return token;
  }
};
