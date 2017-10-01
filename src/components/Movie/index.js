import React from 'react';
import Quiz from '../Quiz';
import {Container, VideoContainer, Video} from './style'

export default class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      video: null
    }
    this.setCurrentTime = this.setCurrentTime.bind(this)
    this.getCurrentTime = this.getCurrentTime.bind(this)
    this.setVideo = this.setVideo.bind(this)
  }

  componentDidMount() {
    //window.video = this.video
    this.setState({
      video: this.video,
      currentTime: 0
    })
  }

  setCurrentTime(time) {
    this.video.seekTo(time)
  }

  setVideo(video) {
    this.video = video
  }

  getCurrentTime() {
    this.setState({currentTime: this.video.getCurrentTime()})
  }

  render() {
    return (
      <Container>
        <VideoContainer>
          <Video
            width={640*3}
            height={360*3}
            url='https://youtu.be/Adp4xExi2MM'
            innerRef={this.setVideo}
            playing
            onProgress={this.getCurrentTime}
            progressFrequency={500}
          />
        </VideoContainer>
        {
          this.state.video &&
          <Quiz
            currentTime={this.state.currentTime}
            setCurrentTime={this.setCurrentTime}
          />
        }
      </Container>
    )
  }
};
