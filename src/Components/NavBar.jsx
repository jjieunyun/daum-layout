import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="header_container">
        <img
          src="https://t1.daumcdn.net/daumtop_chanel/op/20200723055344399.png"
          alt="logo"
        />
        <div className="search_container">
          <input type="text" />
          <div>
            <div>
              <span>로또 </span>
              <span>슈퍼태풍 필리핀</span>
              <span>구자철 해설위원</span>
              <span>악성고객 자작극</span>
              <span>스우파</span>
            </div>
            <button>버튼</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
