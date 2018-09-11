import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PrettyLoadImage from './PrettyLoadImage'
import './PhotoGalleryItem.css'

export default class PhotoGalleryItem extends Component {
  static propTypes = {
    photo: PropTypes.shape({
      url: PropTypes.string.isRequired,
      caption: PropTypes.string,
    }),
  }

  render() {
    const {
      photo: {url, caption},
    } = this.props
    return (
      <div className="GalleryCell">
        <div className="GalleryCell-AspectRatioContainer">
          <div className="GalleryCell-AspectRatioContent">
            <div>
              <PrettyLoadImage src={url} alt={caption} className="GalleryCell-Image" />
              <div className="GalleryCell-Caption">{caption}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
