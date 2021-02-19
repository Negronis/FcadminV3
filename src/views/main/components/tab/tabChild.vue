<template>
  <div :style="{height: blockHeight + 'px'}" :class="'fcadmin-tab-child ' + isClickTab"> 
    <div :class="sizeClass + ' ' + lightTheme + ' fcadmin-tab-child-bar'" @click="tabHandler(tabObjData['link'])">
      <div :class="'fcadmin-tab-child-content ' + sizeClass">{{tabObjData['title']}}</div>
      <div class="fcadmin-tab-child-rightArrow" :style="{transform:tabClick ? 'rotate(270deg) translate(-4px,2px)' : 'rotate(90deg) translateX(-5px)'}">&#62;</div>
    </div>
    <tablChildSmallTwo :theme="theme" v-for="(item) in tabObjData['child']" 
    :key="item['id']" :tabDepChildObj="item" :size="size">
    </tablChildSmallTwo>
  </div>
</template>
<script>
import { defineComponent, reactive, inject } from "vue";
import tablChildSmallTwo from "./tabChildSmall";
export default defineComponent({
  components: {
    tablChildSmallTwo,
  },
  props:{
    tabObj:{
      default:{},
      type:Object
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
    let setBlockHeight = (size)=>{
      let itemHeight;
      if(size === 'default'){
        itemHeight = 50;
      }
      if(size === 'large'){
        itemHeight = 80;
      }
      if(size === 'small'){
        itemHeight = 30;
      }
      console.log(props.tabObj);
      return props.tabObj['child'].length * itemHeight + itemHeight + 4
    }
    function tabHandler(link){ 
      state.tabClick = !state.tabClick;
      if(state.tabClick){
        state.isClickTab = "click-tab-"+props.size;
      }else{ 
        state.isClickTab = ""; 
      } 
      if(link){
        com.routelink(link);
      }
    }
    let setSize = (size)=>{
      if(size === 'default'){
        return 'fcadmin-tab-default'
      }
      if(size === 'large'){
        return 'fcadmin-tab-large'
      }
      if(size === 'small'){
        return 'fcadmin-tab-small'
      }
    }
    let state = reactive({
      tabHandler:tabHandler,
      tabObjData:props.tabObj,
      tabClick:false,
      isClickTab:"",
      lightTheme:props.theme === 'light' ? "fcadmin-light" : "",
      sizeClass: setSize(props.size),
      blockHeight:setBlockHeight(props.size),
    }) 
    return state;
  },
});
</script>  
<style>
.fcadmin-tab-default{
  font-size:18px;
  height:50px !important;
  line-height:50px;
}
.fcadmin-tab-large{
  font-size:20px;
  height:80px !important;
  line-height:80px;
}
.fcadmin-tab-small{
  font-size:15px;
  height:30px !important;
  line-height:30px;
}
.fcadmin-light{
  color:#fff !important;
}
.click-tab-default{
  height:52px !important; 
  box-sizing: border-box; 
}
.click-tab-large{
  height:82px !important; 
  box-sizing: border-box; 
}
.click-tab-small{
  height:32px !important; 
  box-sizing: border-box; 
}
.fcadmin-tab-child {
  cursor: pointer;
  width: 100%;
  line-height: 30px;
  text-indent: 10px;
  box-sizing: border-box; 
  transition: .2s linear height; 
  overflow: hidden;
}
.fcadmin-tab-child-bar {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  color:#515a6e;
  transition: .3s linear color;
  border-bottom:1px solid #dcdee2;
}
.fcadmin-tab-child-bar:hover {  
   color:#2d8cf0 !important;
}
.fcadmin-tab-child-content {
  width: 90%;
  overflow: hidden;
  height: 30px;
}
.fcadmin-tab-child-rightArrow {
  position: absolute;
  right: 10px;
  top: 0px;
  transition: .2s linear transform; 
}
</style>