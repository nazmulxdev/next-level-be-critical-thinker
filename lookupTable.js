// generate lookup table

// input

const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structure in js", author: "James" },
  { id: "p-103", title: "Understanding reduce", author: "Code_With_Harry" },
  { id: "p-104", title: "Css Grid Tricks", author: "Beth" },
  { id: "p-105", title: "Core features of nextjs", author: "Free_code_camp" },
];

const lookupTable = postsArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {});

// console.log(lookupTable["p-103"]);

for (let post in lookupTable) {
  console.log(lookupTable[post]);
}

//output

/**
 * {
 * "p-101": {"id":"p-101","title":"Intro to SQL","author":"Alex"}
 * }
 * */
