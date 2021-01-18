import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weatherReducer";

let reducers = combineReducers({
	weather: weatherReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
