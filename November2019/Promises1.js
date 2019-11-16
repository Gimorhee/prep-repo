const hungry = false;
const thirsty = true;

// howYouFeel function using Callbacks
function howYouFeel1(callback, errorCallback) {
  if (hungry) {
    errorCallback({
      state: "Hungry",
      feeling: ":("
    });
  } else if (thirsty) {
    errorCallback({
      state: "Thirsty",
      feeling: ":'("
    });
  } else {
    callback({
      state: "Good",
      feeling: ":)"
    });
  }
}

howYouFeel1(
  state => {
    console.log("Feeling : ", state.state, state.feeling);
  },
  error => {
    console.log("Feeling : ", error.state, error.feeling);
  }
);

// howYouFeel function using Promises
function howYouFeel2() {
  return new Promise((resolve, reject) => {
    if (hungry) {
      reject({
        state: "Hungry",
        feeling: ":("
      });
    } else if (thirsty) {
      reject({
        state: "Thirsty",
        feeling: ":'("
      });
    } else {
      resolve({
        state: "Good",
        feeling: ":)"
      });
    }
  });
}


// As we start nesting callbacks we start to get in a huge trouble where we code just keeps getting indented and indented even furthur
// With promises, we can just add another then() - no callback hell!
howYouFeel2()
  .then(state => {
    console.log("Feeling : ", state.state, state.feeling);
  })
  .catch(error => {
    console.log("Feeling : ", error.state, error.feeling);
  });


// Promise.all & Promise.race
const sayOne = new Promise((resolve, reject) => {
    resolve("One!");
});

const sayTwo = new Promise((resolve, reject) => {
    resolve("Two!");
});

const sayThree = new Promise((resolve, reject) => {
    resolve("Three!");
});

// Returns an array of all resolve messages
Promise.all([sayOne, sayTwo, sayThree]).then((messages) => {
    console.log(messages);
});

// Returns first resolve message
Promise.race([sayOne, sayTwo, sayThree]).then((messages) => {
    console.log(messages);
})