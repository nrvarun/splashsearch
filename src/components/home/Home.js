import React, { Component } from "react";

import Banner from "./Banner";
import Layout from "../global/Layout";
import Listing from "./Listing";
import { toJson } from "unsplash-js";
import { unsplashGlobal } from "../../Utils/Unsplash";

class Home extends Component {
  state = {
    searchResults: [],
    randomResults: [
      "travel",
      "technology",
      "sea",
      "love",
      "art",
      "gamer",
      "movies",
      "monochrome",
      "tranquil"
    ]
  };

  componentDidMount() {
    this.searchPhotos(
      this.state.randomResults[
        (Math.random() * this.state.randomResults.length).toFixed(0)
      ]
    );
  }

  searchPhotos = query => {
    unsplashGlobal.search
      .photos(query, 1, 30)
      .then(toJson)
      .then(json => {
        // Your code
        console.log(json.results);
        const results = json.results;
        if (results.length) {
          this.setState({
            searchResults: json.results
          });
        }
      });
  };

  handleSearch = e => {
    const phrase = e.target.value;
    if (phrase.length < 1) {
      this.searchPhotos(
        this.state.randomResults[
          (Math.random() * this.state.randomResults.length).toFixed(0)
        ]
      );
    } else {
      this.searchPhotos(phrase);
    }
  };

  render() {
    const { searchResults } = this.state;

    return (
      <Layout>
        <Banner />
        <Listing results={searchResults} />
      </Layout>
    );
  }
}

export default Home;
