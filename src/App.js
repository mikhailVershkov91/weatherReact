import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import HelmetComponent from "./components/Helmet";
import MainPage from "./components/MainPage/MainPage";

function App() {
	return (
		<div className="App">
			{/* <HelmetComponent /> */}
			<Welcome />
			<MainPage />,
		</div>
	);
}

export default App;
