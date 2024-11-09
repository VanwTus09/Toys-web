/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios"; // Đảm bảo bạn đã import axios
import ProductDetailItem from "../../Products-detailItems/ProductDetailItems";

const RelatedProducts = ({ product }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(null);

  // Lấy các sản phẩm liên quan từ API
  useEffect(() => {
    if (product?.category) {
      const fetchRelatedProducts = async () => {
        try {
          // Gửi request đến API để lấy tất cả các sản phẩm
          const response = await axios.get(
            `https://toy-kingdom-backend.onrender.com/product/findAll/${product.category}`
          );

          // Kiểm tra cấu trúc dữ liệu trả về từ API
          console.log(response.data); // In dữ liệu ra console để kiểm tra

          // Kiểm tra nếu response.data là mảng
          if (Array.isArray(response.data)) {
            // Lọc các sản phẩm có cùng category và loại trừ sản phẩm chính
            const filteredProducts = response.data.filter(
              (item) =>
                item.category === product.category && item._id !== product._id
            );
            setRelatedProducts(filteredProducts);
          } else {
            setError("Dữ liệu trả về không phải là mảng");
          }
        } catch (error) {
          setError("Error fetching related products: " + error.message);
        }
      };

      fetchRelatedProducts();
    }
  }, [product]); // useEffect sẽ chạy lại khi product thay đổi

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-center">Sản phẩm liên quan</h3>
      <div className="flex flex-wrap justify-center mt-4">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((relatedProduct) => (
            <ProductDetailItem
              key={relatedProduct._id}
              product={relatedProduct}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            Không có sản phẩm liên quan
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
