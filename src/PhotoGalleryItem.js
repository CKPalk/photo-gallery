import React, {Component} from "react";
import PropTypes from "prop-types";
import "./PhotoGalleryItem.css";

const propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    caption: PropTypes.string
  })
};

function PhotoGalleryItem({placeholder, photo: {url, caption}}) {
  return (
    <div className="GalleryCell">
      <div className="GalleryCell-AspectRatioContainer">
        <div className="GalleryCell-AspectRatioContent">
          {placeholder ? (
            <div className="GalleryCell-Image" />
          ) : (
            <img src={url} alt={caption} className="GalleryCell-Image" />
          )}
          <div className="GalleryCell-Caption">{caption}</div>
        </div>
      </div>
    </div>
  );
}

PhotoGalleryItem.propTypes = propTypes;

export default PhotoGalleryItem;
