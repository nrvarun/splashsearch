import React, { Component } from "react";

import Search from "./Search/";
import Banner from "./Banner";

class Home extends Component {
  render() {
    return (
      <main>
        <Banner />
        <Search />
      </main>
    );
  }
}

export default Home;
