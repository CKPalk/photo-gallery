import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImageWithOverlay from './ImageWithOverlay'
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

    // Long captions will be ellipse ended
    const maxCaption = 150
    const shortenedCaption = caption.length < maxCaption ? caption : `${caption.slice(0, maxCaption)}...`

    // style={{background: `url(${url}) no-repeat`}}

    return (
      <div className="GalleryCell">
        <ImageWithOverlay
          src={url}
          alt={caption}
          className="GalleryCell-Image"
          overlay={<div className="GalleryCell-Caption">{shortenedCaption}</div>}
        />
      </div>
    )
  }
}
