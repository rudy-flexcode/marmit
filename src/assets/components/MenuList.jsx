import React from "react";
import MenuItem from "./MenuItem";

// function MenuList(props) {
//  console.log(props.foodItems);
//	const {foodItems} = props;
// 	console.log(foodItems);
// 	return (
// 		<>
// 			{/*render a MenuItem component to each element of the props array*/}
// 		</>
// 	);
// }

/**
 * dans MenuList, affiche un composant MenuItem pour chaque élément du tableau et transmets toutes les propriétés de l'objet en tant que props ;

 */
function MenuList({ foodItems }) {
	// console.log(foodItems);
	/**
	 * foodItems = [{...}, {...}, {...}, {...}]
	 *
	 * foodItem = {...} 4*
	 */
	return (
		<>
			{foodItems.map((foodItem, index) => (
				<MenuItem
					key={index}
					itemName={foodItem.itemName}
					description={foodItem.description}
					foodImage={foodItem.foodImage}
					price={foodItem.price}
					isFavorite={foodItem.isFavorite}
				/>
			))}

			{/*render a MenuItem component to each element of the props array*/}
		</>
	);
}

export default MenuList;
