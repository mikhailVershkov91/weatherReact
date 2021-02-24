import axios from "axios";

const API_KEY = "a8ca3ae24ded452d1ab4944a8ddeacf9";

const instance = axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5/",
});

type ResponseWeatherType = {
	// data: {
	// 	weather: any;
	// 	main: any;
	// 	wind: any;
	// 	clouds: any;
	// 	name: string;
	// };
	data: string;
};

type ResponseCitiesType = {
	data: any;
};

export const weatherAPI = {
	getWeather(city: string) {
		return instance
			.get<ResponseWeatherType>(`weather?q=${city}&appid=${API_KEY}`)
			.then((response) => response.data);
	},
};

export const cityListAPI = {
	getCities() {
		return instance
			.get<ResponseCitiesType>("https://city-list-json.herokuapp.com/cities")
			.then((response) => response.data);
	},
};