/* eslint-disable react/prop-types */
import {  useNavigate } from "react-router-dom";
import { CartEmpty } from "./Cartempty";
import CartItem from "./CartItems";


const Cart = ({ cart, setCart, onHiddenCart }) => {
  console.log("cart: ", cart);
  const navigate = useNavigate();
  //   const {
  //     cart,
  //     incrementProductInCart,
  //     decrementProductInCart,
  //     removeItemFromCart,
  //     clearCart,
  //   } = ProductSlice();

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/20 flex justify-center items-center">
      <div className="flex flex-col w-full h-fit max-w-[500px] bg-white rounded relative">
        {/* Header với nút Close và Xóa tất cả sản phẩm */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <button onClick={onHiddenCart} className="text-gray-500">
            Close
          </button>
          <button
            onClick={1}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Xóa tất cả sản phẩm
          </button>
        </div>
        {cart.length === 0 ? (
          <CartEmpty />
        ) : (
          cart?.map((item) => (
            <CartItem key={item.id} item={item} setCart={setCart} />
          ))
        )}
        {/* Footer với tổng tiền và nút Order */}
        <div className="flex justify-between items-center border-t pt-4 mt-4">
          {/* <p className="font-semibold">Tổng cộng: {calculateTotal().toLocaleString()}đ</p> */}
          <button
            onClick={() => navigate("/payment")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
