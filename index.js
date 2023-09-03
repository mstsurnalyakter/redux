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




// 1 state
// 2. dispatch action
// 3. reducer
// 4. store
