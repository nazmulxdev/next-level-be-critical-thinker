// Grouping and aggregating Data

// scenario: Count every scenario and group by response

// input

/**
 * TODO --> initiate empty object
 * TODO --> check if the response already exist or not
 * TODO --> If exist then increment the count
 * TODO --> If not the initialize it with 1
 *
 */

const surveyResponse = ["A", "B", "C", "D", "A", "D", "E", "N", "F", "C"];

// using array reduce
const countPerformance = performance.now();
const count = surveyResponse.reduce((table, response) => {
  console.log(table, " : ", response);
  //   table[response]
  //     ? (table[response] = table[response] + 1)
  //     : (table[response] = 1);
  table[response] = (table[response] || 0) + 1;

  return table;
}, {});
const endPerformance = performance.now();

console.log(
  count,
  `Total Time to count in reducer is ${endPerformance - countPerformance}`,
);

// using map

const mapPerformance = performance.now();
const newCount = new Map();
for (let response of surveyResponse) {
  newCount.set(response, (newCount.get(response) || 0) + 1);
}
const mapEndPerformance = performance.now();

console.log(
  newCount,
  `Total time need in the map functionality is ${
    mapEndPerformance - mapPerformance
  }`,
);

// OUTPUT
//{A:2,B:5....}
