import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
	cartItems,
	cartItemToRemove,
	clearAllCartItems = false
) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);
	if (!clearAllCartItems) {
		if (existingCartItem.quantity === 1) {
			return cartItems.filter(
				(cartItem) => cartItem.id !== existingCartItem.id
			);
		}

		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}
	return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	cartCount: 0,
	cartPrice: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartPrice, setCartPrice] = useState(0);

	useEffect(() => {
		const newCartTotalPrice = cartItems.reduce(
			(total, currentCartItem) =>
				total + currentCartItem.quantity * currentCartItem.price,
			0
		);
		setCartPrice(newCartTotalPrice);
	}, [cartItems]);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, currentCartItem) => total + currentCartItem.quantity,
			0
		);

		setCartCount(newCartCount);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (cartItemToRemove, clearAllCartItems) => {
		setCartItems(
			removeCartItem(cartItems, cartItemToRemove, clearAllCartItems)
		);
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		removeItemFromCart,
		cartItems,
		cartCount,
		cartPrice,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
