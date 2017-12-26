const product = "www.baidu.com";
const dev = "http://192.168.3.111/epmall-front";
export const baseURL = window.location.href.indexOf("app.epipe.cn")>0 ? product : dev;
