<template>
  <div >
    <img class="error-block" src="@/assets/error/403.png" alt="">
    <div class="error-back">{{timer}}秒返回<router-link to="/login">登录页</router-link></div>
  </div>
</template>
<script>
import {
  reactive,
  ref,
  compouted,
  onMounted,
  defineComponent,
  onUnmounted,
} from "vue";
import common from '@/privateUtil/util.js';
export default defineComponent({
  setup(props, ctx) {
    let state = reactive({
      timer:5
    })
    setInterval(()=>{
      state.timer -- ;
      if(state.timer <= 0){
        common.rLink('/login')
      }
    },1000)
    return state;
  },
});
</script>
<style>
@import url('./style.css');
</style>