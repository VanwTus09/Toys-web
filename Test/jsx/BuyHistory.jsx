import React from "react";
import "./BuyHistory.css";

function BuyHistory() {
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
          <li>
            <a href="Account.jsx">
              <span className="icon">
                <img src="icon/account.svg" alt="Account Icon" />
              </span>
              Tài khoản
            </a>
          </li>
          <li className="active">
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

      {/* Main Content */}
      <main className="main-content">
        {/* Product List */}
        <div className="product-list">
          <div className="product-item">
            <img src="mouse.png" alt="Chuột Gaming" />
            <div className="product-info">
              <h3>Chuột Gaming có dây Havit M79 RGB</h3>
              <span className="status delivered">Đã giao</span>
              <p className="price">180.000đ</p>
            </div>
          </div>

          <div className="product-item">
            <img src="mouse.png" alt="Chuột Gaming" />
            <div className="product-info">
              <h3>Chuột Gaming có dây Havit M79 RGB</h3>
              <span className="status delivered">Đã giao</span>
              <p className="price">180.000đ</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BuyHistory;
