<template>
  <teleport
    v-if="show"
    to="body"
  >
    <div class="loading">
      loding...
    </div>
  </teleport>
</template>
<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup(props, ctx) {
    let showModel = () => {
      state.show = true;
    };
    let hideModel = () => {
      state.show = false;
      props.parentNodeDom.parentElement.removeChild(props.parentNodeDom);
    };
    let state = reactive({
      show: false,
      showModel,
      hideModel,
    });
    return state;
  },
});
</script> 