import store from '@/store'; 
/**
 * 路由守卫，权限判定
 * @param {*} router 路由对象
 * 
 */ 
let initGuard = (router) => {
   router.beforeEach((to, from, next) => { 
      let { name } = to;  
      if (name !== "login" && name !== "403" && !store.getters.getAccess) {
         next({
            path:"/403",
            name:"403"
         });
         console.log("No Access!")
      } else {
         next();
      }
   })
}
export default initGuard;