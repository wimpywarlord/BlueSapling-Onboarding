import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import {createStore} from "redux";

// STORE -> GLOBAL STATE
// let store = createStore(reducer);

// ACTION INCREMENT
const increment = () => {
  return {
    type: "INCREMENT",
  }
}
const decrement = () => {
  return {
    type: "DECREMENT",
  }
}


const initialState = {
  value : 1,
}

// REDUCER
const counter = (state, action) => {
  console.log(state.value);
  console.log(action.type)
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value : state.value + 1
      };
    case "DECREMENT":
      return {
        ...state,
        value : state.value - 1 
      };
    default:
      return state;
  }
}

let store = createStore(counter, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Display it in the console
store.subscribe(() => {console.log(store.getState())})

// DISPATCH
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
