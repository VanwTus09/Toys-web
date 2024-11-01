import { IoRocketOutline } from "react-icons/io5";
import { SlCallEnd } from "react-icons/sl";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { SlWallet } from "react-icons/sl";

const Banner = () => {
  return (
    <div className="py-2 px-10">
  <div className="flex flex-wrap text-center text-lg">
    <div className="w-full sm:w-1/2 md:w-1/4 border flex flex-col items-center justify-center p-4">
      <IoRocketOutline className="text-3xl mb-2" />
      <h1 className="font-bold">Giao hàng miễn phí</h1>
      <p>với đơn hàng từ 500k trở lên</p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/4 border flex flex-col items-center justify-center p-4">
      <SlCallEnd className="text-3xl mb-2" />
      <h1 className="font-bold">Hỗ trợ 24/7</h1>
      <p>Hỗ trợ online / offline 24/7</p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/4 border flex flex-col items-center justify-center p-4">
      <LiaBoxOpenSolid className="text-3xl mb-2" />
      <h1 className="font-bold">Miễn phí đổi trả</h1>
      <p>Trong vòng 7 ngày</p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/4 border flex flex-col items-center justify-center p-4">
      <SlWallet className="text-3xl mb-2" />
      <h1 className="font-bold">Đặt hàng trực tuyến</h1>
      <p>Hotline: 0420 420 420</p>
    </div>
  </div>
</div>

  )
}

export default Banner