import "./App.css";
import Welcome from "./components/Welcome/Welcome";
// import HelmetComponent from "./components/Helmet";
import MainPage from "./components/MainPage/MainPage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<div className="App">
			{/* <HelmetComponent /> */}
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
