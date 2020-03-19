import React from "react";
import ListingItem from "./ListingItem";

const Listing = props => {
  const { results } = props;

  return (
    <section className="search-listing">
      <ul className="search-results">
        {results.map(searchResult => (
          <li
            className="search-result-grid"
            key={searchResult.id}
            height={`${searchResult.height / 5}px`}
          >
            <ListingItem
              src={searchResult.urls.regular}
              alt={searchResult.alt_description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Listing;
