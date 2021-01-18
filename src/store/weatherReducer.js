import { weatherAPI } from "../plugins/axios";

const SET_WEATHER = "SET_WEATHER";

//
// const GET_CITY = "GET_CITY";
// const UPDATE_INPUT = "UPDATE_INPUT";

const initialState = {
	weatherData: [],
	// city: null,
};

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_WEATHER: {
			return { ...state };
		}
		// case GET_CITY: {
		// 	return { ...state, city: action.city };
		// }
		// case UPDATE_INPUT: {
		// 	return { ...state, city: "" };
		// }
		default:
			return state;
	}
};

//
// export const getCityCreator = (city) => ({ type: GET_CITY, city });
// export const updateInputCreator = (city) => ({ type: UPDATE_INPUT, city });

export const setWeatherAC = () => ({
	type: "SET_WEATHER",
});

export const getWeatherTC = (name) => {
	return async (dispatch) => {
		const response = await weatherAPI.getWeather(name);
		dispatch(setWeatherAC(response.weather));
	};
};

export default weatherReducer;
