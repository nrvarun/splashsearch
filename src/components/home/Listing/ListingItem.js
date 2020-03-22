import React, { useState } from "react";
import { DownloadIcon, LikeIcon } from "../../global/Icons";

const ListingItem = ({ item }) => {
  console.log(item.width, item.height);

  const aspectRatio = Number((item.width / item.height).toFixed(1));

  console.log(aspectRatio);

  const [imageLoaded, setImageLoad] = useState(false);

  const { urls, alt_description, likes, links, user } = item;

  return (
    <div className={`search-result-item ${aspectRatio < 1 ? "tall" : "wide"}`}>
      <img
        className="search-result-img"
        src={imageLoaded ? urls.regular : urls.thumb}
        alt={alt_description}
        onLoad={e => setImageLoad(true)}
      />
      <div className="search-result-content d-flex align-items-center justify-content-between">
        <a
          href={user.portfolio_url}
          rel="noopener noreferer"
          target="_blank"
          className="mr-2"
          style={{ color: "#ffffff" }}
          title={user.name}
        >
          <img
            className="rounded-circle mr-2"
            src={user.profile_image.small}
            alt={user.name}
          />
          <span>{user.name}</span>
        </a>
        <ul className="d-flex align-items-center">
          <li>
            <p className="d-flex align-items-center mb-0">
              <img
                style={{ width: 20, height: 20, marginRight: 5 }}
                src={LikeIcon}
                alt="like"
              />
              <strong>{likes}</strong>
            </p>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferer" href={links.download}>
              <img
                style={{ width: 20, height: 25, marginRight: 10 }}
                src={DownloadIcon}
                alt="download the image"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListingItem;
