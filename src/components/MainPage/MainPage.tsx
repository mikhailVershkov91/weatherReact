import React, { useState, FC, ChangeEvent, useEffect } from "react";
import s from "./MainPage.module.css";
import { connect } from "react-redux";
import { getWeather } from "../../store/weatherReducer";
// import AutocompleteComponent from "../Autocomplete/Autocomplete";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import { AppStateType } from "../../store/store";
import Preloader from "../Preloader/Preloader";
import { getCity } from "../../store/citiesReducer";

type MapStatePropsType = {
	weatherData: any;
	isFetching: boolean;
};

type MapDispatchPropsType = {
	getWeather: (city: string) => void;
	getCity: () => void;
};

export type PropsType = MapStatePropsType & MapDispatchPropsType;

const MainPage: FC<PropsType> = (props) => {
	useEffect(() => {
		props.getCity();
	}, [props.getCity]);

	let [city, setCity] = useState("");

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCity(e.target.value);
	};

	const onStartSearch = () => {
		props.getWeather(city);
		setCity("");
	};

	return (
		<div className={s.main}>
			<div className={s.content}>
				<div className={s.info}>
					<div className={s.container}>
						<div className={s.info__title}>
							Find your city and check the weather
						</div>
						<div className={s.info__row}>
							<div className={s.autocomplete}>
								{props.isFetching && <Preloader />}
								{/* <AutocompleteComponent /> */}
							</div>
							<div className={s.info__search}>
								<input
									onChange={onInputChange}
									type="text"
									placeholder="City..."
									value={city}
								/>
							</div>
							<div className={s.info__btn}>
								<button onClick={onStartSearch}>Search</button>
							</div>
						</div>
						<div className={s.info__weather}>
							{props.weatherData.name && (
								<WeatherInfo weatherData={props.weatherData} />
							)}
						</div>
						{props.isFetching && <Preloader />}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	weatherData: state.weather.weatherData,
	isFetching: state.cities.isFetching,
});

let MainPageContainer = connect(mapStateToProps, {
	getWeather,
	getCity,
})(MainPage);

export default MainPageContainer;
