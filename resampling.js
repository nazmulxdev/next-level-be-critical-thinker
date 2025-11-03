// Binning (Resampling) Time Series Date

// Scenario: You have a long list of user click events.
// You need to "Bin" these events info 30-minute interval and count them to see engagement over time.

// ?Input
const events = [
  { timeStamp: "2025-11-03T10:00:01.123Z", type: "click" },
  { timeStamp: "2025-11-03T09:00:02.450Z", type: "click" },
  { timeStamp: "2025-11-03T11:00:04.900Z", type: "click" },
  { timeStamp: "2025-11-03T10:00:07.321Z", type: "scroll" },
  { timeStamp: "2025-11-03T08:00:12.321Z", type: "click" },
  { timeStamp: "2025-11-03T10:00:27.321Z", type: "scroll" },
  { timeStamp: "2025-11-03T17:10:01.123Z", type: "click" },
  { timeStamp: "2025-11-03T10:10:02.450Z", type: "click" },
  { timeStamp: "2025-11-03T10:11:04.900Z", type: "click" },
  { timeStamp: "2025-11-03T13:09:07.321Z", type: "scroll" },
  { timeStamp: "2025-11-03T10:08:12.321Z", type: "click" },
  { timeStamp: "2025-11-03T13:08:27.321Z", type: "scroll" },
];

const interval = 30 * 60 * 1000; //30 minute interval in ms

const getBinningTimeStamp = (timeStamp) => {
  const date = new Date(timeStamp);
  const flooredDate = Math.floor(date.getTime() / interval) * interval;
  return new Date(flooredDate).toISOString();
};

// using array.reduce
const binnedData = events.reduce((binned, eventCall) => {
  const bin = getBinningTimeStamp(eventCall.timeStamp);
  if (!binned[bin]) {
    binned[bin] = { total: 0 };
  }
  binned[bin].total += 1;

  return binned;
}, {});

// using Map

const newEventMap = new Map();

for (let eve of events) {
  const binTimeStamp = getBinningTimeStamp(eve.timeStamp);

  if (!newEventMap.has(binTimeStamp)) {
    newEventMap.set(binTimeStamp, { total: 0 });
  }

  newEventMap.get(binTimeStamp).total += 1;
}

console.log(newEventMap);

// console.log(binnedData);
