/* eslint-disable react/prop-types */
import { useContext,useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/context";
import { faStar} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

// eslint-disable-next-line react/prop-types
const ProductDetailItem = ({ product }) => {
  const {  setCart } = useContext(Context); // Sử dụng context để lấy giỏ hàng
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(null);
  const isCart = true; // hoặc giá trị cần thiết
  <ProductDetailItem isCart={true} />

  useEffect(() => {
    console.log(product); // Thêm dòng này để kiểm tra dữ liệu product
  }, [product]);
  // Lấy các sản phẩm liên quan
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        // eslint-disable-next-line react/prop-types
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${product.category}`
        );
        // eslint-disable-next-line react/prop-types
        const filteredProducts = response.data.filter(
          (item) => item.id !== product.id
        );
        setRelatedProducts(filteredProducts);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRelatedProducts();
  }, [product]);
  const countStar = rating => {
    const arr = []
    const ratingRound = Math.round(rating)
    for (let i = 0; i < ratingRound; i++) {
        arr.push(i)
    }
    return arr.map(star => <FontAwesomeIcon key={star} className='text-yellow-500' icon={faStar} />)
}
  // const isCart = cart.some(el => el.id === product.id); // Kiểm tra sản phẩm đã có trong giỏ hàng chưa

  const addProductToCart = () => {
      setCart(prevCart => [...prevCart, product]);
  };
  const ClickHandle = (productId) => {
    Context.id = productId;
  };
  


  return (
    <div className="px-2 pt-6">
      <p className="capitalize text-gray-500 mb-6 text-sm font-semibold sm:text-base bg-gray-200">
        <Link to="/" className="transition hover:border-b-2 border-b-gray-500">
          Home
        </Link>
        <span className="px-2">/</span>
        {product.category}
        <span className="pl-2">/</span>
      </p>
      <div className='flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between lg:items-start'>
                    <div className='w-full shadow-lg rounded-md flex justify-center items-center lg:w-2/4 sm:w-3/4'>
                        <img className='w-2/4 lg:w-5/8' src={product.image} alt={product.title}/>
                    </div>
                    <div className='w-full pl-0 sm:w-3/4 lg:w-2/4 lg:pl-[30px]'>
                        <div>
                            <p className='font-medium text-xl mt-5 lg:mt-0 md:text-2xl'>{product.title}</p>
                            <p className='my-4 text-xl sm:text-2xl'>${product.price}</p>
                            <div className='flex justify-start'>
                                <div className='mr-4'>
                                    <span className='mr-2 text-base font-semibold'>{product.rating.rate}</span>
                                    {countStar(product.rating.rate)}
                                </div>
                                <span className='cursor-pointer text-indigo-600 text-base font-medium hover:text-indigo-500 transition'>{product.rating.count} reviews</span>
                            </div>
                            <p className='text-base mt-4 sm:text-lg'>{product.description}</p>
                            <div className='my-4'>
                                
                            </div>
                            <button
                                onClick={addProductToCart}
                                // disabled={isCart}
                                className={`w-full bg-black mt-8 text-md rounded-md text-white transition px-[80px] py-[15px] sm:text-lg md:w-fit ${isCart ? 'border px-[40px] py-[10px]' : 'hover:bg-gray-800'}`}
                            >
                                Thêm vào Giỏ 
                            </button>
                        </div>
                    </div>
                </div>
      <div className="mt-[100px]">
        <p className="text-xl font-medium w-fit border-b-2 border-b-gray-500 mx-auto lg:mx-0">
          You may also be interested
        </p>
        <div
          className={`flex justify-start mt-8 overflow-x-auto lg:overflow-x-hidden ${
            relatedProducts.length > 3
              ? "lg:justify-center"
              : "sm:justify-center"
          }`}
        >
          {error && <div className="text-red-500">{error}</div>}
          {relatedProducts.map((relatedProduct) => (
            <Link
              to={`/products/${relatedProduct.id}`}
              key={relatedProduct.id}
              onClick={() => ClickHandle(relatedProduct.id)}
              className="flex flex-col justify-evenly items-center border mx-1 py-1 rounded-lg shadow-lg productItem"
            >
              <img
                className="w-[100px]"
                src={relatedProduct.image}
                alt={relatedProduct.title}
              />
              <div>
                <p className="w-[200px] text-center">{relatedProduct.title}</p>
                <p className="font-medium text-center">
                  ${relatedProduct.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductDetailItem;
