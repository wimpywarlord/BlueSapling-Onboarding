import { applyMiddleware, createStore } from "redux";
import weatherReducer from "./weather/weatherReducer";
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./weather/weatherActions";

const sagaMiddleware = createSagaMiddleware()


const store = createStore(weatherReducer,
applyMiddleware(sagaMiddleware));
// const store = createStore(weatherReducer,applyMiddleware(thunk));

sagaMiddleware.run(rootSaga);

export default store;

