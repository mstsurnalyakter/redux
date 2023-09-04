// product constants

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// Producets State
const initialProductState = {
  products: ["suger", "salt"],
  numberOfProducts: 2,
};

// Products Action

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    paylaod: product,
  };
};

// product Reducer

const producetReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
      break;
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.paylaod],
        numberOfProducts: state.numberOfProducts + 1,
      };
      break;

    default:
      return state;
      break;
  }
};

// store

const store = createStore(producetReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("water"));
store.dispatch(addProduct("pen"));
