<template>
  <div>
    <div>
      <Tab></Tab>
    </div> 
    <router-view></router-view>
  </div>
</template>
<script>
import { reactive, defineComponent, inject } from "vue";
import Tab from "./components/tab/tab.js";
export default defineComponent({
  components: {
    Tab,
  },
  setup(props, ctx) { 
  },
});
</script>
<style>
</style>