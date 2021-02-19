<template>
  <div>
    页头
    <div>
      <Tab :size="'large'" :style="Height +'px'" :width="300" :tabList="tabList"></Tab>
      asdjkhasdakjsdh{{Height}}
    </div>
    <router-view></router-view>
    页脚
  </div>
</template>
<script>
import { reactive, defineComponent, inject } from "vue";
import Tab from "./components/tab/index.vue";
export default defineComponent({
  components: {
    Tab,
  }, 
  
  setup(props, ctx) {
    const Store = inject("$S");
    let list = [
         {
         title: "tab1", 
         child: [
            {
               textTitle: "i'm a title",  
            },
            {
               title: "child_one", 
               link:"/asdasd"
            },
            {
               title: "child_one", 
               link:"/asdasd"
            },
            {
               title: "child_one", 
               link:"/asdasd"
            },
            {
               title: "child_one", 
               link:"/asdasd"
            },
         ],
         },
         {
            title: "tab2", 
            child: [
               {
                  title: "child_one", 
                  link:"/func"
               },
               {
                  textTitle: "i'm a title"
               },
               {
                  title: "child_one", 
                  link:"/func"
               },
               {
                  title: "child_one", 
                  link:"/func"
               },
            ],
         },
    ];
    let state = reactive({
      tabList: list,
      Height:Store.getters.getHeight
    });
    return state;
  },
});
</script> 