

// product constants

const { createStore, combineReducers } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// card constants
const GET_CARD_ITEMS = "GET_CARD_ITEMS";
const ADD_CARD_ITEM = "ADD_CARD_ITEM";

// Producets State
const initialProductState = {
    products:["suger", "salt"],
    numberOfProducts:2
}


// Card State

const initialCardItemState = {
    card:["sugers"],
    numberOfItem: 1

}

// Products Action

const getProducts = () =>{
    return{
        type:GET_PRODUCTS
    }
}

const addProduct = (product) =>{
    return{
        type:ADD_PRODUCT,
        paylaod:product
    }
}

// Card Action

const getCardItem = () =>{
    return{
        type:GET_CARD_ITEMS
    }
}


const addCardItem = (card) =>{
    return{
        type:ADD_CARD_ITEM,
        paylaod:card
    }
}


// product Reducer

const producetReducer = (state=initialProductState, action) =>{
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
            }
            break;
        case ADD_PRODUCT:
            return{
                products:[...state.products, action.paylaod],
                numberOfProducts:state.numberOfProducts + 1
            }
            break;

        default:
           return state;
            break;
    }
}

// Card Reducer

const cardReducer = (state=initialCardItemState, action) =>{
    switch (action.type) {
        case GET_CARD_ITEMS:
            return{
                ...state,
            }
            break;
        case ADD_CARD_ITEM:
            return{
                 card:[...state.card, action.paylaod],
                 numberOfItem:state.numberOfItem + 1
            }
            break;

        default:
           return state;
            break;
    }
}


const rootReducer = combineReducers({
    producetReducer,
    cardReducer
})

// store

const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(getProducts());
store.dispatch(addProduct("water"));


store.dispatch(getCardItem());
store.dispatch(addCardItem("water"));


// cardReducer
