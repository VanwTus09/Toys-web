/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../context/context";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProduct } from "../../api/Productsapi";
import ReviewForm from "../Review/ReviewForm";
import { convertBase64toURL } from "../../utils/common";
import { createCart } from "../../api/CartApi";
import RelatedProducts from "../layouts/Recommended/RelatedProducts";

const ProductDetailItem = ({ product }) => {
  const id = useParams();
  const { cart, setCart } = useContext(Context); // Sử dụng context để lấy giỏ hàng
  
  // const [relatedProducts, setRelatedProducts] = useState([]);
  // const [ setError] = useState(null);
  useEffect(() => {
    getProduct(id).then((response) => {
      console.log(response);
    });
  }, [id]);
  const countStar = (rating) => {
    const arr = [];
    const ratingRound = Math.round(rating);
    for (let i = 0; i < ratingRound; i++) {
      arr.push(i);
    }
    return arr.map((star) => (
      <FontAwesomeIcon key={star} className="text-yellow-500" icon={faStar} />
    ));
  };

  const addProductToCart = async () => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    const response = await createCart("userId", product._id, 1);
    console.log(response);
  };

  console.log("cart: ", cart);
  return (
    <div className="px-2 pt-6">
      <p className="capitalize text-gray-500 mb-6 text-base font-semibold sm:text-base bg-gray-200 ">
        <Link
          to="/"
          className="transition hover:border-b-2 border-b-gray-500 ml-10"
        >
          Home
        </Link>
        <span className="px-2">/</span>
        <Link to={`/category/${product.category}`}> {product.category}</Link>
        <span className="pl-2">/ </span>
        {product.name}
      </p>
      <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between lg:items-start">
        <div className="w-full   flex flex-col lg:flex-row justify-center items-center lg:w-2/4 sm:w-3/4">
          {/* Hình ảnh chính */}
          <div className="flex justify-center items-center lg:w-9/12">
            <img
              className="w-full lg:w-45/8 object-contain transform transition-transform duration-300 hover:scale-125"
              src={convertBase64toURL(product.images[0].buffer)}
              alt={product.name || "Product image"}
            />
          </div>
        </div>
        {/* Thông tin sản phẩm và hình ảnh phụ */}
        <div className="w-full pl-0 sm:w-3/4 lg:w-2/4 lg:pl-[30px]">
          <div>
            <p className="font-medium text-xl mt-5 lg:mt-0 md:text-2xl">
              {product.name}
            </p>
            <p className="my-4 text-xl sm:text-2xl">
              {product.price.toLocaleString()} VND
            </p>
            <p className="text-base mt-4 sm:text-lg text-blue-500 font-semibold transition duration-300 transform hover:text-red-500 hover:scale-105 hover:shadow-lg p-2">
              {countStar(product.rating)}
            </p>
            <p className="text-base mt-4 sm:text-lg text-blue-500 font-semibold transition duration-300 transform hover:text-red-500 hover:scale-105 hover:shadow-lg p-2">
              {product.totalReviews} reviews
            </p>
            <p className="text-base mt-4 sm:text-lg text-blue-500 font-semibold transition duration-300 transform hover:text-red-500 hover:scale-105 hover:shadow-lg p-2">
              Stock: {product.stock}
            </p>
            <p className="text-base mt-4 sm:text-lg text-blue-500 font-semibold transition duration-300 transform hover:text-red-500 hover:scale-105 hover:shadow-lg p-2">
              Suitable_AGE: {product.suitableAge}
            </p>

            <div className="p-2"></div>
            <button
              onClick={addProductToCart}
              className="w-full bg-[#af041e] mt-2 text-md text-white transition sm:text-lg md:text-lg border border-transparent hover:border-red-500 hover:bg-white hover:text-gray-500 px-4 py-2 rounded"
            >
              THÊM VÀO GIỎ
            </button>
          </div>
          <div className="p-2 text-sm">
            <h1 className="text-base font-bold ">Mô tả</h1>
            {product.description}
          </div>
        </div>
      </div>
      <ReviewForm />
      <div className="mt-[100px]">
        <p className="text-xl font-medium w-fit border-b-2 border-b-gray-500 mx-auto items-center justify-center">
          Related Products
        </p>
        <RelatedProducts product={product || []} />
      </div>
    </div>
  );
};
export default ProductDetailItem;
