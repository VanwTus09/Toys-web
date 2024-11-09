import { useState } from "react";
import Promotion from "./components/promotion-item";

const PromotionWrapper = () => {
  const [promotionDetails, setPromotionDetails] = useState(null);

  const promotionItems = [
    {
      title: "Đồng giá 300K",
      price: 300,
      date: "10/31/2024",
    },
    {
      title: "Đồng giá 219K",
      price: 219,
      date: "10/29/2024",
    },
    {
      title: "Đồng giá 199K",
      price: 119,
      date: "10/30/2024",
    },
  ];

  return (
    <div className="relative w-full">
      <h3 className="text-center my-4 font-bold text-2xl">
        Chương trình khuyến mãi
      </h3>

      {/* Wrapper for promotion items and arrows */}
      <div className="flex items-center justify-center relative w-full">
        {/* Promotions Container */}
        <div className="overflow-hidden w-full">
          <div className={`flex transition-transform duration-300 ease-in-out`}>
            {promotionItems.map((item, index) => (
              <div
                key={index}
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <Promotion
                  title={item.title}
                  price={item.price}
                  date={item.date}
                  onClick={() => setPromotionDetails(promotionItems[index])}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotion Details Popup with fade-in effect */}
      {promotionDetails && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-black p-4 opacity-0 animate-fadeIn">
          <h1>{promotionDetails?.title}</h1>
          <p>{promotionDetails?.price}</p>
          <p>{promotionDetails?.date}</p>
          <button
            className="mt-2 p-2 bg-black text-white rounded"
            onClick={() => setPromotionDetails(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default PromotionWrapper;
