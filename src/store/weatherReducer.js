import { weatherAPI } from "../plugins/axios";

const SET_WEATHER = "SET_WEATHER";
const TOGGLE_SWITCH = "TOGGLE_SWITCH";

const initialState = {
	weatherData: [],
	// toggleSwitch: false,
};

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_WEATHER: {
			return {
				...state,
				weatherData: action.weatherData,
			};
		}
		// case TOGGLE_SWITCH: {
		// 	return {
		// 		...state,
		// 		toggleSwitch: action.toggleSwitch,
		// 	};
		// }
		default:
			return state;
	}
};

export const setWeatherActionCreator = (data) => ({
	type: SET_WEATHER,
	weatherData: data,
});

// export const toggleIsFetching = (toggleSwitch) => ({
// 	type: TOGGLE_SWITCH,
// 	toggleSwitch,
// });

export const getWeather = (city) => {
	return async (dispatch) => {
		// dispatch(toggleIsFetching(true));
		const response = await weatherAPI.getWeather(city);
		dispatch(setWeatherActionCreator(response));
		// dispatch(toggleIsFetching(false));
	};
};

export default weatherReducer;
