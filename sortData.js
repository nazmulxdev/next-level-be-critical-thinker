// sort

const number = [40, 20, 13, 123, 45, 664, 43, 43, 55, 32, 13];
const fruits = ["Banana", "orange", "Mango", "apple", "Grape"].sort((a, b) =>
  a.localeCompare(b),
);

const sottedNumber = number.sort((a, b) => b - a);
// console.log(sottedNumber);

// console.log(fruits);

// Nested array flat

const nestedArray = [1, 2, 3, 5, [7, 8, [190, 2223]]];
const flatArr = nestedArray.flat(Infinity);
// console.log(flatArr);

const tagsFromPosts = [
  ["javaScript", "react", "next.js", "typeScript"],
  ["node", "express", "Django", "css"],
  ["css", "html", "firebase", "react"],
];

const filterTags = [
  ...new Set(tagsFromPosts.flat(Infinity).sort((a, b) => a.localeCompare(b))),
];

// console.log(filterTags);

// some

const currentUserRole = ["user", "editor", "manger"];
const featureAccessRole = ["admin", "manger"];
const canAccess = currentUserRole.some((role) =>
  featureAccessRole.includes(role),
);

// console.log(canAccess);

// array.from()

const arr = Array.from({ length: 10 }, (_, i) => i);

const newFromArray = Array.from(flatArr, (value, index) => value * value);
// console.log(arr);

// console.log(newFromArray);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (value, index) => start + index * step,
  );

console.log(range(1, 15, 5));
