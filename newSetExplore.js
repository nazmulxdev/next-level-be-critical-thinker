function generateSimpleData(Size) {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Strawberry",
    "Grape",
    "Pineapple",
    "Watermelon",
    "Kiwi",
    "Peach",
  ];

  const generatedData = [];

  for (let i = 0; i < Size; i++) {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    generatedData.push(fruits[randomIndex]);
  }

  return generatedData;
}

const data = generateSimpleData(5000000);

// console.log(`Data length is ${data.length} and the data are : `, data);

// Brute force
const performanceStart = performance.now();

function removeDuplicateData(arrayData) {
  const newArray = [];
  for (let i = 0; i < arrayData.length; i++) {
    if (!newArray.includes(arrayData[i])) newArray.push(arrayData[i]);
  }
  return newArray;
}

const finalData = removeDuplicateData(data);
console.log(finalData);

const performanceEnd = performance.now();

console.log(`Total time count ${performanceEnd - performanceStart}`);

// use of set

const startSetPerformance = performance.now();

function removeDuplicateUsingSet(data) {
  return [...new Set(data)];
}

const dataUsingSet = removeDuplicateUsingSet(data);

console.log(dataUsingSet);

const endSetPerformance = performance.now();

console.log(
  `Total time count using set is ${endSetPerformance - startSetPerformance}`,
);
