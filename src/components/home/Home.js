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
    page_no: 1,
    randomResults: [
      "travel",
      "technology",
      "sea",
      "love",
      "art",
      "gamer",
      "movie",
      "monochrome",
      "tranquil"
    ]
  };

  componentDidMount() {
    this.searchPhotos(
      this.state.randomResults[
        (Math.random() * this.state.randomResults.length).toFixed(0)
      ],
      1,
      true
    );
  }

  searchPhotos = (query, page, fresh) => {
    this.setState(
      {
        searchQuery: query,
        page_no: this.state.page_no + 1
      },
      () => {
        unsplashGlobal.search
          .photos(query, page, 30)
          .then(toJson)
          .then(json => {
            // Your code
            const results = json.results;
            if (results.length) {
              if (!fresh) {
                this.setState({
                  searchResults: this.state.searchResults.concat(json.results)
                });
              } else {
                this.setState({
                  searchResults: json.results
                });
              }
            }
          });
      }
    );
  };

  handleSearch = e => {
    const searchQuery = e.target.value;
    this.setState(prevState => {
      return {
        searchQuery: prevState.searchQuery
      };
    });
    if (!this.state.searchQuery === searchQuery) {
      if (searchQuery.length < 1) {
        this.searchPhotos(
          this.state.randomResults[
            (Math.random() * this.state.randomResults.length).toFixed(0)
          ],
          1,
          true
        );
      } else {
        this.searchPhotos(searchQuery, this.state.page_no, false);
      }
    } else {
      this.searchPhotos(searchQuery, 1, true);
    }
  };

  loadMore = keyword => {
    if (keyword === this.state.searchQuery) {
      this.searchPhotos(this.state.searchQuery, this.state.page_no);
    }
  };

  render() {
    const { searchResults, searchQuery, page_no } = this.state;

    return (
      <Layout>
        <Banner handleSearch={this.handleSearch} />
        <Listing
          results={searchResults}
          keyword={searchQuery}
          page={page_no}
          loadMore={this.loadMore}
        />
      </Layout>
    );
  }
}

export default Home;
