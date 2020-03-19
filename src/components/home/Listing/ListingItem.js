import React from "react";

const ListingItem = props => {
  return (
    <div className="search-result-item">
      <img
        className="search-result-img"
        src={props.src}
        alt={props.description}
      />
    </div>
  );
};

export default ListingItem;
