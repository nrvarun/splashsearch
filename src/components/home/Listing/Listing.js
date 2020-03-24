import React from "react";
import ListingItem from "./ListingItem";
import { FixedSizeGrid } from "react-window";

const Listing = props => {
  const { results, keyword } = props;

  return (
    <section className="search-listing">
      <ul className="search-results">
        {results.map((result, index) => (
          <li
            className="search-result-grid"
            key={index}
            style={{
              minHeight: 400,
              backgroundColor: result.color
            }}
          >
            <ListingItem item={result} />
          </li>
        ))}
      </ul>
      <button
        className="search-load-more"
        onClick={() => {
          props.loadMore(keyword);
        }}
      >
        load more
      </button>
    </section>
  );
};

export default Listing;
