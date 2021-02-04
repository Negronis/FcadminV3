<template>
  <div v-if="messageType === 'default' || messageType === 'loading'" class="message-toast-sign message-toastLoading">!</div>
  <div v-if="messageType === 'success'" class="message-toast-sign message-toastSuccess">√</div>
  <div v-if="messageType === 'error'" class="message-toast-sign message-toastError">×</div>
</template>
<script>
import {defineComponent } from "vue";
export default defineComponent({
   props:
   {
      messageType:{
         default:"default",
         type:String
      }
   }
});
</script>
<style>
.message-toast-sign {
  display: inline-block;
  width: 15px;
  height: 15px;
  line-height: 15px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  vertical-align: middle;
  margin-bottom: 2px;
  font-weight: bold;
  color:#fff;
  margin-right:5px;
}
.message-toastLoading { 
  background:#2d8cf0;
  border: 1px solid #2d8cf0;
}
.message-toastSuccess {
  /* color:#19be6b; */
  background:#19be6b;
  border: 1px solid #19be6b;
}
.message-toastError {
  /* color:#ed4014;  */
  background:#ed4014; 
  border: 1px solid #ed4014; 
}
</style>