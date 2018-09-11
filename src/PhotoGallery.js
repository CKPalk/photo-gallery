import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PhotoGalleryItem from './PhotoGalleryItem'
import SwipeRegister from './SwipeRegister'
import './PhotoGallery.css'

const propTypes = {
  photos: PropTypes.array.isRequired,
}

class PhotoGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      swapDirection: 'pre-swipe',
    }

    this.nextPhoto = this.nextPhoto.bind(this)
    this.previousPhoto = this.previousPhoto.bind(this)
  }

  nextPhoto() {
    const {selectedIndex} = this.state
    const {photos} = this.props
    if (selectedIndex === photos.length - 1) {
      // When going right from end of photos array wrap to start of photos
      this.setState({selectedIndex: 0, swapDirection: 'right'})
    } else {
      this.setState({selectedIndex: selectedIndex + 1, swapDirection: 'right'})
    }
  }

  previousPhoto() {
    const {selectedIndex} = this.state
    const {photos} = this.props
    if (selectedIndex === 0) {
      // When going left from index 0 wrap to end of photos
      this.setState({selectedIndex: photos.length - 1, swapDirection: 'left'})
    } else {
      this.setState({selectedIndex: selectedIndex - 1, swapDirection: 'left'})
    }
  }

  render() {
    const {selectedIndex, swapDirection} = this.state
    const {photos} = this.props

    const focusedPhotoId = selectedIndex // Used to manage animation, safe to use index. Generally indexes are not good React keys.
    const focusedPhoto = photos[selectedIndex]

    return (
      <div className="PhotoGallery">
        <h4 className="PhotoGallery-Heading">
          <span style={{fontSize: '2em'}}>📸</span>{' '}
          <span style={{display: 'inline-block'}}>
            Photo Gallery<br />
          </span>
        </h4>
        <div className="PhotoGallery-ContentContainer">
          {photos.length === 0 && <li className="PhotoGalleryItem-NoPhotosPrompt">No photos found</li>}
          <SwipeRegister swipeDistance={80} onSwipeRight={this.previousPhoto} onSwipeLeft={this.nextPhoto}>
            <div className="PhotoGallery-Item">
              <ReactCSSTransitionGroup
                transitionName={`SwapPhoto-${swapDirection}`}
                transitionAppearTimeout={400}
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}
              >
                {focusedPhoto && <PhotoGalleryItem key={focusedPhotoId} photo={focusedPhoto} />}
              </ReactCSSTransitionGroup>
            </div>
          </SwipeRegister>
          <div className="PhotoGallery-Controls">
            <button type="button" onClick={this.previousPhoto} className="PhotoGallery-Arrow PhotoGallery-LeftArrow">
              {'<'}
            </button>
            <span>
              {selectedIndex + 1} / {photos ? photos.length : '-'}
            </span>
            <button type="button" onClick={this.nextPhoto} className="PhotoGallery-Arrow PhotoGallery-RightArrow">
              {'>'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

PhotoGallery.propTypes = propTypes

export default PhotoGallery
