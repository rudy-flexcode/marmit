import React from "react";
import { useState } from "react";

function MenuItem({ itemName, description, foodImage, price, isFavorite }) {
	//create a state isFavorite that has the inital value of isFavorite that comes from the props

	// dans MenuItem, crée un état isFavorite qui aura une valeur initiale définie sur props.isFavorite.

	const [isFavoriteItem, setIsFavoriteItem] = useState(isFavorite);

	return (
		<section className="itemContainer">
			<figure className="imgContainer">
				{/* the image will receive the url src from the props */}
				<img src={foodImage} alt={itemName} />
				<figcaption>
					{/* the h2 will receive the item name from the props */}
					<h2>{itemName}</h2>
					{/* the p will receive the item description from the props */}
					<p>{description}</p>
				</figcaption>
			</figure>
			{/* the span will receive the item price from the props */}
			<span>{price} EUR</span>

			{/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
			<button onClick={() => setIsFavoriteItem(!isFavoriteItem)}>
				{isFavoriteItem ? "❤️" : "🖤"}
			</button>
		</section>
	);
}

export default MenuItem;
