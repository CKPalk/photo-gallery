import React, {Component} from "react";
import PropTypes from "prop-types";
import "./PhotoGalleryItem.css";

const propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    caption: PropTypes.string
  }).isRequired
};

function PhotoGalleryItem({photo: {url, caption}}) {
  return (
    <li className="GalleryCell">
      <div className="GalleryCell-AspectRatioContainer">
        <div className="GalleryCell-AspectRatioContent">
          <img src={url} alt={caption} className="GalleryCell-Image" />
          <div className="GalleryCell-Caption">{caption}</div>
        </div>
      </div>
    </li>
  );
}

PhotoGalleryItem.propTypes = propTypes;

export default PhotoGalleryItem;
