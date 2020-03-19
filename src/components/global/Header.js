import React, { useEffect } from "react";

import cameraIcon from "../../assets/icons/camera.svg";
import gsap from "gsap";

const Header = () => {
  useEffect(() => {
    const logoIcon = document.querySelector(".header img");
    const nav = document.querySelector(".header nav");

    const headerTimeline = new gsap.timeline({
      paused: true,
      defaults: { duration: 0.8 }
    });

    headerTimeline
      .fromTo(logoIcon, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(nav, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=0.5");

    headerTimeline.play();
  });

  return (
    <header className="header">
      <img src={cameraIcon} alt="logo" />
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
