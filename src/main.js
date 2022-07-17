import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAMap from 'vue-amap';

Vue.use(ElementUI);
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 建议使用自己的，因为本人的可能随时删除
  // https://lbs.amap.com/api/javascript-api/guide/abc/prepare
  key: '45e33a49f9750935a4e89020878ee0af',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
