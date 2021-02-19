<template>
  <router-view />
</template> 
<script>
import { provide, defineComponent, reactive, onMounted } from "vue";
import $Message from "@/components/message/index";
import common from "@/privateUtil/util";
import store from "@/store";
export default defineComponent({
  setup(props, ctx) {
    let msgClass = reactive({
      message: $Message,
    });
    provide("$Message", msgClass);
    provide("$Com", common);
    provide("$S", store);
    let initPcAMobile = () => {
      console.log(window.navigator.userAgent);
      if (window.navigator.userAgent.indexOf("Windows") !== -1) {
        store.commit("setIsPc", true);
        return;
      }
      if (window.navigator.userAgent.indexOf("Mac") !== -1) {
        store.commit("setIsPc", true);
        return;
      }
      store.commit("setIsPc", false);
    };
    onMounted(() => {
      initPcAMobile();
      let resizeHeight = common.throttle(() => {
        store.commit("setHeight", window.innerHeight);
      }, 500);
      window.addEventListener("resize", resizeHeight); 
    });
  },
});
</script>
<style>
body,
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
  /* color:#fff; */
  /* background:#000; */ 
}  

</style>
