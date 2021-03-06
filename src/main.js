// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from "vue";
import App from "./App";
import router from "./router/router";
import store from "./store/index.js"; //vuex
import "./js/rem";
import "./js/filter"; //过滤器
import "./js/http"; //axios请求配置
import "./assets/iconfont"; //字体图标库
import "./style/reset.styl";
import "./style/style.styl";


import fastclick from "fastclick";
fastclick.attach(document.body);
// 引入服务
import Service from "./js/Service";
Vue.prototype.Service = Service;
//  数据交互
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

//引入echarts以及封装的echarts方法库
// import echarts from "echarts";
import echartsLib from "./js/echartsLib";
// Vue.prototype.$echarts = echarts;
Vue.prototype.echartsLib = echartsLib;

//引入mes封装方法
import MES from "./js/MES";
Vue.prototype.$mes = MES;

//  提示框
import {Alert, Confirm, Prompt, Toast} from "wc-messagebox";
import "wc-messagebox/style.css";
import wcSwiper from 'wc-swiper';//轮播图
import "wc-swiper/style.css";//轮播图样式
Vue.use(Confirm);
Vue.use(Toast);
Vue.use(Alert);
Vue.use(wcSwiper);

window.eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: {App}
});
