import React from "react";

import Search from "../Search/Search";

const Banner = props => {
  return (
    <section className="home-banner">
      <Search handleSearch={props.handleSearch} />
    </section>
  );
};

export default Banner;
