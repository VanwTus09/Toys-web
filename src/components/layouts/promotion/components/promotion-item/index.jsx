/* eslint-disable react/prop-types */
import { BiSolidDiscount } from "react-icons/bi";

const Promotion = ({title,price,date, onClick}) => {

  const handleRemainingDay = () => {
    const currentDate = new Date().getDate();
    const promotionEndDate = new Date(date).getDate()
    return promotionEndDate - currentDate
  }
  return (
    <div className="flex flex-1 p-2 w-fit min-w-fit">
      <div className="flex flex-nowwrap gap-3 justify-start">
        <div className="border p-2 ">
          <div className="flex xs:gap-36 gap-20 ">
            <div className="p-2">
              <p className="text-sm">{title}</p>
              <p className="text-2xl font-bold whitespace-nowrap">Đồng giá {price}k</p>
            </div>
            <div className="right relative">
              <BiSolidDiscount className="text-7xl xs:text-9xl  ml-5 text-center" />
            </div>
          </div>
          <div className="date text-orange-300">
            <h1 className="text-sm text-orage py-2">
              Hết hạn sau {handleRemainingDay()} ngày
            </h1>
          </div>
          <div className=" flex items-end xs:gap-44 gap-38 ">
            <button onClick={onClick} className="text-white bg-black p-1 whitespace-nowrap">
              Xem chi tiết
            </button>
            <p className="text-xs ml-10 p-2 whitespace-nowrap">*Áp dụng với 1 số sản phẩm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion