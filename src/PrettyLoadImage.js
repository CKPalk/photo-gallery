import React, {Component} from 'react'

export default class PrettyLoadImage extends Component {
  state = {
    loaded: false,
  }

  onLoad = (e) => {
    const {onLoad} = this.props
    if (onLoad) onLoad(e)
    this.setState({loaded: true})
  }

  render() {
    const {loaded} = this.state
    const {style, ...props} = this.props
    const hiddenStyle = {
      ...style,
      ...(loaded ? {} : {opacity: 0}),
    }

    return <img {...props} style={hiddenStyle} onLoad={this.onLoad} />
  }
}
