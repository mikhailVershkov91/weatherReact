import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import s from "./Autocomplete.module.css";
import { connect } from "react-redux";
import { getWeather } from "../../store/weatherReducer";

const AutocompleteComponent = (props) => {
	const cities = [
		"London",
		"Los-Angeles",
		"Liverpool",
		"Amsterdam",
		"Kaliningrad",
		"Shymkent",
		"Moscow",
	];

	const [value, setValue] = useState(cities[0]);

	const onValueSelect = (value) => {
		console.log(value);
		props.getWeather(value);
	};

	return (
		<Autocomplete
			className={s.inputField}
			id="city-select"
			options={cities}
			onChange={(value) => {
				setValue(value);
				// props.getWeather(value);
				onValueSelect(value);
			}}
			// autoHighlight
			// getOptionLabel={(option) => option.label}
			// renderOption={(option) => <React.Fragment>{option.label}</React.Fragment>}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Choose a city"
					variant="outlined"
					// inputProps={{
					// 	...params.inputProps,
					// }}
					// ref={inputCity}
				/>
			)}
		/>
	);
};

// const cities = [
// 	{ label: "London" },
// 	{ label: "Los-Angeles" },
// 	{ label: "Liverpool" },
// 	{ label: "Amsterdam" },
// 	{ label: "Kaliningrad" },
// 	{ label: "Shymkent" },
// 	{ label: "Moscow" },
// ];

const mapStateToProps = (state) => ({
	// textFieldValue: state.autocomplete.textFieldValue,
	weatherData: state.autocomplete.weatherData,
});

let AutocompleteContainer = connect(mapStateToProps, {
	getWeather,
	// updateInput,
	// setValue,
})(AutocompleteComponent);

export default AutocompleteContainer;
