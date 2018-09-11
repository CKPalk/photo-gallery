import React, {Component} from 'react'
import logo from './logo.svg'
import PhotoGallery from './PhotoGallery'
import './App.css'

// Use free unsplash images and lorem ipsum to create example data
const photos = [
  'https://images.unsplash.com/photo-1533667586627-9f5ddbd42539?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=8a7c79621e51409cd7321376647b7ef3',
  'https://images.unsplash.com/photo-1526974787177-4a5c44054214?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=c6a75a5d003761128e4e7339face2751',
  'https://images.unsplash.com/photo-1524082983062-21c24967d6c9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=1310de7afee719738e296b14192c96bc',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=2a1633366b82a8b7cb2511444085a891',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=82ebecc2bdc1a1a5442d37fc5153bf4a',
  'https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=42348358e221aecde4405f19cff7ed12',
  'https://images.unsplash.com/photo-1519393085459-be21f89585f1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=07729b77d40ad54048f4bf02cda4b889',
  'https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=49a72a345bca8e73292be1364ed1e442',
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=9a3cf1a7f7926112690cf3fe90f5c04d',
  'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=9da9fd54e7a49af20a0b1acd4baa5a93',
  'https://images.unsplash.com/photo-1517079495967-03aed29f98b5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=475ec31d60ec4307bcabbb7b5033a491',
  'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=c19532c4a695ca992a6d3651870aace5',
  'https://images.unsplash.com/photo-1515592559813-3f7dff97e185?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=9cf1379215f398f42ff13949fe457fc9',
  'https://images.unsplash.com/photo-1515304029939-13dfc0ea96a1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=783f7818c61dc9f4e9d1ef9384d0fdb7',
  'https://images.unsplash.com/photo-1514909355215-840cb4413dfa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=7d38bf7b44a654c96b7fd894854a1f83',
  'https://images.unsplash.com/photo-1512114810737-2c5fa4085215?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=410f5f77bed690b4c71d1020593d3256',
  'https://images.unsplash.com/photo-1511819939149-1d8776572b09?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=6501cce58b0786980599fcdad3ffc751',
  'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=44343f8a0b39e8f6ece7b658d640414a',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=fe2406ce4318ad661e8ebc95b6cdffce',
  'https://images.unsplash.com/photo-1507124484497-b7f446e65519?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=bbac79846a11738cf664c5d377aaf6fb',
  'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=fbedf14122404957853ee8a2762537a1',
  'https://images.unsplash.com/photo-1506126279646-a697353d3166?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=969e1609bb442be3c2a305a8e12e699f',
  'https://images.unsplash.com/photo-1506079478915-3f458c5077a7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=455d84f4d7f1cd0fe5ec21039a9bd893',
  'https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=de31e7c95f8260309c1cd4e6cb2fd425',
  'https://images.unsplash.com/photo-1504718844509-d64f7cebe5f5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=5af647bcd70a0b3db7c4de83bc5f1ee2',
  'https://images.unsplash.com/photo-1504615755583-2916b52192a3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=fc3e74ef372c58b2c5df915e1c7cde03',
  'https://images.unsplash.com/photo-1504479519050-de194bc81ba6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=6f1b07d3e1c45215000aafdf4e6db7b5',
  'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=205722c7b9bbd49ed26eb5146fd247e0',
  'https://images.unsplash.com/photo-1504113997323-b989c1635896?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=04234e08c41b5b7ec9d6e91d8e6f1dea',
  'https://images.unsplash.com/photo-1503627381655-17cf0637efc0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2MDU3fQ&s=ee87c69742a3a4291136ac4c7e253ed2',
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
