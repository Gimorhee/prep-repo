const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/posts";
const url1 = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData(url) {
  const data = await axios(url);
  console.log(data);
}
// fetchData(url);

// --------------------------------------------------------------------------------------------------- //

console.log("test1");

const promise = axios.get(url);
promise
  .then(res => res.data)
  .then(data => data[0])
  .then(data => data.title)
  .then(title => console.log(title));

console.log("test2");

// --------------------------------------------------------------------------------------------------- //

// Macro tasks (ex. setTimeout() or setInterval()) will be executed on the next event loop
// Micro tasks (ex. fulfilled promise) will be called back before the start of the next event loop
console.log("Synchronous 1");

setTimeout(() => {
  console.log("SetTimeout 2");
}, 0);

Promise.resolve().then(() => console.log("Promise 3"));

console.log("Synchronous 4");
// Synchronous 1
// Synchronous 4
// Promise 3
// SetTimeout 2

// --------------------------------------------------------------------------------------------------- //

// Two functions below with slight diffent syntax returns same value of Promise { '🍍' }
const getFruit1 = async name => {
  const fruits = {
    pineapple: "🍍",
    kiwi: "🥝",
    strawberry: "🍓"
  };

  return fruits[name];
};
console.log(getFruit1("pineapple"));
// Returns Promise { '🍍' }

const getFruit2 = name => {
  const fruits = {
    pineapple: "🍍",
    kiwi: "🥝",
    strawberry: "🍓"
  };
  return new Promise((resolve, reject) => {
    if (Object.keys(fruits).includes(name)) {
      resolve(fruits[name]);
    } else {
      reject("No Fruits Found!");
    }
  });
  // return Promise.resolve(fruits[name])
};
console.log(getFruit2("pineapple"));
// Returns Promise { '🍍' }

// Below two functions both prints ['🍍', '🍓'] but the first function with async/await has more cleaner codes
const makeSmoothie1 = async () => {
  try {
    const a = await getFruit2("pineapple");
    const b = await getFruit2("strawberry");

    console.log([a, b]);
    return [a, b];
  } catch (err) {
    console.log(err);
  }
};

const makeSmoothie2 = () => {
  let fruit;
  return getFruit2("pineapple")
    .then(pineapple => {
      fruit = pineapple;

      return getFruit2("strawberry");
    })
    .then(strawberry => {
        console.log([fruit, strawberry]);
        return [fruit, strawberry];
    });
};
