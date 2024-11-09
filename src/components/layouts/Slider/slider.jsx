import { useState, useEffect } from "react";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    "public/lego.jpg",
    "public/lego3.jpg",
    "public/lego4.jpg",
    "public/lego5.jpg",
    "public/lego6.jpg",
  ];

  // Hàm chuyển slide tự động
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Thay đổi slide sau mỗi 3 giây

    return () => clearInterval(interval); // Dọn dẹp khi component bị hủy
  }, [slides.length]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="relative h-80 md:h-[600px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
              activeSlide === index
                ? "translate-x-0" // slide hiện tại
                : activeSlide === (index - 1 + slides.length) % slides.length
                ? "-translate-x-full" // slide trước đó
                : "translate-x-full" // slide tiếp theo
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "center" }} // Căn giữa và phủ
            />
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeSlide === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setActiveSlide(index)}
            aria-current={activeSlide === index}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;
