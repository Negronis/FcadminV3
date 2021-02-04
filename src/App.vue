<template>
  <router-view />
</template> 
<script>
import { provide, defineComponent, reactive } from "vue";
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
  },
});
</script>
<style>
body,
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
}
</style>
