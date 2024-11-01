import { useContext } from "react"
import { Context } from "../../../context/context"
import { Link } from "react-router-dom"

const ProductItem = (product) => {
    const contextId = useContext(Context)
    const clickHandle = (productId)=>{
        contextId.id = productId
    }
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
      <Link
        to={`/products/${product.id}`}
        onClick={() => clickHandle(product.id)}
        className="h-[400px] shadow-md border border-gray-200 relative rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col justify-between"  >
        <img
          className="w-[100px] h-auto m-auto mt-[50px] object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="text-center font-medium mt-4  hover:text-lg transition-all duration-300">{product.title}</div>
        <div className="flex justify-center gap-3 items-center pb-4">
          <span className="text-xl font-semibold hover:text-lg ">${product.price}</span> 
        </div>
      </Link>
    </div>
  );
}
export default ProductItem

   