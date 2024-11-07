import { Link } from 'react-router-dom';

function BuyHistory() {
  return (
    <div className="flex w-full bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 h-screen bg-orange-200 border-r border-gray-300 pt-5">
        <ul className="list-none px-5">
          <li className="mb-2">
            <Link
              to="/User"
              className="flex items-center p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300"
            >
              <span className="icon mr-2">
                <img src="icon/home.svg" alt="Home Icon" className="w-5 h-5" />
              </span>
              Trang chủ
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/Account"
              className="flex items-center p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300"
            >
              <span className="icon mr-2">
                <img
                  src="icon/account.svg"
                  alt="Account Icon"
                  className="w-5 h-5"
                />
              </span>
              Tài khoản
            </Link>
          </li>
          <li className="mb-2 active">
            <Link
              to="/BuyHistory"
              className="flex items-center p-2 text-white bg-red-500 border border-gray-300 rounded-md"
            >
              <span className="icon mr-2">
                <img
                  src="icon/buyhistory.svg"
                  alt="BuyHistory Icon"
                  className="w-5 h-5"
                />
              </span>
              Lịch sử mua
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/Support"
              className="flex items-center p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300"
            >
              <span className="icon mr-2">
                <img
                  src="icon/support.svg"
                  alt="Support Icon"
                  className="w-5 h-5"
                />
              </span>
              Hỗ trợ
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-5">
        {/* Product List */}
        <div className="block mx-auto p-5">
          <div className="flex items-center p-2 border border-gray-300 rounded-lg mb-4">
            <img
              src="mouse.png"
              alt="Chuột Gaming"
              className="w-20 h-20 mr-5 border border-gray-300"
            />
            <div className="flex flex-col">
              <h3 className="text-lg mb-1">
                Chuột Gaming có dây Havit M79 RGB
              </h3>
              <span className="status delivered bg-green-500 text-white py-1 px-2 rounded text-sm mb-2">
                Đã giao
              </span>
              <p className="text-lg text-red-600 font-bold">180.000đ</p>
            </div>
          </div>

          <div className="flex items-center p-2 border border-gray-300 rounded-lg mb-4">
            <img
              src="mouse.png"
              alt="Chuột Gaming"
              className="w-20 h-20 mr-5 border border-gray-300"
            />
            <div className="flex flex-col">
              <h3 className="text-lg mb-1">
                Chuột Gaming có dây Havit M79 RGB
              </h3>
              <span className="status delivered bg-green-500 text-white py-1 px-2 rounded text-sm mb-2">
                Đã giao
              </span>
              <p className="text-lg text-red-600 font-bold">180.000đ</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BuyHistory;
