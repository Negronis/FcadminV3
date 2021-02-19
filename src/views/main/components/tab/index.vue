<template>
  <div class="fcadmin-tab">
    <tabChild
      v-for="(item) in tabDataList"
      :key="item['id']"
      :tabObj="item"
      :blockHeight = "blockHeight"
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
      blockHeight:props.tabList.length * 30 + 30 + 4
    });
    return state;
  },
});
</script> 
<style>
.fcadmin-tab {
  border-right: 1px solid #dcdee2;
  width: 200px;
  box-sizing: border-box;
  /* height: 500px; */
  /* position: fixed;
  z-index: 9999;
  right: 100px; */
}
</style>