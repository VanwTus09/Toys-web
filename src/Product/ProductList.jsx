import { useEffect, useState } from 'react';
import ProductItem from '../components/layouts/productItems/ProductItem';
import Productsapi from '../api/Productsapi';

// Component để lấy tất cả sản phẩm
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Gọi API với limit = 18
        Productsapi.getAll({ limit: 18 })
          .then((response) => {
            setProducts(response.data); // Lưu danh sách sản phẩm vào state
          })
          .catch((error) => {
            setError(error.message); // Xử lý lỗi
          });
      }, []);

    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-6'>Sản phẩm của tôi</h1>
        <div className="flex flex-wrap justify-between">
            {products.map(product => (
            <ProductItem  {...product} key ={product.id}/>
        ))}
        </div>
        </div>
    );
};
export { ProductList };
