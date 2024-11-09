/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { inputsCategory } from "../../constants/constants";

const Category = ({ products }) => {
  const [filterIndex, setFilterIndex] = useState(0); // Lưu chỉ mục danh mục đã chọn
  const [filteredProducts, setFilteredProducts] = useState(products || []); // Lưu trữ sản phẩm đã lọc
  console.log(products);
  console.log(filteredProducts);
  useEffect(() => {
    if (products && Array.isArray(products)) {
      setFilteredProducts(products);
    }
  }, [products]);
  const changeCategory = (event, index) => {
    setFilterIndex(index); // Cập nhật chỉ mục danh mục
    if (event.target.checked) {
      const filtered = products.filter(
        (product) => product.category === event.target.id
      );
      setFilteredProducts(filtered); // Lọc sản phẩm theo danh mục
    } else {
      setFilteredProducts(products); // Hiển thị tất cả sản phẩm nếu bỏ chọn
    }
  };

  return (
    <>
      {inputsCategory.map((option, index) => (
        <div key={index} className="py-1 flex">
          <input
            className="outline-0 cursor-pointer w-[15px]"
            type="checkbox"
            id={option._id}
            checked={filterIndex === index}
            onChange={(event) => changeCategory(event, index)}
          />
          <label htmlFor={option._id} className="pl-1 cursor-pointer">
            {option.textContext}
          </label>
        </div>
      ))}
     
    </>
  );
};
export default Category;
