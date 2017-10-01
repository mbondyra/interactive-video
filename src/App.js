import React, {Component} from 'react'
import Movie from './components/Movie'
import {Poster, Button} from './style'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      started: false
    }
    this.startMovie = this.startMovie.bind(this)
  }

  startMovie() {
    this.setState({
      started: true
    })
  }

  render() {
    return (
      <div>
        <Poster>
          <Button onClick={this.startMovie}>{'Play'} </Button>
        </Poster>
        {
          this.state.started &&
          <Movie/>
        }
      </div>
    )
  }
}