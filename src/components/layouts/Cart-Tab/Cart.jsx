import { CartItem } from "./CartItems";
import ProductSlice from "../../../Product/ProductSlice";
const Cart=()=> {
    const {
        cart,
        incrementProductInCart,
        decrementProductInCart,
        removeItemFromCart,
        clearCart,
    } = ProductSlice();

    return (
        <div>
            {cart.length === 0 ? (
                <p>Giỏ hàng trống</p>
            ) : (
                cart.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        incrementProduct={incrementProductInCart}
                        decrementProduct={decrementProductInCart}
                        removeProduct={removeItemFromCart}
                    />
                ))
            )}
            <button onClick={clearCart} className="mt-4 bg-red-500 text-white p-2 rounded">
                Xóa tất cả sản phẩm
            </button>
        </div>
    );
}
export default Cart;