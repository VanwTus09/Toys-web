import  { useState } from "react";
import { inputsRating } from "../../constants/constants";

const Rating = ( products, onFilterByRating ) => {
    const [filterIndex, setFilterIndex] = useState(0);
    const [filters, setFilters] = useState({}); // Thay thế useSelector và dispatch

    const changeRating = (event, index) => {
        setFilterIndex(index);
        if (event.target.checked) {
            const updatedFilters = { ...filters, rating: event.target.id }; // Cập nhật filters
            setFilters(updatedFilters);
            // Lọc sản phẩm theo rating và truyền kết quả qua callback
            const filtered = products.filter(product => product.rating >= parseFloat(event.target.id));
            onFilterByRating(filtered);
        } else {
            setFilters({});
            onFilterByRating(products); // Nếu không có filter, hiển thị tất cả sản phẩm
        }
    };

    return (
        <>
            {inputsRating.map((option, index) => (
                <div className={option.classDiv} key={index}>
                    <input
                        type={option.type}
                        id={option.id}
                        className={option.classInput}
                        checked={filters.rating !== undefined && filterIndex === index}
                        onChange={(event) => changeRating(event, index)}
                    />
                    <label htmlFor={option.id} className={option.classLabel}>{option.textContent}</label>
                </div>
            ))}
        </>
    );
}
export default Rating;