import React, { useEffect } from "react";
import gsap from "gsap";

import cameraIcon from "../../assets/icons/camera.svg";

const Header = props => {
  useEffect(() => {
    const logoIcon = document.querySelector(".header img");
    const nav = document.querySelector(".header nav");

    const headerTimeline = new gsap.timeline({
      paused: true,
      defaults: { duration: 0.8 }
    });

    headerTimeline
      .fromTo(logoIcon, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(nav, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, "-=0.5");

    headerTimeline.play();
  }, []);

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <img src={cameraIcon} alt="logo" />
            <nav className="header-nav">
              <ul className="nav-list">
                <li>
                  <p className="m-0">Home</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
