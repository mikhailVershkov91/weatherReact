import axios from "axios";

const API_KEY = "a8ca3ae24ded452d1ab4944a8ddeacf9";

const instance = axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const weatherAPI = {
	getWeather(city) {
		return instance
			.get(`weather?q=${city}&appid=${API_KEY}`)
			.then((response) => response.data);
	},
};
