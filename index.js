const {createStore} = require("redux");

//defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//state
const initialCounterState = {
  count: 0,
};

// action -> odject - 1. type, 2. payload
// Increment Counter

const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

// create a reducer for counter
const counterReducer = (state = initialCounterState, action) => {
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

    default:
      state;
      break;
  }
};

// 1 state
// 2. dispatch action
// 3. reducer
// 4. store -> getState() ,dispatch(), subscribe()


// create store

const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState())
})

// dispatch action

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
