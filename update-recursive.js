var tree = [
  {
    index: 1,
    type: "group",
    isLocked: true,
    isActive: false,
    isVisible: true,
    id: 0,
    objects: [
      {
        id: 1,
        type: "group",
        objects: [
          {
            id: 2,
            type: "c-text",
            text: "Enter Text Here",
            originalText: "Enter Text Here",
            originalSpacing: 0,
            styles: {},
          },
          {
            id: 3,
            type: "group",
            objects: [
              {
                id: 4,
                type: "c-text",
                text: "Enter Text Here",
                originalText: "Enter Text Here",
                originalSpacing: 0,
                styles: {},
              },
              {
                id: 5,
                type: "c-text",
                text: "Enter Text Here",
                originalText: "Enter Text Here",
                originalSpacing: 0,
                styles: {},
              },
            ],
          },
        ],
      },
      {
        id: 6,
        type: "c-text",
        text: "Enter Text Here",
        originalText: "Enter Text Here",
        originalSpacing: 0,
        styles: {},
      },
    ],
    name: "Layer group",
  },
  {
    index: 0,
    id: 7,
    type: "group",
    isLocked: true,
    isActive: false,
    isVisible: true,
    objects: [
      {
        id: 8,
        type: "c-text",
        text: "Enter Text Here",
        originalText: "Enter Text Here",
        originalSpacing: 0,
        styles: {},
      },
      {
        id: 9,
        type: "c-text",
        text: "Enter Text Here",
        originalText: "Enter Text Here",
        originalSpacing: 0,
        styles: {},
      },
    ],
    name: "Layer group",
  },
];

let res = [
  {
    id: 0,
    objects: [
      { id: 48, objects: [{ 0: { a: 1, b: 2 }, id: 67, objects: [] }] },
      { id: 126, objects: [] },
    ],
  },
];

function updateTree(tree1, id, arrayArg) {
  console.log("tree1", tree1);
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
}
var data = [{ a: 1, b: 2 }];
var temp = tree; // do a full array copy to preserve original variable, I'm manipulating the main one. Laziness.
updateTree(temp, 9, data);

console.log(JSON.stringify(temp));
