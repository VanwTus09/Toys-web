import { useState } from "react";
const ProductSlice = () => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (product) => {
        setCart((prevCart) => [
            ...prevCart,
            { ...product, quantity: 1 },
        ]);
    };

    const incrementProductInCart = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementProductInCart = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItemFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return {
        cart,
        addProductToCart,
        incrementProductInCart,
        decrementProductInCart,
        removeItemFromCart,
        clearCart,
    };
};



export default ProductSlice