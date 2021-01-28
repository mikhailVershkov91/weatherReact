// import { weatherAPI } from "../plugins/axios";

// const SET_WEATHER = "SET_WEATHER";
// const UPDATE_INPUT = "UPDATE_INPUT";
// const ClEAR_INPUT = "ClEAR_INPUT";
const SET_VALUE = "SET_VALUE";

const initialState = {
	// weatherData: [],
	textFieldValue: "hey",
};

const autocompleteReducer = (state = initialState, action) => {
	switch (action.type) {
		// case ClEAR_INPUT: {
		// 	return {
		// 		...state,
		// 		textFieldValue: "",
		// 	};
		// }
		// case SET_WEATHER: {
		// 	return {
		// 		...state,
		// 		weatherData: action.weatherData,
		// 	};
		// }
		// case UPDATE_INPUT: {
		// 	return {
		// 		...state,
		// 		textFieldValue: action.newText,
		//   };
		// }
		case SET_VALUE: {
			return {
				...state,
				textFieldValue: action.newValue,
			};
		}
		default:
			return state;
	}
};

// export const updateInputActionCreator = (text) => ({
// 	type: UPDATE_INPUT,
// 	newText: text,
// });
// export const clearInputActionCreator = () => ({
// 	type: ClEAR_INPUT,
// });
// export const setWeatherActionCreator = (data) => ({
// 	type: SET_WEATHER,
// 	weatherData: data,
// });

export const setValueActionCreator = (value) => ({
	type: SET_VALUE,
	newValue: value,
});

export const setValue = (value) => {
	return (dispatch) => {
		dispatch(setValueActionCreator(value));
	};
};

// export const updateInput = (text) => {
// 	return (dispatch) => {
// 		dispatch(updateInputActionCreator(text));
// 	};
// };

// export const getWeather = (city) => {
// 	return async (dispatch) => {
// 		const response = await weatherAPI.getWeather(city);
// 		dispatch(setWeatherActionCreator(response.weather[0]));
// 		console.log(response.weather[0]);
// 		dispatch(clearInputActionCreator());
// 	};
// };

export default autocompleteReducer;
