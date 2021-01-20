import { weatherAPI } from "../plugins/axios";

// const SET_WEATHER = "SET_WEATHER";

//
const GET_CITY = "GET_CITY";
const UPDATE_INPUT = "UPDATE_INPUT";

const initialState = {
	// weatherData: [],
	inputText: "",
};

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		// case SET_WEATHER: {
		// 	return { ...state };
		// }
		case GET_CITY: {
			let stateCopy = { ...state };
			console.log(stateCopy.inputText);
			stateCopy.inputText = "";
			return stateCopy;
		}
		case UPDATE_INPUT: {
			let stateCopy = { ...state };
			stateCopy.inputText = action.newText;
			return stateCopy;
		}
		default:
			return state;
	}
};

//
export const getCityActionCreator = () => ({ type: GET_CITY });
export const updateInputActionCreator = (text) => ({
	type: UPDATE_INPUT,
	newText: text,
});

export const updateInput = (text) => {
	return (dispatch) => {
		dispatch(updateInputActionCreator(text));
	};
};

export const startSearch = () => {
	return (dispatch) => {
		dispatch(getCityActionCreator());
	};
};

// export const setWeatherAC = () => ({
// 	type: "SET_WEATHER",
// });

// export const getWeatherTC = (name) => {
// 	return async (dispatch) => {
// 		const response = await weatherAPI.getWeather(name);
// 		dispatch(setWeatherAC(response.weather));
// 	};
// };

export default weatherReducer;
