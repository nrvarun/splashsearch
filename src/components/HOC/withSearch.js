import React, { Component } from "react";

const withSearch = PassedComponent => {
  return class extends Component {
    render() {
      return (
        <PassedComponent
          {...this.props}
          {...this.state}
          handleSearch={this.handleSearch}
          results={this.state.searchResults}
        />
      );
    }
  };
};

export default withSearch;
