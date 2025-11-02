const arrayOfName = [
  "namzmul",
  "Himel",
  "Ayesha",
  "Shimla",
  "Shafin",
  "Robin",
  "Shimla",
];

const nazmul = { userName: "Nazmul" };
const azmul = { userName: "Azmul" };
const kajmul = { userName: "Kajmul" };

const fruitsSet = new Set();

fruitsSet.add(nazmul);
fruitsSet.add(azmul);
fruitsSet.add(nazmul);
fruitsSet.add(kajmul);

const newSet = new Set(arrayOfName);

const newSetArray = [...newSet];

const secondNewArray = Array.from(newSet);

console.log(fruitsSet);
console.log(fruitsSet.size);

console.log(newSet);
console.log(newSet.size);

console.log(newSetArray);

console.log(secondNewArray);

// brut force

const arrayOfData = ["a", "b", "c", "a", "d", "d", "e", "f", "g"];

function removeArray(array) {
  const newArray = [];
  array.forEach((data) => {
    if (!newArray.includes(data)) newArray.push(data);
  });

  return newArray;
}

console.log(removeArray(arrayOfData));

// using det method

function removeDuplicate(array) {
  return Array.from(new Set(array));
}

console.log(removeDuplicate(arrayOfData));
