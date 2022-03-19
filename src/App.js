import "./App.css";

import Countries from "./components/Countries/Countries";

import Header from "./components/Header/Header";

function App() {
	return (
		<div className="App">
			{/* <LoadCountries></LoadCountries> */}
			<Header></Header>
			<Countries></Countries>
		</div>
	);
}

// // Make a component here
// function LoadCountries() {
// 	// 1.step declaring a state
// const [] = useState([]);
// // 	// 2. create a useeffect
// useEffect();
// // 		// 3. fetch the data inside useeffect
// 		fetch("https://restcountries.com/v3.1/all")
// 			.then((res) => res.json())
// 			.then((data) => setCountries(data));
// 	}, []);

// 	return (
// 		<div>
// 			<h1>Visiting every countries in the world</h1>
// 			{/* the numbers of data loaded  */}
// 			<h3>Available Countries:{countries.length}</h3>
// 			{countries.map((country) => (
// 				<Country
// 					name={country.name.common}
// 					population={country.population}
// 					region={country.region}
// 				></Country>
// 			))}
// 		</div>
// 	);
// }

// // create another component for props

// function Country(props) {
// 	return (
// 		<div style={{ border: "solid 2px tomato" }}>
// 			<h2>Name:{props.name}</h2>
// 			<h4>Population:{props.population}</h4>
// 			<h4>Region:{props.region}</h4>
// 		</div>
// 	);
// }
export default App;
