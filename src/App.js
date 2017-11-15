import React, {Component} from 'react'
import Movie from './components/Movie'
import Popup from './components/Popup'
import ShortDescription from './components/ShortDescription'
import {Poster, Button, Brand, Wrapper} from './style'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      started: false,
      popupVisible: false
    }
  }

  startMovie = () => {
    this.setState({
      started: true
    })
  }

  showPopup = () => {
    this.setState({
      popupVisible: true
    })
  }

  closePopup = () => {
    this.setState({
      popupVisible: false
    })
  }

  render() {
    return (
      <Wrapper>
        <Poster>
          <Button onClick={this.startMovie}></Button>
        </Poster>
        {
          this.state.started &&
          <Movie/>
        }
        <ShortDescription open={this.showPopup}/>
        <Popup visible={this.state.popupVisible} close={this.closePopup}/>
        <Brand>An experiment by <a href="https://typeform.com">Typeform|</a></Brand>
      </Wrapper>
    )
  }
}