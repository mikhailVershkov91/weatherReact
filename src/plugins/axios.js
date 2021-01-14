import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  // baseURL: "",
  headers: {
		"API-KEY": "a8ca3ae24ded452d1ab4944a8ddeacf9",
	},
});

export const weatherAPI = {
	getWeather() {
    return instance
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API-KEY}`)
      .then((response) => response.data);
	},
};
