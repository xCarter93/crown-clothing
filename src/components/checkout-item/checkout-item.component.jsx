import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
	const { removeItemFromCart, addItemToCart } = useContext(CartContext);
	const { name, imageUrl, quantity, price } = cartItem;

	const clearCartItemHandler = () => removeItemFromCart(cartItem, true);
	const increaseItemHandler = () => addItemToCart(cartItem);
	const decreaseItemHandler = () => removeItemFromCart(cartItem);

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div onClick={decreaseItemHandler} className="arrow">
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div onClick={increaseItemHandler} className="arrow">
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div onClick={clearCartItemHandler} className="remove-button">
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
