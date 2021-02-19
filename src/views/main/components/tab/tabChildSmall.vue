<template>
  <div :class="'fcadmin-tab-child-child-parent' ">
    <div :class="'fcadmin-tab-child-child-title ' +sizeClass" v-if="tabDepChildObj['textTitle']">{{tabDepChildObj['textTitle']}}</div>
    <div @click="childLinkFunc(tabDepChildObj['link'])"  v-if="!tabDepChildObj['textTitle']" :class="'fcadmin-tab-child-child-item '+ lightTheme + ' ' + sizeClass">{{tabDepChildObj['title']}}</div>
  </div>
</template>
<script>
import { defineComponent, inject, reactive } from "vue";
export default defineComponent({
  props:{
    tabDepChildObj:{
      type:Object,
      default:{} 
    },
    theme:{
      type:String,
      default:"default"
    },
    size:{
      type:String,
      default:"default"
    }
  },
  setup(props, ctx) {
    const com = inject("$Com");
    let childLinkFunc = function(link){
      if(link){
        com.routelink(link);
      }
    }
    let setSize = (size)=>{
      if(size === 'default'){
        return 'fcadmin-tab-child-default'
      }
      if(size === 'large'){
        return 'fcadmin-tab-child-large'
      }
      if(size === 'small'){
        return 'fcadmin-tab-child-small'
      }
    }
    let state = reactive({
      tabDepChildObj:props.tabDepChildObj,
      childLinkFunc:childLinkFunc,
      lightTheme:props.theme === 'light' ? "fcadmin-light" : "",
      sizeClass: setSize(props.size)
    }) 
    return state;
  },
});
</script>  
<style>
.fcadmin-tab-child-default{
  font-size:18px; 
  height:50px !important;
  line-height:50px;
}
.fcadmin-tab-child-large{
  font-size:20px;
  height:80px !important;
  line-height:80px;
}
.fcadmin-tab-child-small{
  font-size:15px;
  height:30px !important;
  line-height:30px;
}
.fcadmin-tab-child-child-parent {
  width: 96%;
  box-sizing: border-box;
  margin-left: 4%;
  margin-top: 4px;
  cursor: pointer;
}
.fcadmin-tab-child-child-item {
  width: 100%;
  box-sizing: border-box;
  color: #000;
  transition: 0.2s linear color; 
  /* line-height: 30px; */
  /* height: 30px; */
}
.fcadmin-tab-child-child-item:hover{
  color:#2d8cf0 !important;
}
.fcadmin-tab-child-child-title {
  color: #999;
  /* height: 30px; */
  /* line-height: 30px; */
}
</style>