import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Productsapi from "../../api/Productsapi";
import ProductDetailItem from "../../components/Products-detailItems/ProductDetailItems";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";

const ProductOverview = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null); // Trạng thái để lưu sản phẩm
  const [error, setError] = useState(null); // Trạng thái để lưu lỗi

  useEffect(() => {
    // Gọi API để lấy sản phẩm theo id
    Productsapi.get(id)
      .then((response) => {
        setProduct(response.data); // Lưu sản phẩm vào state
      })
      .catch((error) => {
        setError(error.message); // Xử lý lỗi
      });
  }, [id]);

  if (error) {
    return <p>Lỗi: {error}</p>; // Hiển thị lỗi nếu có
  }

  if (!product) {
    return <p>Đang tải sản phẩm...</p>; // Hiển thị trạng thái loading
  }

  return (
    <div>
      <Header/> 
      <ProductDetailItem product={(product)}/>
      <Footer/>
    </div>
  );
};

export default ProductOverview;
