const startTime = performance.now();
console.time("Task");

const firstArray = [];
const secondArray = [];

for (let i = 1; i <= 600000; i++) {
  if (i <= 300000) firstArray.push(1);
  secondArray.push(1);
}

console.log(
  `First Array -->length -->${firstArray.length} and the array data are :`,
  firstArray,
);
console.log(
  `Second Array -->length -->${secondArray.length} and the array data are :`,
  secondArray,
);

const endTime = performance.now();

console.timeEnd("Task");

// console.log(`this code took ${endTime - startTime} `);

console.time("map-1");

const firstUserList = firstArray.map((number) => ({
  userId: number,
}));

// console.log(firstUserList);

console.timeEnd("map-1");

console.time("map-2");

const secondUserList = secondArray.map((number) => ({
  userId: number,
}));

// console.log(secondUserList);

console.timeEnd("map-2");

console.time("Find");

// const usr = secondUserList.find((usr) => usr.userId === 500000);

const usr = secondUserList[500000];
console.timeEnd("Find");
