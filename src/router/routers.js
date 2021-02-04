const RouterArrays = [
   {
      path: "",
      name: "main",
      component: () => import("@/views/main/index.vue"),
      children: [
         {
            path: "",
            name: "container",
            component: () => import("@/views/container/index/index.vue")
         }
      ]
   },
]
const routerArray = [
   {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index.vue")
   },
   {
      path: "/index",
      name: "index",
      component: () => import("@/views/index/index.vue")
   },
   ...RouterArrays,
   {
      path: "/403",
      name: "403",
      component: () => import("@/views/error/403.vue")
   },
   {
      path: "/404",
      name: "404",
      component: () => import("@/views/error/404.vue")
   },
   {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("@/views/error/404.vue")
   }
]
export default routerArray;