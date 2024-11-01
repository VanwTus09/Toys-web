import React from "react";
import "./Account.css";

function Account() {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li>
            <a href="User.jsx">
              <span className="icon">
                <img src="icon/home.svg" alt="Home Icon" />
              </span>
              Trang chủ
            </a>
          </li>
          <li className="active">
            <a href="Account.jsx">
              <span className="icon">
                <img src="icon/account.svg" alt="Account Icon" />
              </span>
              Tài khoản
            </a>
          </li>
          <li>
            <a href="BuyHistory.jsx">
              <span className="icon">
                <img src="icon/buyhistory.svg" alt="BuyHistory Icon" />
              </span>
              Lịch sử mua
            </a>
          </li>
          {/* 
          <li>
            <a href="Rank.html">
              <span className="icon">
                <img src="icon/rank.svg" alt="Rank Icon" />
              </span>
              Hạng thành viên
            </a>
          </li> 
          */}
          <li>
            <a href="Support.jsx">
              <span className="icon">
                <img src="icon/support.svg" alt="Support Icon" />
              </span>
              Hỗ trợ
            </a>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <div className="profile">
          <img
            src="image/Avatar.jpg"
            alt="Avatar"
            style={{ border: "1px solid" }}
          />
          <h2>Mai Xuân Nhân</h2>
        </div>
        <div className="info">
          <label htmlFor="name">Họ và tên:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue="Mai Xuân Nhân"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="maixuannhan2004@gmail.com"
          />

          <label htmlFor="phone">Số điện thoại:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            defaultValue="0868487465"
          />

          {/* 
          <label htmlFor="dob">Sinh nhật:</label>
          <input type="date" id="dob" name="dob" defaultValue="2023-01-20" /> 
          */}

          <label htmlFor="address">Địa chỉ:</label>
          <input
            type="text"
            id="address"
            name="address"
            defaultValue="xxxxxxxxxxxxxxxxxxxxxxxxxx"
          />

          <button className="update-btn">Cập nhật thông tin</button>
        </div>
      </main>
    </div>
  );
}

export default Account;
