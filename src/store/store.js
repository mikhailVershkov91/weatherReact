import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weatherReducer";
import autocompleteReducer from "./autocompleteReducer";

let reducers = combineReducers({
	weather: weatherReducer,
	autocomplete: autocompleteReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
