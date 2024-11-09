/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { convertBase64toURL } from "../../../utils/common";

const CartItem = ({ item, setCart }) => {
  const sum = item.price * item.quantity;

  const incrementProductInCart = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementProductInCart = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };
  return (
    <div className="py-4 px-2 sm:px-4 border-b">
      <div className="flex justify-between">
        <div className="flex">
          <img
            className="w-[60px]"
            src={convertBase64toURL(item.images[0].buffer)}
            alt={item.name}
          />
          <span className="pl-3 pt-2 text-sm sm:text-lg">{item.name}</span>
        </div>
        <button
          className="h-fit pt-2 cursor-pointer"
          onClick={() => removeItemFromCart(item.id)}
        >
          <FontAwesomeIcon
            icon={faTrashCan}
            className="text-xl text-[#3e77aa] hover:text-red-500 transition"
          />
        </button>
      </div>
      <div className="flex justify-between items-center relative mt-4 sm:mt-2 sm:justify-end">
        <div className="relative bottom-0 right-0 text-lg sm:absolute sm:right-[300px]">
          ${item.price}
        </div>
        <div className="relative right-0 bottom-0 sm:right-[140px] sm:absolute">
          <button
            className={item.quantity > 1 ? "text-[#3e77aa]" : "text-black"}
            disabled={item.quantity <= 1}
            onClick={() => decrementProductInCart(item._id)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="mx-2 border px-2 py-1 rounded-md sm:px-4 sm:py-2">
            {item.quantity}
          </span>
          <button
            className="text-[#3e77aa]"
            onClick={() => incrementProductInCart(item._id)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <span className="text-lg">${sum}</span>
      </div>
    </div>
  );
};
export default CartItem;
