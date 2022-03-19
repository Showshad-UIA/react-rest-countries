import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	return (
		<div className="App">
			<LoadCountries></LoadCountries>
		</div>
	);
}

// Make a component here
function LoadCountries() {
	// 1.step declaring a state
	const [countries, setCountries] = useState([]);
	// 2. create a useeffect
	useEffect(() => {
		// 3. fetch the data inside useeffect
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);

	return (
		<div>
			<h1>Visiting every countries in the world</h1>
			{/* the numbers of data loaded  */}
			<h3>Available Countries:{countries.length}</h3>
		</div>
	);
}
export default App;
