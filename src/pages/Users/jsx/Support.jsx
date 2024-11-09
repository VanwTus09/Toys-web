import { Link } from "react-router-dom";

function Support() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 h-full bg-[#ffddae] border-r border-gray-300 pt-5">
        <ul className="list-none px-5">
          <li className="mb-2">
            <Link
              to="/user"
              className="flex items-center w-full p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300"
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
              className="flex items-center w-full p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300"
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
          <li className="mb-2">
            <Link
              to="/buyhistory"
              className="flex items-center w-full p-2 text-gray-800 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300"
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
          <li className="mb-2 active">
            <Link
              to="/support"
              className="flex items-center w-full p-2 text-white bg-red-500 border border-gray-300 rounded"
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

      {/* Main content */}
      <main className="flex-grow p-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
        {/* Zalo */}
        <a
          href="zaloplus://chat?phone=0868487465"
          className="flex items-center border rounded-lg border-gray-300 p-3"
        >
          <aside className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border rounded-full overflow-hidden">
            <img
              src="image/Zalo.png"
              alt="Contact Image"
              className="w-full h-full object-cover"
            />
          </aside>
          <main className="ml-3">
            <h2 className="text-lg md:text-xl mb-1">Liên hệ Zalo</h2>
            <p className="text-base md:text-lg text-gray-600">0868487465</p>
          </main>
        </a>

        {/* Hotline */}
        <a
          href="tel:0868487465"
          className="flex items-center border rounded-lg border-gray-300 p-3"
        >
          <aside className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border rounded-full overflow-hidden">
            <img
              src="image/Hotline.png"
              alt="Contact Image"
              className="w-full h-full object-cover"
            />
          </aside>
          <main className="ml-3">
            <h2 className="text-lg md:text-xl mb-1">Liên hệ Hotline</h2>
            <p className="text-base md:text-lg text-gray-600">0868487465</p>
          </main>
        </a>

        {/* Gmail */}
        <a
          href="mailto:maixuannhan2004@gmail.com"
          className="flex items-center border rounded-lg border-gray-300 p-3"
        >
          <aside className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border rounded-full overflow-hidden">
            <img
              src="image/Gmail.png"
              alt="Contact Image"
              className="w-full h-full object-cover"
            />
          </aside>
          <main className="ml-3">
            <h2 className="text-lg md:text-xl mb-1">Liên hệ Gmail</h2>
            <p className="text-base md:text-lg text-gray-600">
              nhan2004@gmail.com
            </p>
          </main>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/Maixuannhan.04062004/"
          className="flex items-center border rounded-lg border-gray-300 p-3"
        >
          <aside className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border rounded-full overflow-hidden">
            <img
              src="image/Facebook.png"
              alt="Contact Image"
              className="w-full h-full object-cover"
            />
          </aside>
          <main className="ml-3">
            <h2 className="text-lg md:text-xl mb-1">Liên hệ Facebook</h2>
            <p className="text-base md:text-lg text-gray-600">Mai Xuân Nhân</p>
          </main>
        </a>
      </main>
    </div>
  );
}

export default Support;
