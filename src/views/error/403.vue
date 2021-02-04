<template>
  <div >
    <img class="error-block" src="@/assets/error/403.png" alt="">
    <div class="error-back">{{timer}}秒返回<router-link replace to="/login">登录页</router-link></div>
  </div>
</template>
<script>
import {
  reactive,
  ref, 
  inject,
  defineComponent,
  onUnmounted 
} from "vue"; 
export default defineComponent({
  setup(props, ctx) {
    let common = inject("$Com");
    onUnmounted(()=>{
      clearInterval(state.timeNum);
      state.timeNum = null;
    })
    let state = reactive({
      timer:5,
      timeNum:null
    })
    state.timeNum = setInterval(()=>{
      state.timer -- ;
      if(state.timer <= 0){
        clearInterval(state.timeNum)
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