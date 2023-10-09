import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import router from './router'
let app: any;
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).mount('#app'); //挂载App组件到根容器上面，注意需要use路由！
} else {
  renderWithQiankun({
    // 子应用挂载（每一次切换到本子应用的时候都会触发！！）
    mount(props: any) {
      app = createApp(App);
      app.use(router).mount(props.container.querySelector('#app'));
    },
    // 只有子应用第一次加载会触发
    bootstrap() {
      console.log('vue app bootstrap');
    },
    // 更新（多了一个更新函数，在本子应用里面更新数据的时候）
    update() {
      console.log('vue app update');
    },
    // 卸载
    unmount() {
      console.log('vue app unmount');
      app?.unmount(); //卸载app
    }
  });
}