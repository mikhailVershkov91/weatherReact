import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import s from "./Autocomplete.module.css";
import { connect } from "react-redux";
import { getWeather } from "../../store/weatherReducer";

const AutocompleteComponent = (props) => {
	const [city, setCity] = useState("");

	const onCitySelect = (city) => {
		props.getWeather(city);
	};

	return (
		<div>
			<Autocomplete
				className={s.inputField}
				id="city-select"
				options={props.cities.map((city) => city.name)}
				onChange={(event, cityName) => {
					setCity(cityName);
					onCitySelect(cityName);
				}}
				renderInput={(params) => (
					<TextField {...params} label="Choose a city" variant="outlined" />
				)}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cities: state.cities.cities,
	isFetching: state.cities.isFetching,
});

let AutocompleteContainer = connect(mapStateToProps, {
	getWeather,
})(AutocompleteComponent);

export default AutocompleteContainer;
