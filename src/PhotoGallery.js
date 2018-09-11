import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import PhotoGalleryItem from "./PhotoGalleryItem";
import "./PhotoGallery.css";

const propTypes = {
  photos: PropTypes.array.isRequired
};

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };

    this.nextPhoto = this.nextPhoto.bind(this);
    this.previousPhoto = this.previousPhoto.bind(this);
  }

  nextPhoto() {
    const {selectedIndex} = this.state;
    const {photos} = this.props;
    if (selectedIndex === photos.length - 1) {
      // When going right from end of photos array wrap to start of photos
      this.setState({selectedIndex: 0});
    } else {
      this.setState({selectedIndex: selectedIndex + 1});
    }
  }

  previousPhoto() {
    const {selectedIndex} = this.state;
    const {photos} = this.props;
    if (selectedIndex === 0) {
      // When going left from index 0 wrap to end of photos
      this.setState({selectedIndex: photos.length - 1});
    } else {
      this.setState({selectedIndex: selectedIndex - 1});
    }
  }

  render() {
    const {selectedIndex} = this.state;
    const {photos} = this.props;

    const focusedPhotoId = selectedIndex; // Used to manage animation, safe to use index. Generally indexes are not good React keys.
    const focusedPhoto = photos[selectedIndex];

    return (
      <div className="PhotoGallery">
        <h4 className="PhotoGallery-Heading">Photo Gallery</h4>
        <div className="PhotoGallery-ContentContainer">
          {photos.length === 0 && (
            <li className="PhotoGalleryItem-NoPhotosPrompt">No photos found</li>
          )}
          <div className="PhotoGallery-Item">
            <ReactCSSTransitionGroup
              transitionName="SwapPhoto"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {focusedPhoto && (
                <PhotoGalleryItem key={focusedPhotoId} photo={focusedPhoto} />
              )}
            </ReactCSSTransitionGroup>
          </div>
          <div className="PhotoGallery-Controls">
            <button
              type="button"
              onClick={this.previousPhoto}
              className="PhotoGallery-Arrow PhotoGallery-LeftArrow"
            >
              {"<"}
            </button>
            <button
              type="button"
              onClick={this.nextPhoto}
              className="PhotoGallery-Arrow PhotoGallery-RightArrow"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PhotoGallery.propTypes = propTypes;

export default PhotoGallery;
