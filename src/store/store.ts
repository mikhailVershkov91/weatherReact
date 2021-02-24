import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weatherReducer";
import citiesReducer from "./citiesReducer";

let rootReducer = combineReducers({
	weather: weatherReducer,
	cities: citiesReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;

export default store;
