import React from "react";
import "./Support.css";

function Support() {
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
          <li className="active">
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
        {/* Zalo */}
        <a href="zaloplus://chat?phone=0868487465">
          <div className="contact">
            <aside className="img-contact">
              <img
                src="image/Zalo.png"
                alt="Contact Image"
                style={{ width: "100%", height: "auto", borderRadius: "50%" }}
              />
            </aside>
            <main className="main-contact">
              <h2>Liên hệ Zalo</h2>
              <p>0868487465</p>
            </main>
          </div>
        </a>

        {/* Hotline */}
        <a href="tel:0868487465">
          <div className="contact">
            <aside className="img-contact">
              <img
                src="image/Hotline.png"
                alt="Contact Image"
                style={{ width: "100%", height: "auto", borderRadius: "50%" }}
              />
            </aside>
            <main className="main-contact">
              <h2>Liên hệ Hotline</h2>
              <p>0868487465</p>
            </main>
          </div>
        </a>

        {/* Gmail */}
        <a href="mailto:maixuannhan2004@gmail.com">
          <div className="contact">
            <aside className="img-contact">
              <img
                src="image/Gmail.png"
                alt="Contact Image"
                style={{ width: "100%", height: "auto", borderRadius: "50%" }}
              />
            </aside>
            <main className="main-contact">
              <h2>Liên hệ Gmail</h2>
              <p>maixuannhan2004@gmail.com</p>
            </main>
          </div>
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/Maixuannhan.04062004/">
          <div className="contact">
            <aside className="img-contact">
              <img
                src="image/Facebook.png"
                alt="Contact Image"
                style={{ width: "100%", height: "auto", borderRadius: "50%" }}
              />
            </aside>
            <main className="main-contact">
              <h2>Liên hệ Facebook</h2>
              <p>Mai Xuân Nhân</p>
            </main>
          </div>
        </a>
      </main>
    </div>
  );
}

export default Support;
