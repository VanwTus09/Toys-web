import { useEffect, useState } from "react";
import ProductDetailItem from "../../components/Products-detailItems/ProductDetailItems";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import { getProduct } from "../../api/Productsapi";
import { useParams } from "react-router-dom";

const ProductOverview = () => {
  const [product, setProduct] = useState(null); // Trạng thái để lưu sản phẩm
  const [error] = useState(null); // Trạng thái để lưu lỗi
  const param = useParams();

  useEffect(() => {
    getProduct(param.id).then((response) => {
      setProduct(response.product);
    });
  }, [param]);

  if (error) {
    return <p>Lỗi: {error}</p>; // Hiển thị lỗi nếu có
  }

  if (!product) {
    return <p>Đang tải sản phẩm...</p>; // Hiển thị trạng thái loading
  }

  return (
    <div>
      <Header />
      <ProductDetailItem product={product} />
      <Footer />
    </div>
  );
};

export default ProductOverview;
