import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weatherReducer";
// import autocompleteReducer from "./autocompleteReducer";

let rootReducer = combineReducers({
	weather: weatherReducer,
	// autocomplete: autocompleteReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;

export default store;
