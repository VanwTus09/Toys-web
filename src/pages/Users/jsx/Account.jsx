import { Link } from "react-router-dom";

function Account() {
  return (
    <div className="flex w-full bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 h-screen bg-orange-200 border-r border-gray-300 pt-5">
        <ul className="list-none px-5">
          <li>
            <Link
              to="/User"
              className="flex items-center p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md mb-2 hover:bg-gray-300"
            >
              <span className="icon">
                <img
                  src="icon/home.svg"
                  alt="Home Icon"
                  className="w-5 h-5 mr-2"
                />
              </span>
              Trang chủ
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/Account"
              className="flex items-center p-2 text-white bg-red-500 rounded-md"
            >
              <span className="icon">
                <img
                  src="icon/account.svg"
                  alt="Account Icon"
                  className="w-5 h-5 mr-2"
                />
              </span>
              Tài khoản
            </Link>
          </li>
          <li>
            <Link
              to="/BuyHistory"
              className="flex items-center p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md mb-2 hover:bg-gray-300"
            >
              <span className="icon">
                <img
                  src="icon/buyhistory.svg"
                  alt="BuyHistory Icon"
                  className="w-5 h-5 mr-2"
                />
              </span>
              Lịch sử mua
            </Link>
          </li>
          <li>
            <Link
              to="/Support"
              className="flex items-center p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md mb-2 hover:bg-gray-300"
            >
              <span className="icon">
                <img
                  src="icon/support.svg"
                  alt="Support Icon"
                  className="w-5 h-5 mr-2"
                />
              </span>
              Hỗ trợ
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex flex-col w-full p-5 bg-gray-50">
        <div className="flex flex-col items-center mb-5">
          <img
            src="image/Avatar.jpg"
            alt="Avatar"
            className="w-24 h-24 rounded-full border"
          />
          <h2 className="text-2xl mt-2">Mai Xuân Nhân</h2>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold">
            Họ và tên:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue="Mai Xuân Nhân"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <label htmlFor="email" className="font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="maixuannhan2004@gmail.com"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <label htmlFor="phone" className="font-bold">
            Số điện thoại:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            defaultValue="0868487465"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <label htmlFor="address" className="font-bold">
            Địa chỉ:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            defaultValue="xxxxxxxxxxxxxxxxxxxxxxxxxx"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <button className="w-1/2 mx-auto p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Cập nhật thông tin
          </button>
        </div>
      </main>
    </div>
  );
}

export default Account;
