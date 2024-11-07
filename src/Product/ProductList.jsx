import { useEffect, useState } from "react";
import ProductItem from "../components/layouts/productItems/ProductItem";
import Productsapi from "../api/Productsapi";
import { Link } from "react-router-dom";
import axiosClient from "../api/AxiosClient";
// Component để lấy tất cả sản phẩm
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Gọi API với limit = 12
    Productsapi.getAll({ limit: 12 })
      .then((response) => {
        setProducts(response.data); // Lưu danh sách sản phẩm vào state
      })
      .catch((error) => {
        console.log(error);
        setError(error.message); // Xử lý lỗi
      });
  }, []);
  const fetchData = async () => {
    try {
      const response = await axiosClient.get("https://fakestoreapi.com"); // Gọi endpoint
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData(); // Gọi hàm để thực hiện yêu cầu

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Sản phẩm của tôi</h1>
      <div className="flex flex-wrap justify-between">
        {products.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
      <Link to="#">
        <p className="text-center text-2xl font-bold hover:text-3xl ">
          Xem tất cả
        </p>
      </Link>
    </div>
  );
};
export { ProductList };
