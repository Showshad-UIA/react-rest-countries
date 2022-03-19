import React from "react";
import "./Country.css";

const Country = (props) => {
	return (
		<div className="population">
			<h2>Country:{props.name}</h2>
			<h2>Total Populations:{props.population}</h2>
			<p>
				<small>Region:{props.region}</small>
			</p>
		</div>
	);
};

export default Country;
