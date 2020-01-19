import React from "react";

const Result = props => {
  return (
    <div className="search-result-content">
      <img src={props.src} alt={props.description} />
    </div>
  );
};

export default Result;
