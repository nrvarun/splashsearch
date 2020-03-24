import React, { Component } from "react";

import { toJson } from "unsplash-js";

import Header from "./Header";
import { unsplashGlobal } from "../../Utils/Unsplash";

class Layout extends Component {
  state = {
    bannerImage: [],
    bannerImageUrl: [],
    bannerImageDesc: ""
  };

  componentDidMount() {
    let randomIndex = (Math.random() * 20).toFixed(0);
    console.log(randomIndex);
    unsplashGlobal.search
      .photos("latest", 1, 20, { orientation: "landscape" })
      .then(toJson)
      .then(json => {
        this.setState(
          {
            bannerImage: json.results[randomIndex]
          },
          this.setBannerImage
        );
      });
  }

  setBannerImage = e => {
    this.setState({
      bannerImageUrl: this.state.bannerImage.urls.regular,
      bannerImageDesc: this.state.bannerImage.alt_description
    });
  };

  render() {
    const { bannerImageUrl } = this.state;

    return (
      <main
        className="main-bgimg"
        style={{ backgroundImage: `url("${bannerImageUrl}")` }}
      >
        <Header handleSearch={this.handleSearch} />
        {this.props.children}
      </main>
    );
  }
}

export default Layout;
