/*
 * @FilePath: index.ts
 * @Author: Aron
 * @Date: 2023-09-28 17:17:46
 * @LastEditors:
 * @LastEditTime: 2023-09-28 17:17:46
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'List',
    //   component: import('../views/List.vue'),
    // },
    // {
    //   path: '/detail',
    //   name: 'Detail',
    //   component: import('../views/Detail.vue'),
    // }
  ],
});

export default router;