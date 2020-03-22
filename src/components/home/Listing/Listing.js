import React from "react";
import ListingItem from "./ListingItem";

const Listing = props => {
  const { results } = props;

  return (
    <section className="search-listing">
      <ul className="search-results">
        {results.map(result => (
          <li
            className="search-result-grid"
            key={result.id}
            style={{
              minHeight: result.height / 6,
              backgroundColor: result.color
            }}
          >
            <ListingItem item={result} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Listing;
