<template>
  <li class="node-tree" :class="node.isActive ? 'active' : ''">
    <span class="label" @click="handleClick(node, 'select')"
      >id: <b>{{node.id}}</b>, index:  {{node.index}}, *Name : <b>{{ node.name }}</b> *Text : <b>{{ node.text }}</b></span
    >
    <button @click="handleClick(node, 'delete')">delete</button>
    <button @click="handleClick(node, 'rename')">rename</button>
    <ul v-if="node.objects && node.objects.length">
      <NodeTree
        v-for="(child, index) in node.objects"
        :key="index"
        :node="child"
        :handle-click="handleClick"
      >
      </NodeTree>
    </ul>
  </li>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "NodeTree",
  props: {
    node: Object,
    handleClick: Function,
  },
  setup(props) {
    // console.log("NodeTree props", props.node);

    return {};
  },
};
</script>

<style scoped>
.active {
  background-color: green;
}
</style>
