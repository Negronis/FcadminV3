<template>
  <div>
    页头
    <div>
      <Tab :tabList="tabList"></Tab>
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
    let list = [
      {
        title: "tab1", 
        child: [
          {
            title: "child_one",
            textTitle: "I'm a title ",
            link:"/asdasd"
          },
        ],
      },
      {
        title: "tab1",
        link: "/",
        child: [
          {
            title: "child_one",
            textTitle: "I'm a title ",
            link:"/func"
          },
        ],
      },
    ];
    let state = reactive({
      tabList: list,
    });
    return state;
  },
});
</script> 