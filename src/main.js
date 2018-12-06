// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import AMap  from 'vue-amap';

Vue.config.productionTip = false
Vue.use(iView);
Vue.use(AMap);

AMap.initAMapApiLoader({
    key: '3b08a1ba8e2c16a8428021a388dc0c85',
    plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
