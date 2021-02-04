<template>
  <div
    :class="'message-toast ' + className"
    :style="{top:showTop+'px'}"
  >
    <ToastSign :messageType="messageType"></ToastSign>{{content}}
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
import ToastSign from "./toastSign.vue";
export default defineComponent({
  components: {
    ToastSign,
  },
  setup(props, ctx) {
    let stateReset = () => {
      state.showTop = -35;
      state.timer = null;
    };
    let selectType = (type) => {
      switch (type) {
        case "success":
          state.className = "message-toast-success";
          state.messageType = "success";
          break;
        case "error":
          state.className = "message-toast-error";
          state.messageType = "error";
          break;
        case "loading":
          state.className = "message-toast-loading";
          state.messageType = "loading";
          break;
        default:
          state.className = "message-toast-default";
          state.messageType = "default";
          break;
      }
    };
    let showModel = (msg, duration, type, fn) => {
      state.content = msg || "请输入内容";
      selectType(type);
      state.showTop = 10;
      if (state.timer) {
        return;
      }
      state.timer = setTimeout(() => {
        fn && fn(); 
        stateReset();
      }, duration * 1000 || 3000);
    };
    let hideModel = () => { 
      clearInterval(state.timer)
      stateReset();
    };
    let state = reactive({
      showModel,
      hideModel,
      className: "",
      content: "",
      timer: null,
      showTop: -35,
      messageType: "",
    });
    return state;
  },
});
</script> 
<style>
.message-toast {
  border-radius: 3px;
  padding: 5px 20px;
  color: #fff;
  width: fit-content;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  transition: 0.2s linear top;
  background: #fff;
  box-shadow: 0.1px 0.1px 1px 1px #c5c8ce;
  vertical-align: middle;
  font-size: 13px;
  line-height: 23px;
}
.message-toast-success {
  color: #19be6b;
}
.message-toast-error {
  color: #ed4014;
}
.message-toast-loading {
  color: #515a6e;
}
.message-toast-default {
  background: #f0f0f0;
  color: #515a6e;
}
</style>