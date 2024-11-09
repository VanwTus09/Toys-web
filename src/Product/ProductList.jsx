import { useEffect, useState } from "react";
import ProductItem from "../components/layouts/productItems/ProductItem";
import { getAllProducts } from "../api/Productsapi";
// Component để lấy tất cả sản phẩm
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error] = useState(null);

  useEffect(() => {
    getAllProducts().then((response) => {
      console.log(response);
      setProducts(response.products.slice(0, 9));
    });
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Sản phẩm của tôi</h1>
      <div className="flex flex-wrap justify-between">
        {products.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export { ProductList };
