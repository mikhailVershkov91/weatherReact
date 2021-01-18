import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	// baseURL: "",
	// headers: {
	// 	"API_KEY": "a8ca3ae24ded452d1ab4944a8ddeacf9",
	// },
});

export const weatherAPI = {
	getWeather(name) {
		return instance
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a8ca3ae24ded452d1ab4944a8ddeacf9`
			)
			.then((response) => response.data);
	},
};
