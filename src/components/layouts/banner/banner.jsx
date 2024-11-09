import { IoRocketOutline } from "react-icons/io5";
import { SlCallEnd } from "react-icons/sl";
import { LiaBoxOpenSolid } from "react-icons/lia";

const Banner = () => {
  return (
    <div className="py-6 px-10  ">
      <img src="/banner_1.jpg" alt="banner" className="p-2" />
      <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-lg animate-pulse">
        HÃY ĐỂ CHÚNG TÔI LÀ BẠN ĐỒNG HÀNH CỦA TRẺ NHỎ
      </h1>

      <div className="flex flex-wrap justify-center text-center text-lg bg-slate-100">
        <div className="w-full sm:w-1/2 md:w-1/4 border border-gray-300 rounded-lg shadow-lg m-2 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-t-lg transition-colors duration-300 ease-in-out hover:bg-blue-50">
            <IoRocketOutline className="text-4xl text-blue-500 mb-2" />
            <h1 className="font-bold text-xl text-gray-800">
              Giao hàng miễn phí
            </h1>
            <p className="text-gray-600">với đơn hàng từ 500k trở lên</p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 border border-gray-300 rounded-lg shadow-lg m-2 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-t-lg transition-colors duration-300 ease-in-out hover:bg-green-50">
            <SlCallEnd className="text-4xl text-green-500 mb-2" />
            <h1 className="font-bold text-xl text-gray-800">Hỗ trợ 24/7</h1>
            <p className="text-gray-600">Hỗ trợ online / offline 24/7</p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 border border-gray-300 rounded-lg shadow-lg m-2 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-t-lg transition-colors duration-300 ease-in-out hover:bg-orange-50">
            <LiaBoxOpenSolid className="text-4xl text-orange-500 mb-2" />
            <h1 className="font-bold text-xl text-gray-800">
              Miễn phí đổi trả
            </h1>
            <p className="text-gray-600">Trong vòng 7 ngày</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
