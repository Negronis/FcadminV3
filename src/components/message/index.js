import Message from './index.vue';
import { createApp } from 'vue';
class $Message {
   constructor() {
      this.div = null;
      this.el = null;
      this.vm = null;
   }
   init() {
      if (!document.querySelector("#message-toast")) {
         this.div = document.createElement("div");
         document.body.appendChild(this.div);
         this.div.id = "message-toast";
      } else {
         this.destory();
         this.div = document.querySelector("#message-toast");
      }
      this.el = createApp(Message);
      this.vm = this.el.mount(this.div);
   }
   show(msg, duration, type = type || "loading", fn) {
      this.vm.showModel(msg, duration, type, fn);
   }
   hide() {
      this.vm.hideModel();
   }
   loadingMessage(msg, duration = duration || 3, fn) {
      this.hide();
      this.vm.showModel(msg, duration, "loading", fn);
   }
   successMessage(msg, duration = duration || 3, fn) {
      this.hide();
      this.vm.showModel(msg, duration, "success", fn);
   }
   errorMessage(msg, duration = duration || 3, fn) {
      this.hide();
      this.vm.showModel(msg, duration, "error", fn);
   }
   destory() {
      document.body.removeChild(this.div);
      this.vm = null;
      this.div = null;
      this.el = null;
   }
}
const messageToast = new $Message();
messageToast.init();
export default messageToast;