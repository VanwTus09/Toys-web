import  { useState, useEffect } from 'react';

const Payment = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [form, setForm] = useState({
    name: 'Mai Xuân Nhân',
    email: 'maixuannhan2004@gmail.com',
    phone: '0868487465',
    address: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
    orderMethod: 'giao_hang_tai_nha',
    payMethod: 'thanh_toan_khi_nhan_hang',
  });

  useEffect(() => {
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
      const response = await fetch('dist/tinh_tp.json');
      const data = await response.json();
      setProvinces(data);
    } catch (error) {
      console.error('Error loading provinces:', error);
    }
  };

  const fetchDistricts = async (provinceCode) => {
    try {
      const response = await fetch('dist/quan_huyen.json');
      const data = await response.json();
      setDistricts(Object.values(data).filter(d => d.parent_code === provinceCode));
    } catch (error) {
      console.error('Error loading districts:', error);
    }
  };

  const fetchCommunes = async (districtCode) => {
    try {
      const response = await fetch('dist/xa_phuong.json');
      const data = await response.json();
      setCommunes(Object.values(data).filter(c => c.parent_code === districtCode));
    } catch (error) {
      console.error('Error loading communes:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    if (Object.values(form).some(value => !value)) {
      alert('Vui lòng điền đầy đủ thông tin!');
    } else {
      alert('Đặt hàng thành công!');
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-100">
      {/* Customer Information Section */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center border-b pb-4 mb-4">
          <img
            src="image/Avatar.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">MAI XUÂN NHÂN</h2>
            <p className="text-gray-500">0868487465</p>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="font-bold">Tỉnh/Thành phố:</label>
            <select
              className="mt-1 block w-full p-2 border rounded-md"
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
            >
              <option value="">Chọn tỉnh/thành phố</option>
              {provinces.map((province) => (
                <option key={province.code} value={province.code}>
                  {province.name_with_type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold">Quận/Huyện:</label>
            <select
              className="mt-1 block w-full p-2 border rounded-md"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">Chọn quận/huyện</option>
              {districts.map((district) => (
                <option key={district.code} value={district.code}>
                  {district.name_with_type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold">Xã/Phường:</label>
            <select
              className="mt-1 block w-full p-2 border rounded-md"
              onChange={handleInputChange}
              name="commune"
            >
              <option value="">Chọn xã/phường</option>
              {communes.map((commune) => (
                <option key={commune.code} value={commune.code}>
                  {commune.name_with_type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold">Họ và tên:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="font-bold">Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="font-bold">Số điện thoại:</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="font-bold">Địa chỉ:</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>
        </form>
      </div>

      {/* Product and Order Information Section */}
      <div className="w-full md:w-1/2 p-6">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="flex items-center mb-4">
            <img
              src="mouse.png"
              alt="Chuột Gaming"
              className="w-20 h-20 rounded-lg border mr-4"
            />
            <div>
              <h3 className="text-lg font-bold">Chuột Gaming có dây Havit M79 RGB</h3>
              <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm">
                Đã giao
              </span>
              <p className="text-red-500 font-bold">180.000đ</p>
            </div>
          </div>
          {/* Repeat product details for each item */}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="flex justify-between">
            <span className="text-gray-700">Tạm tính</span>
            <span className="text-gray-700">500.000đ</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Phí vận chuyển</span>
            <span className="text-gray-700">500.000đ</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Giảm giá</span>
            <span className="text-gray-700">500.000đ</span>
          </div>
          <div className="flex justify-between border-t mt-4 pt-2">
            <h2 className="text-xl font-bold">Tổng cộng</h2>
            <h3 className="text-xl font-bold">500.000đ</h3>
          </div>
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
