<template>
  <div class="tree">
    <ul class="tree-list">
      <node-tree :node="treeData" :handle-click="handleClick"></node-tree>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import NodeTree from "./NodeTree.vue";

export default {
  name: "Tree",
  components: {
    NodeTree,
  },
  props: {
    treeData: Object,
  },
  setup(props, { emit }) {
    console.log("Tree props", props.treeData);
    const handleClick = (node, type) => {
      emit("node-click", node, type);
    };

    // const list = ref(null);

    // onMounted(() => {
    //   console.log(list.value);
    // });

    return {
      handleClick,
    };
  },
};
</script>

<style>
.tree-list {
  width: 650px;
}
</style>
