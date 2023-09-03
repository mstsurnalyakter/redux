// state - count: 0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

const ADD_USERS = "ADD_USERS"

const initialState = {
  users:["mst-surnaly-akter"],
  count: 1,
};


const addUser = (user) =>{
    return{
        type:ADD_USERS,
        payload:user
    }
}

 const usersReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_USERS:
            return{
                users:[...state.users, action.payload],
                count:state.count + 1
            }
            break;

        default:
            state;
            break;
    }
 }

 const store = createStore(usersReducer);

 store.subscribe(()=>{
    console.log(store.getState())
 });


 store.dispatch(addUser("Tisha"))
 store.dispatch(addUser("Salma"))