import React, {Component} from 'react'

export default class PrettyLoadImage extends Component {
  state = {
    loaded: false,
  }

  onLoad = () => {
    this.setState({loaded: true})
  }

  render() {
    const {loaded} = this.state
    const {style, ...props} = this.props
    const hiddenStyle = {
      ...style,
      ...(loaded ? {} : {display: 'none'}),
    }

    return <img {...props} style={hiddenStyle} onLoad={this.onLoad} />
  }
}
