import { useState, useEffect } from "react";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [form, setForm] = useState({
    name: "Mai Xuân Nhân",
    email: "maixuannhan2004@gmail.com",
    phone: "0868487465",
    address: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
    orderMethod: "giao_hang_tai_nha",
    payMethod: "thanh_toan_khi_nhan_hang",
  });

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
    fetchProvinces();
  }, []);

  useEffect(() => {
    if (selectedProvince) fetchDistricts(selectedProvince);
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) fetchCommunes(selectedDistrict);
  }, [selectedDistrict]);

  const fetchProvinces = async () => {
    try {
      const response = await fetch("dist/tinh_tp.json");
      const data = await response.json();
      setProvinces(data);
    } catch (error) {
      console.error("Error loading provinces:", error);
    }
  };

  const fetchDistricts = async (provinceCode) => {
    try {
      const response = await fetch("dist/quan_huyen.json");
      const data = await response.json();
      setDistricts(
        Object.values(data).filter((d) => d.parent_code === provinceCode)
      );
    } catch (error) {
      console.error("Error loading districts:", error);
    }
  };

  const fetchCommunes = async (districtCode) => {
    try {
      const response = await fetch("dist/xa_phuong.json");
      const data = await response.json();
      setCommunes(
        Object.values(data).filter((c) => c.parent_code === districtCode)
      );
    } catch (error) {
      console.error("Error loading communes:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    if (Object.values(form).some((value) => !value)) {
      alert("Vui lòng điền đầy đủ thông tin!");
    } else {
      alert("Đặt hàng thành công!");
    }
  };

  // Tính tổng tiền giỏ hàng
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-100">
      {/* Phần nhập thông tin khách hàng */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Thông tin khách hàng</h2>

        {/* Các trường nhập thông tin */}
        <label htmlFor="name" className="block mb-2">
          Tên
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <label htmlFor="phone" className="block mb-2">
          Số điện thoại
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        {/* Dropdown tỉnh */}
        <label htmlFor="province" className="block mb-2">
          Tỉnh
        </label>
        <select
          id="province"
          name="province"
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Chọn tỉnh</option>
          {provinces.map((province) => (
            <option key={province.code} value={province.code}>
              {province.name}
            </option>
          ))}
        </select>

        {/* Dropdown quận/huyện */}
        <label htmlFor="district" className="block mt-4 mb-2">
          Quận/Huyện
        </label>
        <select
          id="district"
          name="district"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Chọn quận/huyện</option>
          {districts.map((district) => (
            <option key={district.code} value={district.code}>
              {district.name}
            </option>
          ))}
        </select>

        {/* Dropdown xã/phường */}
        <label htmlFor="commune" className="block mt-4 mb-2">
          Xã/Phường
        </label>
        <select
          id="commune"
          name="commune"
          value={form.address}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Chọn xã/phường</option>
          {communes.map((commune) => (
            <option key={commune.code} value={commune.name}>
              {commune.name}
            </option>
          ))}
        </select>
      </div>

      {/* Phần hiển thị giỏ hàng và thông tin đơn hàng */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-4">Giỏ hàng</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg border mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-red-500 font-bold">
                  {(item.price * item.quantity).toLocaleString()}đ
                </p>
                <p className="text-gray-500">Số lượng: {item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-bold">
            Tổng tiền: {calculateTotal().toLocaleString()}đ
          </h3>
        </div>
        <button
          onClick={validateForm}
          className="bg-red-500 text-white py-2 px-4 rounded w-full"
        >
          Xác nhận đặt hàng
        </button>
      </div>
    </div>
  );
};

export default Payment;
