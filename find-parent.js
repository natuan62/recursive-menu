function getPath(model, id) {
  var path,
    item = model;

  if (!model || typeof model !== "object") return;

  if (model.id === id) return [item];

  (model.children || []).some((child) => (path = getPath(child, id)));
  return path && [item, ...path];
}
const object = {
  id: "1",
  name: "a",
  children: [
    {
      id: "2",
      name: "b",
      children: [{ id: "3", name: "c", children: [{ id: "7", name: "x" }] }],
    },
    { id: "4", name: "d" },
  ],
};

console.log(getPath(object, "7")); // [{ id: 1 }, { id: 2 }, { id: 3 }]
