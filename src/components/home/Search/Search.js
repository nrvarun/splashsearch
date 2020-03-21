import React, { useEffect, useState } from "react";

import searchIcon from "../../../assets/icons/search.svg";
import { useSpring, animated } from "react-spring";

const Search = props => {
  const fadeinAnimProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  const inputAnimProps = useSpring({
    to: [{ opacity: 1, transform: "translateY(0)" }],
    from: { opacity: 0, transform: "translateY(30px)" }
  });

  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    setBannerHeight(document.querySelector(".home-banner").offsetHeight);

    window.addEventListener("scroll", function() {
      setWindowScrollY(window.scrollY);
    });

    return () => {
      console.log("cleaned up!");
      window.removeEventListener("scroll", setWindowScrollY(window.scrollY));
    };
  }, [bannerHeight]);

  return (
    <div className="container">
      <div
        className={`search-wrapper ${
          windowScrollY > bannerHeight / 2 ? "fixed-wrapper" : ""
        }`}
      >
        <div className="row mb-3 mb-md-4">
          {windowScrollY < bannerHeight / 2 && (
            <>
              <div className="col-md-6 d-flex align-items-center">
                <div className="search-wrapper__heading d-md-flex">
                  <animated.div style={fadeinAnimProps}>
                    <h2 className="text-white">Splash search</h2>
                  </animated.div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <animated.div style={fadeinAnimProps}>
                  <p className="text-white m-0">
                    Beautiful, free photos. Gifted by the worlds most generous
                    commuity of photographers
                  </p>
                </animated.div>
              </div>
            </>
          )}
        </div>
        <label htmlFor="search-input" className="search-input-w">
          <animated.div style={inputAnimProps}>
            {windowScrollY < bannerHeight / 2 && (
              <img
                className="search-input__icon"
                src={searchIcon}
                alt="search"
              />
            )}
            <input
              type="text"
              autoComplete="off"
              id="search-input"
              className={`search-input ${windowScrollY > bannerHeight / 2 &&
                "p-3"}`}
              placeholder="Search for high resolution photos - free!"
              onKeyUp={props.handleSearch}
            />
          </animated.div>
        </label>
      </div>
    </div>
  );
};

export default Search;
