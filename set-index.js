let rawArray = {
  objects: [
    {
      index: 1,
      type: "group",
      objects: [
        {
          type: "group",
          objects: [
            {
              type: "c-text",
              text: "Enter Text Here",
            },
            {
              type: "group",
              objects: [
                {
                  type: "c-text",
                  text: "Enter Text Here",
                },
                {
                  type: "c-text",
                  text: "Enter Text Here",
                },
              ],
            },
          ],
        },
        {
          type: "c-text",
          text: "Enter Text Here",
        },
      ],
      name: "Layer group",
    },
    {
      index: 0,
      type: "group",
      objects: [
        {
          type: "c-text",
          text: "Enter Text Here",
        },
        {
          type: "c-text",
          text: "Enter Text Here",
        },
      ],
      name: "Layer group",
    },
  ],
};

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

setIndex(rawArray.objects);
console.log("rawArray", rawArray);
const fs = require("fs");
fs.writeFileSync("abc.json", JSON.stringify(rawArray));
