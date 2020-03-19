import React, { Component } from "react";

import Unsplash, { toJson } from "unsplash-js";

import searchIcon from "../../../assets/icons/search.svg";
import { accessToken } from "../../../Utils/Unsplash";

const unsplash = new Unsplash({
  accessKey: accessToken
});

class Search extends Component {
  handleSearch = e => {
    const query = e.target.value;
    console.log(query);
  };

  render() {
    return (
      <div className="container">
        <div className="search-wrapper">
          <div className="search-wrapper__heading d-md-flex">
            <h2 className="text-white">Splash search</h2>
            <p className="text-white m-0">
              Beautiful, free photos. Gifted by the worlds most generous
              commuity of photographers
            </p>
          </div>
          <label htmlFor="search-input" className="w-100 position-relative">
            <img className="search-input__icon" src={searchIcon} />
            <input
              type="text"
              autoComplete="off"
              id="search-input"
              className="search-input"
              placeholder="Search for high resolution photos - free!"
              onKeyUp={this.handleSearch}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
