//导入需要的css文件
import css from './css/index.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import comm from './componets/comm.vue';
import router from './router';

var vm = new Vue({
  el:"#app",
  render:p=>p(comm),
  router
})