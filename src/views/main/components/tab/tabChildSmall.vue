<template>
  <div class="fcadmin-tab-child-child-parent">
    <div class="fcadmin-tab-child-child-title" v-if="tabDepChildObj['textTitle']">{{tabDepChildObj['textTitle']}}</div>
    <div @click="childLinkFunc(tabDepChildObj['link'])" class="fcadmin-tab-child-child-item">{{tabDepChildObj['title']}}</div>
  </div>
</template>
<script>
import { defineComponent, inject, reactive } from "vue";
export default defineComponent({
  props:{
    tabDepChildObj:{
      type:Object,
      default:{} 
    }
  },
  setup(props, ctx) {
    const com = inject("$Com");
    let childLinkFunc = function(link){
      if(link){
        com.routelink(link);
      }
    }
    let state = reactive({
      tabDepChildObj:props.tabDepChildObj,
      childLinkFunc:childLinkFunc
    }) 
    return state;
  },
});
</script>  
<style>
.fcadmin-tab-child-child-parent {
  width: 96%;
  box-sizing: border-box;
  margin-left: 4%;
  margin-top: 4px;
  cursor: pointer;
}
.fcadmin-tab-child-child-item {
  height: 30px;
  width: 100%;
  box-sizing: border-box;
  line-height: 30px;
  color: #000;
  transition: 0.2s linear color; 
}
.fcadmin-tab-child-child-item:hover{
  color:#2d8cf0;
}
.fcadmin-tab-child-child-title {
  color: #999;
  height: 30px;
  line-height: 30px;
}
</style>