// state - count: 0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUSE = "INCREMENT_BY_VALUSE";

const initialState = {
  users:["mst-surnaly-akter"],
  count: 0,
};

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounter = () => {
  return {
    type: RESET,
  };
};

const incrementCounterByValue = (value) =>{
    return{
        type:INCREMENT_BY_VALUSE,
        payload:value
    }
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
      break;

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      break;

    case RESET:
      return {
        ...state,
        count: 0,
      };
      break;
    case INCREMENT_BY_VALUSE:
      return {
        ...state,
        count: state.count + action.payload,
      };
      break;

    default:
      state;
      break;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());

store.dispatch(decrementCounter());

store.dispatch(resetCounter());

store.dispatch(incrementCounter());
store.dispatch(incrementCounterByValue(5));
