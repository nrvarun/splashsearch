import React, { Component } from "react";

import Unsplash, { toJson } from "unsplash-js";

import Header from "./Header";
import { accessToken } from "./Unsplash";

const unsplash = new Unsplash({
  accessKey: accessToken
});

class Layout extends Component {
  state = {
    bannerImage: [],
    bannerImageUrl: [],
    bannerImageDesc: ""
  };

  componentDidMount() {
    let randomIndex = (Math.random() * 30).toFixed(0);
    console.log(randomIndex);
    unsplash.search
      .photos("tranquil", 1, 30, { orientation: "landscape" })
      .then(toJson)
      .then(json => {
        console.log(json.results);
        console.log(json.results[randomIndex]);
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
        <Header />
        {this.props.children}
      </main>
    );
  }
}

export default Layout;
