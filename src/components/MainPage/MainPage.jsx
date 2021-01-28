import React, { useState } from "react";
import s from "./MainPage.module.css";
import { connect } from "react-redux";
import { getWeather } from "../../store/weatherReducer";
// import AutocompleteComponent from "../Autocomplete/Autocomplete";
// import Preloader from "../preloader/Preloader";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

const MainPage = (props) => {
	let [city, setCity] = useState("");
	console.log(city);

	const onInputChange = (e) => {
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
							Just start writing the name of the city...
						</div>
						<div className={s.info__row}>
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
						<div>
							{props.weatherData.name && (
								<WeatherInfo weatherData={props.weatherData} />
							)}
						</div>

						{/* <div className={s.autocomplete}>
							<AutocompleteComponent />
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	weatherData: state.weather.weatherData,
	toggleSwitch: state.weather.toggleSwitch,
});

let MainPageContainer = connect(mapStateToProps, {
	getWeather,
})(MainPage);

export default MainPageContainer;
