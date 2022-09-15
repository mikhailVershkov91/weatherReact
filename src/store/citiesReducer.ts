import { cityListAPI } from "../plugins/axios";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store";

const SET_CITY = "SET_CITY";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
	cities: [],
	isFetching: false,
};

type InitialStateType = typeof initialState;

const citiesReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_CITY: {
			return {
				...state,
				cities: action.cityData,
			};
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
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

type ToggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING;
	isFetching: boolean;
};

export const toggleIsFetchingActionCreator = (
	isFetching: boolean
): ToggleIsFetchingActionType => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, any>;

export const getCity = (): ThunkType => {
	return async (dispatch, getState) => {
		dispatch(toggleIsFetchingActionCreator(true));
		const response = await cityListAPI.getCities();
		dispatch(setCityActionCreator(response));
		dispatch(toggleIsFetchingActionCreator(false));
	};
};

export default citiesReducer;
