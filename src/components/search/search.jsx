import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDebounce } from '../../hooks/useDebounce';
import { Context } from '../../context/context';

export function Search() {
    const [search, setSearch] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const [, setProducts] = useState([]);  // Đổi thành products
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState(null);
    const [searchField, setSearchField] = useState(false); // Quản lý trạng thái search form

    const contextId = useContext(Context);
    const debounced = useDebounce(search);

    useEffect(() => {
        if (debounced.length >= 2) {
            axios.get('https://fakestoreapi.com/products')
                .then(response => {
                    setProducts(response.data);
                    const filtered = response.data.filter(product => 
                        product.title.toLowerCase().includes(debounced.toLowerCase())
                    );
                    setFilteredProducts(filtered);
                    setDropdown(filtered.length > 0);
                })
                .catch(err => {
                    setError(err.message);
                });
        } else {
            setDropdown(false);
        }
    }, [debounced]);

    const clickHandler = (productId) => {
        setDropdown(false);
        setSearchField(false); // Đóng form tìm kiếm
        contextId.id = productId; // Lưu ID sản phẩm vào context
    };

    const toggleForm = () => setSearchField(false); // Đóng form tìm kiếm

    const submitSearchForm = (event) => {
        event.preventDefault();
        if (search !== '') {
            setSearchField(false);
        }
        setDropdown(false);
    };

    if (error) return <div>{error}</div>;

    return (
        <>
            {searchField && (
                <div
                    className="absolute left-0 right-0 top-0 bottom-0 w-full h-[100vh] z-10 bg-gray-300/50"
                    onClick={toggleForm}
                />
            )}

            <form
                className={`${
                    searchField
                        ? 'absolute top-3 left-0 mx-auto right-0 w-[90%] bg-white z-20 rounded shadow-md flex items-center justify-between'
                        : 'bg-white rounded rounded-r-md hidden items-center relative w-[390px] md:flex md:justify-between'
                }`}
                onSubmit={submitSearchForm}
            >
                <input
                    type="text"
                    placeholder="Search products..."
                    className="px-1 text-lg text-black outline-0 h-[35px] w-full focus:outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    className="bg-slate-400 h-[35px] px-3 rounded-r hover:bg-gray-700 transition cursor-pointer"
                    type="submit"
                    value="Find"
                />

                {dropdown && (
                    <div className="absolute left-0 top-[36px] right-0 bg-white p-2 border border-black rounded max-h-[500px] overflow-y-auto search-box">
                        {filteredProducts.map((product, index) => (
                            <Link
                                to={`/products/${product.id}`}
                                onClick={() => clickHandler(product.id)}
                                className="text-black flex items-center max-h-[80px] mb-4 border-b pb-2 last:border-0 last:mb-0 hover:opacity-50 transition"
                                key={index}
                            >
                                <img
                                    className="w-[50px] mr-4 max-h-[75px]"
                                    src={product.image}
                                    alt={product.title}
                                />
                                <div>
                                    <p className="text-base">{product.title}</p>
                                    <p className="text-md font-medium">$ {product.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </form>
        </>
    );
}
