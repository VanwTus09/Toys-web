import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 h-full bg-[#ffddae] border-r border-gray-300 pt-5">
        <ul className="list-none p-0 pl-5">
          <li className="mb-2">
            <Link
              to="/user"
              className="flex items-center w-full p-2 text-gray-800 bg-red-500 border border-gray-300 rounded-lg hover:bg-gray-300"
            >
              <span className="icon mr-2">
                <img src="icon/home.svg" alt="Home Icon" className="w-5 h-5" />
              </span>
              Trang chủ
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/account"
              className="flex items-center w-full p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300"
            >
              <span className="icon mr-2">
                <img src="icon/account.svg" alt="Account Icon" className="w-5 h-5" />
              </span>
              Tài khoản
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/buyhistory"
              className="flex items-center w-full p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300"
            >
              <span className="icon mr-2">
                <img src="icon/buyhistory.svg" alt="BuyHistory Icon" className="w-5 h-5" />
              </span>
              Lịch sử mua
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/support"
              className="flex items-center w-full p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300"
            >
              <span className="icon mr-2">
                <img src="icon/support.svg" alt="Support Icon" className="w-5 h-5" />
              </span>
              Hỗ trợ
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-5 bg-gray-50 flex flex-col items-center">
        {/* Personal Info */}
        <div className="flex flex-col sm:flex-row w-full max-w-md border border-gray-300 rounded-lg mb-12 items-center p-4 text-center sm:text-left">
          <aside className="w-24 h-24 border border-gray-300 rounded-full overflow-hidden mb-4 sm:mb-0">
            <img
              src="image/Avatar.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </aside>
          <main className="sm:ml-4">
            <h2 className="text-2xl mb-1 font-semibold">MAI XUÂN NHÂN</h2>
            <p className="text-gray-600">0868487465</p>
          </main>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          <div className="border border-gray-300 p-6 text-center rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">8</h3>
            <p className="text-gray-600">Đơn hàng</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
