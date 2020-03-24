import React, { Component } from "react";

import { toJson } from "unsplash-js";

import Banner from "./Banner";
import Layout from "../global/Layout";
import Listing from "./Listing";
import { unsplashGlobal } from "../../Utils/Unsplash";

class Home extends Component {
  state = {
    searchQuery: "random",
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
        console.log(json);
        const results = json.results;
        if (results.length) {
          this.setState({
            searchResults: json.results
          });
        }
      });
  };

  handleSearch = e => {
    const searchQuery = e.target.value;
    console.log(searchQuery);
    if (searchQuery.length < 1) {
      this.setState({ searchQuery });
      this.searchPhotos(
        this.state.randomResults[
          (Math.random() * this.state.randomResults.length).toFixed(0)
        ]
      );
    } else {
      console.log("lets change images");
      this.searchPhotos(searchQuery);
    }
  };

  render() {
    const { searchResults } = this.state;

    return (
      <Layout>
        <Banner handleSearch={this.handleSearch} />
        <Listing results={searchResults} />
      </Layout>
    );
  }
}

export default Home;
