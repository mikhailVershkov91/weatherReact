import React from "react";
import s from "./MainPage.module.css";
import { connect } from "react-redux";
import {
	getWeatherTC,
	// getCityCreator,
	// updateInputCreator,
} from "../../store/weatherReducer";

const MainPage = (props) => {

	let inputCity = React.createRef()

	const startSearch = () => {
		let text = inputCity.current.value;
		console.log(text);
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
								<input ref={inputCity} type="text" placeholder="City..."/>
							</div>
							<div className={s.info__btn}>
								<button onClick={startSearch}>Search</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	weather: state.weather.weatherData,
});

let MainPageContainer = connect(mapStateToProps, {
	getWeatherTC,
	// getCityCreator,
	// updateInputCreator,
})(MainPage);

export default MainPageContainer;
