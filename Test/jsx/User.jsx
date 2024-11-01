import React from "react";
import "./User.css";

function User() {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li className="active">
            <a href="User.jsx">
              <span className="icon">
                <img src="icon/home.svg" alt="Home Icon" />
              </span>
              Trang chủ
            </a>
          </li>
          <li>
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
        {/* Thông tin cá nhân */}
        <div className="info">
          <aside className="img-info">
            <img
              src="image/Avatar.jpg"
              alt="Profile Image"
              style={{ width: "100%", height: "auto", borderRadius: "50%" }}
            />
          </aside>
          <main className="main-info">
            <h2>MAI XUÂN NHÂN</h2>
            <p>0868487465</p>
            {/* 
            <p className="status">Vàng</p> 
            */}
          </main>
        </div>

        <div className="statistics">
          <div className="stat-item">
            <h3>8</h3>
            <p>Đơn hàng</p>
          </div>
          {/* 
          <div className="stat-item">
            <h3>1M</h3>
            <p>Tổng tiền tích lũy</p>
          </div> 
          */}
        </div>
      </main>
    </div>
  );
}

export default User;
