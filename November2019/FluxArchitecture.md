- React is super popular JavaScript Library.
- JSX is the templating language that React uses.
- React components are reusuable.

```
    function App() {
    return <h1> App Component</h1>;
    }

    ReactDOM.render(<App />, document.getElementById("root"));
```

- Flux is an architecture that Facebook uses internal when working with React (Not a framework / Library).
- It is simply a new kind of architecture that complments React and the concept of Unidirectional Data Flow.
  - Actions - Helper methods that facilitate passing data to the Dispatcher.
  - Dispatcher - Receives actions and broadcasts payloads to registered callbacks.
  - Stores - Containers for application state & logic that have callbacks registered to the dispatcher.
  - Controller Views - React Components that grab the state from Stores and pass it down via props to child components.

```
 API (<->) Action -> Dispatcher -> Store -> View (-> Action)
```

## Flux vs. Redux
- Flux is a pattern and Redux is a library.
- Both Flux and Redux have actions. Actions can be compared to events (or what trigger events). In Flux, an action is a simple JavaScript object, and that’s the default case in Redux too, but when using Redux middleware, actions can also be functions and promises.
- With Flux it is a convention to have multiple stores per application; each store is a singleton object. In Redux, the convention is to have a single store per application, usually separated into data domains internally (you can create more than one Redux store if needed for more complex scenarios).
- Flux has a single dispatcher and all actions have to pass through that dispatcher. It’s a singleton object. A Flux application cannot have multiple dispatchers.
- Redux has no dispatcher entity.
- In Flux, the logic of what to do on the data based on the received action is written in the store itself. The store also has the flexibility of what parts of the data to expose publicly. The smartest player in a Flux app is the store.
- In Redux, the logic of what to do on the data based on the received actions is in the reducer function that gets called for every action that gets dispatched (through the store API). A store can’t be defined without a reducer function. A Redux reducer is a simple function that receives the previous state and one action, and it returns the new state based on that action. The smartest player in Redux is the reducer.


## Redux
- The state of the whole application is stored in an object tree with a single store.
- The state of all the pieces (components) of your application depends on one root object tree.
- The only way to change the state is to emit an action, an object describing what happened.
- Views cannot change the state DIRECTLY!
- In Redux, we dispatch actions. These actions tell a function (called reducer) to update the state.
- Redux docs also recommend not mutating the state. Each action instructs the reducer to replace the existing state with a new version.
- A reducer is a simple and special function. This function takes the current state and an action and returns a new state. It DOES NOT mutate the state.
- This function is also special for another reason. It’s pure! A pure function always returns the same output for a set of inputs (arguments).
- Actions are plain JavaScript objects. They usually have a payload and always have a type.
- Reducers are the pure functions we were talking about above. They know what to do with an action and its information (payload); They take in the current state and an action and return a new state.
- Redux = Flux + Functional Programming -> it updates the state, taking state + action and return new state.