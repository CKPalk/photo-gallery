import React, {Component} from 'react'
import logo from './logo.svg'
import PhotoGallery from './PhotoGallery'
import './App.css'

// Use free unsplash images and lorem ipsum to create example data
const photos = [
  'https://images.unsplash.com/photo-1536367340461-06b49ffdf5b3?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=3f1f601f3810b51c96968130c6d85283',
  'https://images.unsplash.com/photo-1536383389102-0ac333c44981?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=f67331c473695f5dced0376902cb398a',
  'https://images.unsplash.com/photo-1536366764833-579c4e583927?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=e1a76c00648cd51f07743259001168a2',
  'https://images.unsplash.com/photo-1536401490150-689044db7e6e?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=282f1f319e287e7b63b57c1166ce5941',
  'https://images.unsplash.com/photo-1536276502222-b10f42bcf71e?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=b77b3ecd234f772c4a43d76b1e9e4923',
  'https://images.unsplash.com/photo-1536366396317-5293d7616c1b?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=69b9fb25d83ae190e5791f0053e7a3f1',
  'https://images.unsplash.com/photo-1536313211362-ad2bdfef9249?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=29312315a321c8c7a34dc231ad9c6609',
  'https://images.unsplash.com/photo-1536303279892-92bcb8f29e6f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=af1aba7b15b1c680138d6360b0e3df0a',
  'https://images.unsplash.com/photo-1536273176101-b3810e5cb3c0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=eb5966971f6340c0e2c605753bcb017b',
  'https://images.unsplash.com/photo-1536342712897-ebfd7f4d887a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=0b9818b06571bfcad65753d14d83c854',
].map((url) => ({
  url,
  caption:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}))

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotoGallery photos={photos} />
      </div>
    )
  }
}

export default App
