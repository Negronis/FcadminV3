<template>
  <div :style="{height: blockHeight + 'px'}" :class="'fcadmin-tab-child ' + isClickTab"> 
    <div class="fcadmin-tab-child-bar" @click="tabHandler(tabObjData['link'])">
      <div class="fcadmin-tab-child-content">{{tabObjData['title']}}</div>
      <div class="fcadmin-tab-child-rightArrow" :style="{transform:tabClick ? 'rotate(270deg) translate(-4px,2px)' : 'rotate(90deg) translateX(-5px)'}">&#62;</div>
    </div>
    <tablChildSmallTwo v-for="(item) in tabObjData['child']" 
    :key="item['id']" :tabDepChildObj="item">
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
    blockHeight:{
      type:Number,
      default:"auto"
    }
  },
  setup(props, ctx) {
    const com = inject("$Com");
    function tabHandler(link){
      state.tabClick = !state.tabClick;
      if(state.tabClick){
        state.isClickTab = "click-tab";
      }else{ 
        state.isClickTab = ""; 
      } 
      if(link){
        com.routelink(link);
      }
    }
    let state = reactive({
      tabHandler:tabHandler,
      tabObjData:props.tabObj,
      tabClick:false,
      isClickTab:""
    }) 
    return state;
  },
});
</script>  
<style>
.click-tab{
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
   color:#2d8cf0;
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