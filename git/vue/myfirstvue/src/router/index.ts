import { createRouter, createWebHashHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue'
import HomeView from '../views/HomeView.vue'
import type {RouteRecordRaw} from "vue-router"

//配置信息中需要页面的相关配置
const routeSettings: RouteRecordRaw[]= [
  {
    path:"/",
    name:"HomeView",
    component: HomeView
  },{
    path:"/signup",
    name:"SignUp",
    component: SignUp
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes:routeSettings
});

export default router
