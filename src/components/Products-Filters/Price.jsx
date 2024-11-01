import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
const Price = (products, onFilterByPrice) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (minPrice !== '' && maxPrice !== '') {
            const filtered = products.filter(product => 
                product.price >= parseFloat(minPrice) && product.price <= parseFloat(maxPrice)
            );
            onFilterByPrice(filtered); 
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="number"
                className='border w-[50px] outline-0 text-center rounded h-[30px]'
                placeholder='min'
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)} // Cập nhật giá trị min
                required
            />
            <FontAwesomeIcon icon={faMinus} className='mx-2' />
            <input
                type="number"
                className='border w-[50px] outline-0 text-center rounded h-[30px]'
                placeholder='max'
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)} // Cập nhật giá trị max
                required
            />
            <input
                type='submit'
                value='ok'
                className='border px-2 ml-4 uppercase rounded h-[30px] bg-black text-white hover:bg-gray-600 transition cursor-pointer'
            />
        </form>
    );
}


export default Price