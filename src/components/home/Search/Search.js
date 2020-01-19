import React, { Component } from "react";

import "./Search.scss";

import Unsplash, { toJson } from "unsplash-js";

import Result from "./Result";

const unsplash = new Unsplash({
  accessKey: "c6c664149895cd5559d9f0917eb7816d42feb2fb611921dffaefaad6d37cc080"
});

class Search extends Component {
  state = {
    searchResults: []
  };

  componentDidMount() {
    this.searchPhotos("random");
  }

  searchPhotos = query => {
    unsplash.search
      .photos(query, 1, 10)
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
      this.searchPhotos("random");
    } else {
      this.searchPhotos(phrase);
    }
  };

  render() {
    const { searchResults } = this.state;

    return (
      <div>
        <h2>Search Photos:</h2>
        <input type="text" onKeyUp={this.handleSearch} />
        <ul className="search-results">
          {searchResults.map(searchResult => (
            <li
              className="search-result-grid"
              key={searchResult.id}
              height={`${searchResult.height / 5}px`}
            >
              <Result
                src={searchResult.urls.regular}
                alt={searchResult.description}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;
