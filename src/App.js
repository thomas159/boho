import React from 'react'
import { hot } from 'react-hot-loader'
import 'sanitize.css';
import Main from './Components/Main'
import './styles'


class App extends React.Component {
  render() {
    return(
      <Main />
    )
  }
}

export default hot(module)(App)