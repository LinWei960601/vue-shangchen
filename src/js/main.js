// 导入默认初始化
import 'normalize.css'

// 导入Vue库
import Vue from 'Vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 启动vue插件
Vue.use(VueRouter);
Vue.use(ElementUI);


// 导入根组件
import App from '../component/App.vue';

// 导入路由配置
import routerConfig from '../router/index.js';

// 导入axios, 因为它不是vue插件, 使用起来不方便, 所以我们手动把它加到原型中, 方便使用
import axios from 'axios';
axios.defaults.baseURL = 'http://157.122.54.189:9095';
Vue.prototype.$http = axios;

// 导入api配置对象, 为了使用更加方便, 把它也加到原型中
import api from '../js/api-config.js';
Vue.prototype.$api = api;

// 渲染根组件到占位标签上
new Vue({
    el: '#app',
    render(createElement) {
        return createElement(App);
    }
});