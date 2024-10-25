import React from "react";
import "./App.css";
import MenuList from "./assets/components/MenuList";
import foodItems from "./assets/data/data";

const App = () => {
	return (
		<article>
			<h1>Wild Restaurant Menu</h1>
			{/* pass the variable foodItems as props to MenuList component */}
			<MenuList foodItems={foodItems} />
		</article>
	);
};

export default App;