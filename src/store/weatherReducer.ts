import { weatherAPI } from "../plugins/axios";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store";

const SET_WEATHER = "SET_WEATHER";

let initialState = {
	weatherData: [],
};

type InitialStateType = typeof initialState;

const weatherReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
	switch (action.type) {
		case SET_WEATHER: {
			return {
				...state,
				weatherData: action.weatherData,
			};
		}
		default:
			return state;
	}
};

type ActionsTypes = SetWeatherActionType;

type SetWeatherActionType = {
	type: typeof SET_WEATHER;
	weatherData: any;
};

export const setWeatherActionCreator = (data: any): SetWeatherActionType => ({
	type: SET_WEATHER,
	weatherData: data,
});

type ThunkType = ThunkAction<
	Promise<void>,
	AppStateType,
	unknown,
	ActionsTypes
>;

export const getWeather = (city: string): ThunkType => {
	return async (dispatch, getState) => {
		const response = await weatherAPI.getWeather(city);
		dispatch(setWeatherActionCreator(response));
	};
};

export default weatherReducer;
