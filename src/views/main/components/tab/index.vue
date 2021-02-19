<template>
  <div class="fcadmin-tab" :style="{width:width+'px'}">
    <tabChild
      :size="size"
      :theme="theme"
      v-for="(item) in tabDataList"
      :key="item['id']"
      :tabObj="item" 
    ></tabChild>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
import tabChild from "./tabChild";
export default defineComponent({
  components: {
    tabChild,
  },
  props: {
    tabList: {
      type: Array,
      default: [],
    },
    theme:{
      type:String,
      default:"default"
    },
    width:{
      type:Number,
      default:200
    },
    size:{
      type:String,
      default:"default"
    }
  },
  setup(props, ctx) { 
    let handlerData = (arr) => {
      return arr.map((e, i) => {
        if (typeof e["id"] === "undefined") {
          e["id"] = i + 1;
        }
        if (e["child"]) {
          e["child"].map((el, ind) => {
            if (typeof el["id"] === "undefined") {
              el["id"] = ind + 1;
            }
          });
        }
        return e;
      }); 
    };

    let state = reactive({
      tabDataList: handlerData(props.tabList), 
      theme:props.theme,
    });
    return state;
  },
});
</script> 
<style> 
.fcadmin-tab {
  border-right: 1px solid #dcdee2;
  width: 100%;
  box-sizing: border-box;
  overflow-y:scroll; 
  /* height: 500px; */
  /* position: fixed;
  z-index: 9999;
  right: 100px; */
}
::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
}
-webkit-scrollbar-thumb {
  background-color: #000000;
}
</style>