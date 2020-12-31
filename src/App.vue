<template>
  <p>App</p>
  <div v-click-outside="clickOutside()">
    <p>todo</p>
  </div>
  <input type="text" placeholder="Rename" v-model="rename" />
  <Tree :tree-data="tree" @node-click="logClick"></Tree>
</template>

<script>
import { onUpdated, ref, shallowRef } from "vue";
import Tree from "./components/Tree.vue";
import data from "../raw.json";
import clickOutside from "./click-outside";
export default {
  name: "App",
  components: {
    Tree,
  },
  directives: {
    "click-outside": clickOutside,
  },
  setup() {
    const raw = data;
    const rename = ref("Anh Tuan");

    const editable = ref([]);
    const incre = ref(0);

    let index = 0;
    const setIndex = (arr) => {
      arr.id = index;
      arr.forEach((element) => {
        index++;
        element.id = index;
        if (element.objects) {
          setIndex(element.objects);
        }
      });
    };
    console.log("raw", raw);

    const tree = ref({
      id: 0,
      text: "root",
      objects: raw,
    });
    console.log("tree.value", tree.value);
    setIndex(tree.value.objects);


    const updateTree = (tree1, id, arrayArg) => {
      var result = false;
      var i = 0;
      for (i = 0; i < tree1.length; i++) {
        if (tree1[i].id == id) {
          console.log("match " + tree1[i].id);
          tree1[i] = { ...arrayArg, ...tree1[i] };
          break;
        } else {
          if (tree1[i].objects) {
            result = updateTree(tree1[i].objects, id, arrayArg);
            if (result) {
              break;
            }
          }
        }
      }
      if (i == tree1.length) {
        result = false;
      } else {
        result = true;
      }
      return result;
    };

    const renameNode = (node) => {
      console.log("rename");
      updateTree(tree.value.objects, node.id, {
        name: rename.value,
        text: rename.value,
      });
    };

    const findParentObject = (model, id) => {
      var path,
        item = model;

      if (!model || typeof model !== "object") return;

      if (model.id === id) return [item];

      (model.objects || []).some(
        (child) => (path = findParentObject(child, id))
      );
      return path && [item, ...path];
    };

    const selectNode = (node) => {
      if (node.id === 0) return;
      console.log("select");

      const res = findParentObject(tree.value, node.id);

      editable.value.forEach((v) => (v.isActive = false));
      editable.value = [];
      node.isActive = true;
      // console.log("tree.value", tree.value);

      console.log("res", res);
      res[1].isActive = true;

      editable.value.push(node);
      editable.value.push(res[1]);
      // console.log("editable.value", editable.value);};
    };
    const deleteNode = (node) => {
      console.log("delete");
      updateTree(tree.value.objects, node.id, {
        name: rename.value,
        text: rename.value,
      });
    };

    const logClick = (node, type) => {
      console.log("Clicked: ", node.id, node);

      switch (type) {
        case "select":
          selectNode(node);
          break;

        case "rename":
          renameNode(node);
          break;

        case "delete":
          deleteNode(node);
          break;

        default:
          break;
      }
    };

    // var data = [{ id: 121, items: [] }];
    const clickOutside = () => {
      console.log("clickOutside()");
    };

    return {
      tree,
      logClick,
      rename,
      clickOutside,
    };
  },
};
</script>
