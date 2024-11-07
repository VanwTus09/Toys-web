import { Link } from "react-router-dom";

function Support() {
  return (
    <div className="flex w-full bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 h-screen bg-[#ffddae] border-r border-gray-300 pt-5">
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
      <main className="flex-grow p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Zalo */}
        <a href="zaloplus://chat?phone=0868487465">
          <div className="flex items-center w-400px h-30 border rounded-lg border-gray-300 p-3">
            <aside className="w-24 h-24 border rounded-full">
              <img
                src="image/Zalo.png"
                alt="Contact Image"
                className="w-full h-full rounded-full"
              />
            </aside>
            <main className="ml-3">
              <h2 className="text-xl mb-1">Liên hệ Zalo</h2>
              <p className="text-lg text-gray-600">0868487465</p>
            </main>
          </div>
        </a>

        {/* Hotline */}
        <a href="tel:0868487465">
          <div className="flex items-center w-400px h-30 border rounded-lg border-gray-300 p-3">
            <aside className="w-24 h-24 border rounded-full">
              <img
                src="image/Hotline.png"
                alt="Contact Image"
                className="w-full h-full rounded-full"
              />
            </aside>
            <main className="ml-3">
              <h2 className="text-xl mb-1">Liên hệ Hotline</h2>
              <p className="text-lg text-gray-600">0868487465</p>
            </main>
          </div>
        </a>

        {/* Gmail */}
        <a href="mailto:maixuannhan2004@gmail.com">
          <div className="flex items-center w-400px h-30 border rounded-lg border-gray-300 p-3">
            <aside className="w-24 h-24 border rounded-full">
              <img
                src="image/Gmail.png"
                alt="Contact Image"
                className="w-full h-full rounded-full"
              />
            </aside>
            <main className="ml-3">
              <h2 className="text-xl mb-1">Liên hệ Gmail</h2>
              <p className="text-lg text-gray-600">maixuannhan2004@gmail.com</p>
            </main>
          </div>
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/Maixuannhan.04062004/">
          <div className="flex items-center w-400px h-30 border rounded-lg border-gray-300 p-3">
            <aside className="w-24 h-24 border rounded-full">
              <img
                src="image/Facebook.png"
                alt="Contact Image"
                className="w-full h-full rounded-full"
              />
            </aside>
            <main className="ml-3">
              <h2 className="text-xl mb-1">Liên hệ Facebook</h2>
              <p className="text-lg text-gray-600">Mai Xuân Nhân</p>
            </main>
          </div>
        </a>
      </main>
    </div>
  );
}

export default Support;
