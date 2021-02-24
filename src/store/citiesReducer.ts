import { cityListAPI } from "../plugins/axios";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store";

const SET_CITY = "SET_CITY";

let initialState = {
	cities: [],
};

type InitialStateType = typeof initialState;

const citiesReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
	switch (action.type) {
		case SET_CITY: {
			return {
				...state,
				cities: action.cityData,
			};
		}
		default:
			return state;
	}
};

type ActionsTypes = SetCityActionType;

type SetCityActionType = {
	type: typeof SET_CITY;
	cityData: any;
};

export const setCityActionCreator = (data: any): SetCityActionType => ({
	type: SET_CITY,
	cityData: data,
});

type ThunkType = ThunkAction<
	Promise<void>,
	AppStateType,
	unknown,
	ActionsTypes
>;

export const getCity = (): ThunkType => {
	return async (dispatch, getState) => {
		const response = await cityListAPI.getCities();
		console.log(response);
		dispatch(setCityActionCreator(response));
	};
};

export default citiesReducer;


