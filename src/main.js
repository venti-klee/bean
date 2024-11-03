import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router.config'; // 确保路径正确
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import axios from 'axios';

const app = createApp(App);

app.use(ElementPlus);
app.use(router); // 使用 Vue Router

// 挂载 axios 到全局
app.config.globalProperties.$axios = axios;

// 注册 Element Plus 图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// 扩展 ResizeObserver
const debounce = (fn, delay) => {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
};

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
    constructor(callback) {
        callback = debounce(callback, 16);
        super(callback);
    }
};

app.mount('#app');