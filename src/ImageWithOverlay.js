import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import PrettyLoadImage from './PrettyLoadImage'
import './ImageWithOverlay.css'

export default class ImageWithOverlay extends Component {
  static propTypes = {
    overlay: PropTypes.node,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.url !== nextProps.url) this.setState({height: 0, width: 0})
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    if (this.imageRef) {
      const img = findDOMNode(this.imageRef)
      this.setState({height: parseInt(img.height), width: parseInt(img.width)})
    }
  }

  onImgLoad = ({target: img}) => {
    this.setState({height: parseInt(img.height), width: parseInt(img.width)})
  }

  render() {
    const {overlay, ...props} = this.props
    const {height, width} = this.state
    return (
      <span>
        <PrettyLoadImage ref={(ref) => (this.imageRef = ref)} onLoad={this.onImgLoad} onResize={this.updateDimensions} {...props} />
        {!!width && (
          <div
            className="ImageOverlay"
            style={{
              height,
              right: `calc(50% - ${width / 2}px)`,
              left: `calc(50% - ${width / 2}px)`,
            }}
          >
          <div className="ImageOverlay-Content">
            {overlay}
          </div>
          </div>
        )}
      </span>
    )
  }
}
