import React from 'react';
import Quiz from '../Quiz';
import movie from '../../assets/movie.mp4'
import bg from '../../assets/bg.png'
import {Container, VideoContainer, Video} from './style'
import ReactPlayer from 'react-player'

export default class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      video: null
    }
    this.setCurrentTime = this.setCurrentTime.bind(this)
  }

  componentDidMount() {
    this.video.addEventListener('canplay', () => {
      this.setState({
        video: this.video
      })
      this.video.play()
    })
  }

  setCurrentTime(time){
    this.video.currentTime = time
  }

  render() {
    return (
      <Container>
        <VideoContainer>
          <Video preload="auto"
                 innerRef={(video) => {
                   this.video = video
                 }}
                 src={movie}
                 poster={bg}
                 type="video/mp4">
          </Video>
        </VideoContainer>
        {
          this.state.video &&
          <Quiz
            video={this.state.video}
            setCurrentTime={this.setCurrentTime}
          />
        }
      </Container>
    )
  }
};
