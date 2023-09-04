// require
const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// constants


const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";


// state

const initialTodosState = {
  todos:[],
  isLoadinng:false,
  error:null
}


// action

  const getTodosRequest = () =>{
    return{
      type:GET_TODOS_REQUEST
    }
  }

  const getTodosSuccess = (todos) =>{
    return{
      type:GET_TODOS_SUCCESS,
      payload:todos
    }
  }

  const getTodosFailed = (error) =>{
    return{
      type:GET_TODOS_FAILED,
      payload:error
    }
  }



// reducer

const todosReducer = (state = initialTodosState, action) =>{
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return{
        ...state,
        isLoadinng:true
      }
      break;
    case GET_TODOS_SUCCESS:
      return{
        ...state,
        todos:action.payload,
        isLoadinng:false
      }
      break;
    case GET_TODOS_FAILED:
      return{
        ...state,
        isLoadinng:false,
        error:action.payload
      }
      break;

    default:
      return state;
      break;
  }
}

// async action creator

const fetchData =  () =>{
    return (dispatch)=>{
      dispatch(getTodosRequest());
      axios.get(API_URL)
      .then(res =>{
        const todos  = res.data;
         const title = todos.map(todo => todo.title);
         dispatch(getTodosSuccess(title));
      })
      .catch(error =>{
         const errorMessage =(error.message);
         dispatch(getTodosFailed(errorMessage));
      })
    }
}


// store

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(fetchData())
