// const obj = {
//   nextLevel: { courseId: "level 2" },
//   "programming Hero": { courseId: "level 1" },
// };

// console.log(obj);
const course1 = { name: "programming hero" };
const course2 = { name: "next level web development" };

const map = new Map();

map.set(course1, { courseId: "level-1" });
map.set(course2, { courseId: "level-2" });

// map.forEach((value, key, map) => {
//   key.name = "sohoz shorl simple " + key.name;
// });

// console.log([...map.values()]);

for (let key of map.keys()) {
  //   console.log(key);

  key.name = "Sohoz Shorol Simple " + key.name;
}

for (let value of map.values()) {
  //   console.log(value);
}

for (let entry of map.entries()) {
  //   console.log(entry);
}

// console.log(map);

const courses = [
  [course1, "level 1"],
  [course2, "level 2"],
];

const coursesMap = new Map(courses);

console.log(coursesMap);
