import { useState } from "react";
import { inputsCategory } from "../../constants/constants";

const  Category = (product) => {
    const [filterIndex, setFilterIndex] = useState(0); // Lưu chỉ mục danh mục đã chọn
    const [filteredProducts, setFilteredProducts] = useState(product); // Lưu trữ sản phẩm đã lọc

    const changeCategory = (event, index) => {
        setFilterIndex(index); // Cập nhật chỉ mục danh mục
        if (event.target.checked) {
            const filtered = product.filter(product => product.category === event.target.id);
            setFilteredProducts(filtered); // Lọc sản phẩm theo danh mục
        } else {
            setFilteredProducts(product); // Hiển thị tất cả sản phẩm nếu bỏ chọn
        }
    };

    return (
        <>
            {
                inputsCategory.map((option, index) => (
                    <div key={index} className="py-1 flex">
                        <input
                            className="outline-0 cursor-pointer w-[15px]"
                            type="checkbox"
                            id={option.id}
                            checked={filterIndex === index}
                            onChange={(event) => changeCategory(event, index)}
                        />
                        <label htmlFor={option.id} className="pl-1 cursor-pointer">
                            {option.textContext}
                        </label>
                    </div>
                ))
            }
            {/* Render các sản phẩm đã lọc */}
            <div>
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>Category: {product.category}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Category;