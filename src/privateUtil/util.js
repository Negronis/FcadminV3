import Vue from 'vue';  
import router from '@/router/index.js'; 
class Common {
   timer = null;
   throttle = (fn, interval) => {
      return () => {
         if (this.timer) {
            return;
         }
         this.timer = setTimeout(() => {
            clearTimeout(this.timer);
            this.timer = null;
            fn();
         }, interval)
      };
   }
   suc = (content, duration, func) => {
      // this.destory();
      // (Vue.prototype.$Message).success({
      //    content: content,
      //    duration: duration,
      //    onClose: func
      // });
   };
   error = (content, duration, func) => {
      // this.destory();
      // (Vue.prototype.$Message).error({
      //    content: content,
      //    duration: duration,
      //    onClose: func
      // });
   };
   loading = (content, duration, func) => {
      // this.destory();
      // (Vue.prototype.$Message).loading({
      //    content: content,
      //    duration: duration,
      //    onClose: func
      // });
   }
   destory = () => {
      // Vue.prototype.$Message.destroy();
   }
   routelink = (path, name, param) => {
      if (param) {
         router.push({
            path: path,
            name: name,
            params: param,
         });
      } else {
         router.push({
            path: path,
            name: name
         });
      }
   }
   rLink(path) {
      router.replace(path);
   }
   routeBack = () => {
      router.back();
   }  
}
export default new Common();