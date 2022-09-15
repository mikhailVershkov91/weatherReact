import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import MainPage from "./components/MainPage/MainPage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<div className="App">
			<Welcome />
			<MainPage />

		</div>
	);
}

const MainApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default MainApp;
