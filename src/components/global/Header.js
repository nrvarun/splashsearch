import React from "react";

import cameraIcon from "../../assets/icons/camera.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={cameraIcon} />
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <p className="m-0">Home</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
