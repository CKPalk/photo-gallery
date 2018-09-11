import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import PrettyLoadImage from './PrettyLoadImage'
import './ImageWithOverlay.css'

export default class ImageWithOverlay extends Component {
  static propTypes = {
    image: PropTypes.node.isRequired,
    overlay: PropTypes.node,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    if (this.imageRef) {
      const img = findDOMNode(this.imageRef)
      this.setState({height: parseInt(img.offsetHeight), width: parseInt(img.offsetWidth)})
    }
  }

  onImgLoad = ({target: img}) => {
    this.setState({height: parseInt(img.offsetHeight), width: parseInt(img.offsetWidth)})
  }

  render() {
    const {overlay, ...props} = this.props
    const {height, width} = this.state

    return (
      <span>
        <PrettyLoadImage ref={(ref) => (this.imageRef = ref)} onLoad={this.onImgLoad} {...props} />
        {width > 100 && (
          <div
            className="ImageOverlay"
            style={{
              top: height - 80,
              right: `calc(50% - ${width / 2}px)`,
              left: `calc(50% - ${width / 2}px)`,
            }}
          >
            {overlay}
          </div>
        )}
      </span>
    )
  }
}
