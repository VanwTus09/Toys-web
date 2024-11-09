import ButtonNav from "./component/button-nav";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../../search/search";
import CartItem from "../Cart-Tab/CartItems";
import { Context } from "../../../context/context";
import Cart from "../Cart-Tab/Cart";

const Header = () => {
  // Lấy dữ liệu user, cart từ Context
  const { user, cart, setCart } = useContext(Context);
  const navigate = useNavigate();

  // Tạo ref cho các thành phần để kiểm tra click bên ngoài
  const wrapperRef = useRef(null);
  const searchRef = useRef(null);

  // State để quản lý hiển thị các thành phần
  const [isOpen, setIsOpen] = useState(false); // Hiển thị menu tài khoản
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Hiển thị ô tìm kiếm
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hiển thị menu trên di động
  const [isShowCart, setIsShowCart] = useState(false); // Hiển thị giỏ hàng

  // Toggle trạng thái mở/đóng tìm kiếm
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Toggle trạng thái mở/đóng giỏ hàng
  const toggleShowCart = () => {
    setIsShowCart((prevBtnCart) => !prevBtnCart);
  };

  // Ẩn giỏ hàng
  const onHiddenCart = () => setIsShowCart(false);

  // Toggle trạng thái mở/đóng menu tài khoản
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle trạng thái mở/đóng menu trên di động
  const toggleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Xử lý click bên ngoài để đóng các menu
  useEffect(() => {
    const handleOnClickOutside = (e) => {
      const { target } = e;
      if (!wrapperRef.current.contains(target)) {
        setIsOpen(false); // Đóng menu tài khoản khi click bên ngoài
      } else if (!searchRef.current.contains(target)) {
        setIsSearchOpen(false); // Đóng tìm kiếm khi click bên ngoài
      }
    };

    // Thêm sự kiện khi mount
    window.addEventListener("mousedown", handleOnClickOutside);

    // Cleanup sự kiện khi unmount
    return () => window.removeEventListener("mousedown", handleOnClickOutside);
  }, [wrapperRef, searchRef]);

  return (
    <header>
      {/* Thông báo trên đầu trang */}
      <h1 className="text-center p-1 text-white bg-black">
        Miễn phí vận chuyển với đơn hàng trên 500K. Hàng pre-order còn được giảm thêm 5%.
      </h1>
      {/* Phần header chính */}
      <div className="flex items-center w-full h-20 px-7 gap-x-10 justify-between md:justify-start">
        {/* Nút mở menu trên di động */}
        <button className="md:hidden" onClick={toggleHamburgerMenu}>
          <span className="block w-8 h-1 bg-black my-1"></span>
          <span className="block w-8 h-1 bg-black my-1"></span>
          <span className="block w-8 h-1 bg-black my-1"></span>
        </button>
        {/* Logo trang web */}
        <a href="/" className="flex items-center justify-center w-20 min-w-20 h-full -mb-2 mx-auto md:mx-0">
          <img className="object-cover w-full" src="/logo.jpg" alt="logo" />
        </a>
        {/* Nav chỉ hiển thị trên màn hình lớn */}
        <div className="hidden md:flex h-full flex-1 items-center justify-between gap-4">
          {/* Danh sách các nút điều hướng */}
          <nav className="flex items-center gap-x-8 list-none mr-auto">
            <ButtonNav text={"Fidget Toys"} onClick={() => navigate("/category/:id")} />
            <ButtonNav text={"Lego"} />
            <div className="relative group max-h-full">
              <ButtonNav
                text={
                  <div className="flex items-center">
                    <span>Sale off</span>
                    <FaAngleDown className="ml-1 p-1" />
                  </div>
                }
              />
              {/* Dropdown menu cho Sale off */}
              <div className="absolute left-0 pt-2 z-50">
                <div className="w-48 bg-white border border-gray-300 shadow-lg rounded-md opacity-0 group-hover:opacity-100 hidden group-hover:block transition-opacity duration-300">
                  <ul className="py-1">
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đồng giá 119k</a></li>
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đồng giá 219k</a></li>
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đồng giá 300k</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          {/* Các icon chức năng (tìm kiếm, tài khoản, giỏ hàng) */}
          <nav className="flex items-center w-fit gap-x-8 list-none ml-auto">
            {/* Tìm kiếm */}
            <div ref={wrapperRef} className="flex items-center justify-center relative size-fit">
              <ButtonNav text={<IoIosSearch className="text-lg" onClick={toggleSearch} />} />
              {isSearchOpen && <Search />}
            </div>

            {/* Tài khoản */}
            {user ? (
              <p>{user.fullName}</p>
            ) : (
              <div ref={wrapperRef} className="flex items-center justify-center relative size-fit">
                <ButtonNav text={<FaUser className="text-lg" onClick={toggleMenu} />} />
                {isOpen && (
                  <div className="absolute right-0 top-full w-48 bg-white rounded-md shadow-lg py-2 z-20">
                    <Link to="/Signin" className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng nhập</Link>
                    <Link to="/Signup" className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng ký</Link>
                  </div>
                )}
              </div>
            )}

            {/* Giỏ hàng */}
            <div className="flex items-center justify-center relative size-fit">
              <ButtonNav text={<BsCart3 className="text-lg" onClick={toggleShowCart} />} />
              {cart.length > 0 && (
                <span className="absolute right-[-7px] top-0 bg-[#00a046] text-[12px] h-[10px] flex items-center justify-center px-[7px] py-[10px] rounded-full">
                  {cart.length}
                </span>
              )}
              {isShowCart && <Cart cart={cart} setCart={setCart} onHiddenCart={onHiddenCart} />}
            </div>
          </nav>
        </div>
      </div>

      {/* Hamburger menu cho di động */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center justify-center">
            <nav className="flex gap-3 list-none">
              <ButtonNav text={"Fidget Toys"} onClick={() => navigate("/")} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100" />
              <ButtonNav text={"Lego"} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100" />
              <ButtonNav text={"Accessories"} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100" />
            </nav>
            <div className="flex list-none p-3">
              {/* Tìm kiếm trong menu di động */}
              <div ref={wrapperRef} className="flex items-center justify-center relative size-fit">
                <ButtonNav text={<IoIosSearch className="text-lg mx-3" onClick={toggleSearch} />} />
                {isSearchOpen && <Search />}
              </div>
              {/* Tài khoản trong menu di động */}
              <div ref={wrapperRef} className="flex items-center justify-center relative size-fit">
                <ButtonNav text={<FaUser className="text-lg mx-3" onClick={toggleMenu} />} />
                {isOpen && (
                  <div className="absolute right-0 top-full w-48 bg-white rounded-md shadow-lg py-2 z-20">
                    <Link to="/Signin" className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng nhập</Link>
                    <Link to="/Signup" className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng ký</Link>
                  </div>
                )}
              </div>
              {/* Giỏ hàng trong menu di động */}
              <div className="flex items-center justify-center relative size-fit">
                <ButtonNav text={<BsCart3 className="text-lg" onClick={toggleShowCart} />} />
                {cart.length > 0 && (
                  <span className="absolute right-[-7px] top-0 bg-[#00a046] text-[12px] h-[10px] flex items-center justify-center px-[7px] py-[10px] rounded-full">
                    {cart.length}
                  </span>
                )}
                {isShowCart && <CartItem cart={cart} />}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
