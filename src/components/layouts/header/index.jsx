import ButtonNav from "./component/button-nav";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../../search/search";
const Header = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const searchRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOnClickOutside = (e) => {
      const { target } = e;
      if (!wrapperRef.current.contains(target)) {
        setIsOpen(false);
      } else if (!searchRef.current.contains(target)) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOnClickOutside);
    return () => window.removeEventListener("mousedown", handleOnClickOutside);
  }, [wrapperRef, searchRef]);

  return (
    <header>
      <h1 className="text-center p-1 text-white bg-black">
        Miễn phí vận chuyển với đơn hàng trên 500K. Hàng pre-order còn được giảm
        thêm 5%.
      </h1>
      <div className="flex items-center w-full h-20 px-7 gap-x-10 justify-between md:justify-start">
        <button className="md:hidden" onClick={toggleHamburgerMenu}>
          <span className="block w-8 h-1 bg-black my-1"></span>
          <span className="block w-8 h-1 bg-black my-1"></span>
          <span className="block w-8 h-1 bg-black my-1"></span>
        </button>
        <a
          href="/"
          className="flex items-center justify-center w-20 min-w-20 h-full -mb-2 mx-auto md:mx-0"
        >
          <img className="object-cover w-full" src="/logo.jpg" alt="logo" />
        </a>

        {/* Chỉ hiển thị nav trên màn hình lớn */}
        <div className="hidden md:flex h-full flex-1 items-center justify-between gap-4">
          <nav className="flex items-center gap-x-8 list-none mr-auto">
            <ButtonNav text={"Fidget Toys"} onClick={() => navigate("/")} />
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
              <div className="absolute left-0 pt-2 z-50">
                <div className="w-48 bg-white border border-gray-300 shadow-lg rounded-md opacity-0 group-hover:opacity-100 hidden group-hover:block transition-opacity duration-300">
                  <ul className="py-1">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Đồng giá 119k
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Đồng giá 219k
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Đồng giá 300k
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <nav className="flex items-center w-fit gap-x-8 list-none ml-auto">
            <div
              ref={wrapperRef}
              className="flex items-center justify-center relative size-fit"
            >
              <ButtonNav
                text={
                  <IoIosSearch className="text-lg" onClick={toggleSearch} />
                }
              />
              {isSearchOpen && <Search />}
            </div>

            <div
              ref={wrapperRef}
              className="flex items-center justify-center relative size-fit"
            >
              <ButtonNav
                text={<FaUser className="text-lg" onClick={toggleMenu} />}
              />
              {isOpen && (
                <div className="absolute right-0 top-full w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <Link
                    to="/Signin"
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to="/Signup"
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Đăng ký
                  </Link>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center relative size-fit">
              <ButtonNav text={<BsCart3 className="text-lg" onClick={1}/>} />
              <div className="absolute -top-3 -right-2 flex items-center justify-center size-5 rounded-full text-sm text-white bg-red-500">
                0
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Hamburger menu cho thiết bị di động */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center justify-center">
            <nav className="flex gap-3 list-none">
              <ButtonNav
                text={"Fidget Toys"}
                onClick={() => navigate("/")}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              />
              <ButtonNav
                text={"Lego"}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              />
              <ButtonNav
                text={"Accessories"}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              />
            </nav>
            <div className="flex list-none p-3">
              <div
                ref={wrapperRef}
                className="flex items-center justify-center relative size-fit"
              >
                <ButtonNav
                  text={
                    <IoIosSearch
                      className="text-lg mx-3"
                      onClick={toggleSearch}
                    />
                  }
                />
                {isSearchOpen && <Search />}
              </div>
              <div
                ref={wrapperRef}
                className="flex items-center justify-center relative size-fit"
              >
                <ButtonNav
                  text={
                    <FaUser className="text-lg mx-3" onClick={toggleMenu} />
                  }
                />
                {isOpen && (
                  <div className="absolute right-0 top-full w-48 bg-white rounded-md shadow-lg py-2 z-20">
                    <Link
                      to="/Signin"
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      to="/Signup"
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Đăng ký
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center relative size-fit">
                <ButtonNav text={<BsCart3 className="text-lg mx-3" />} />
                <div className="absolute -top-3 -right-2 flex items-center justify-center size-5 rounded-full text-sm text-white bg-red-500">
                  0
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
