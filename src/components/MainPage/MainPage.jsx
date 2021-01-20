import React from "react";
import s from "./MainPage.module.css";
import { connect } from "react-redux";
import { getWeather, updateInput } from "../../store/weatherReducer";

const MainPage = (props) => {
	let inputCity = React.createRef();

	const onStartSearch = () => {
		let text = inputCity.current.value;
		props.getWeather(text);
	};

	let onInputChange = () => {
		let text = inputCity.current.value;
		props.updateInput(text);
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
									ref={inputCity}
									type="text"
									placeholder="City..."
									value={props.inputText}
								/>
							</div>
							<div className={s.info__btn}>
								<button onClick={onStartSearch}>Search</button>
							</div>
						</div>
						<div>
							{props.weatherData.description && (
								<span>The weather is {props.weatherData.description}</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	inputText: state.weather.inputText,
	weatherData: state.weather.weatherData,
});

let MainPageContainer = connect(mapStateToProps, {
	updateInput,
	getWeather,
})(MainPage);

export default MainPageContainer;
