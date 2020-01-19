import React, { Component } from "react";

import Unsplash, { toJson } from "unsplash-js";

import "./banner.scss";

const unsplash = new Unsplash({
  accessKey: "c6c664149895cd5559d9f0917eb7816d42feb2fb611921dffaefaad6d37cc080"
});

class Banner extends Component {
  state = {
    bannerImage: [],
    bannerImageUrl: [],
    bannerImageDesc: ""
  };

  componentDidMount() {
    let randomIndex = (Math.random() * 30).toFixed(0);
    unsplash.search
      .photos("asia", 1, 30, { orientation: "landscape" })
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
    const { bannerImageUrl, bannerImageDesc } = this.state;
    return (
      <section className="home-banner">
        <img
          className="home-banner-img"
          src={bannerImageUrl}
          alt={bannerImageDesc}
        />
      </section>
    );
  }
}

export default Banner;
