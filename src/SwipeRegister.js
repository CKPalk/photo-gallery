import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class SwipeRegister extends Component {
  static propTypes = {
    swipeDistance: PropTypes.number,
  }

  static defaultProps = {
    swipeDistance: 350,
  }

  constructor(props) {
    super(props)
    this.state = {
      touching: false,
      touchStartX: null,
      triggeredLeft: false,
      triggeredRight: false,
    }
  }

  handleStart = (clientX) => {
    this.setState({
      touching: true,
      touchStartX: clientX,
    })
  }

  handleMove = (clientX) => {
    const {triggeredLeft, triggeredRight} = this.state
    if (this.state.touching && !(triggeredLeft || triggeredRight)) {
      const touchX = clientX
      const currTime = Date.now()
      let deltaX = touchX - this.state.touchStartX

      const {swipeDistance, onSwipeLeft, onSwipeRight} = this.props
      if (deltaX < -swipeDistance) {
        onSwipeLeft()
        this.setState({triggeredLeft: true})
      } else if (deltaX > swipeDistance) {
        onSwipeRight()
        this.setState({triggeredRight: true})
      }

      this.setState({
        deltaX,
      })
    }
  }

  handleEnd = () => {
    this.setState({
      triggeredLeft: false,
      triggeredRight: false,
      touching: false,
    })
  }

  handleTouchStart = (touchStartEvent) => {
    touchStartEvent.preventDefault()
    this.handleMotionStart(touchStartEvent.targetTouches[0].clientX)
  }

  handleTouchMove = (touchMoveEvent) => {
    this.handleMove(touchMoveEvent.targetTouches[0].clientX)
  }

  handleTouchEnd = () => {
    this.handleEnd()
  }

  handleMouseDown = (mouseDownEvent) => {
    mouseDownEvent.preventDefault()
    this.handleStart(mouseDownEvent.clientX)
  }

  handleMouseMove = (mouseMoveEvent) => {
    this.handleMove(mouseMoveEvent.clientX)
  }

  handleMouseUp = () => {
    this.handleEnd()
  }

  handleMouseLeave = () => {
    this.handleMouseUp()
  }

  render() {
    const {children} = this.props
    return (
      <span
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        // The following event handlers are for mouse compatibility:
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </span>
    )
  }
}
