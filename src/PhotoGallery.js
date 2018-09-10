import React, {Component} from "react";
import PropTypes from "prop-types";
import PhotoGalleryItem from "./PhotoGalleryItem";
import "./PhotoGallery.css";

const propTypes = {
  photos: PropTypes.array.isRequired
};

class PhotoGallery extends Component {
  render() {
    const {photos} = this.props;

    return (
      <div className="PhotoGallery">
        <h4 className="PhotoGallery-Heading">Photo Gallery</h4>
        <ul className="PhotoGalleryItem-Container">
          {photos.length === 0 && (
            <li className="PhotoGalleryItem-NoPhotosPrompt">No photos found</li>
          )}
          {photos.map((photo, idx) => <PhotoGalleryItem photo={photo} />)}
        </ul>
      </div>
    );
  }
}

PhotoGallery.propTypes = propTypes;

export default PhotoGallery;
