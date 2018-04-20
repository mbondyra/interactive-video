import React from 'react'
import Quiz from '../Quiz'
import VolumePanel from '../VolumePanel'
import ShortDescription from '../ShortDescription'
import Socials from '../Socials'
import PauseButton from '../PauseButton'
import {
  Title,
  Subtitle,
  Brand,
  Container,
  VideoContainer,
  Video,
  FullscreenButton,
  Controls,
  VideoBlindLayer,
  InfoButton,
  Div
} from './style'
import axios from 'axios'
import VIMEO_CONFIG from './vimeo-config.json'
const ENDPOINT = 'https://typeform-interactive-movie.herokuapp.com/Kv9NSb.json'


export default class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,
      question: null,
      answer: null,
      fullScreen: false,
      prevVolume: 0.8,
      volume: 0.8,
      started: false,
      playing: false,
      infoVisible: true,
      quizVisible: false,
      videoVisible: false,
      disappearingSections: true,
    }
  }

  componentWillMount() {
    axios.get(ENDPOINT).then(res => {
      this.setState({
        data: res.data,
        question: res.data[0]
      })
    })
  }

  componentDidMount() {
    this.setState({video: this.video})
    this.disappearAfterTimeout()
  }

  disappearAfterTimeout() {
    let interval = 1
    setInterval(() => {
      if (interval === 3) {
        hide()
      }
      interval++
    }, 1000)
    const hide = () => {
      this.setState({disappearingSections: false})
      interval = 1
    }
    const show = () => {
      this.setState({disappearingSections: true})
      interval = 1
    }
    document.addEventListener('mousemove', show)
    document.addEventListener('click', show)
  }

  showQuiz() {
    this.setState({
      quizVisible: true
    })
  }

  togglePlay = () => {
    if (this.state.playing) {
      this.video.player.pause()
    } else {
      this.video.player.play()
    }
  }

  setVolume = (value) => {
    const prevVolume = this.state.volume !== this.state.prevVolume ? this.state.volume : this.state.prevVolume
    this.setState({
      volume: +value,
      prevVolume: prevVolume
    })
  }

  toggleMute = () => {
    console.log("hola")
    if (this.state.volume === 0) {
      this.setVolume(this.state.prevVolume)
    } else {
      this.setVolume(0)
    }
  }

  toggleFullscreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen
    })
  }

  toggleInfo = () => {
    this.setState({
      infoVisible: !this.state.infoVisible
    })
    this.togglePlay()
  }

  onTimeUpdate = () => {
    if (!this.video || !this.state.question) return

    const currentTime = this.video.getCurrentTime()
    if (currentTime) {
      const start = this.state.question.time.start
      const end = this.state.question.time.end
      if (currentTime > end) {
        this.video.seekTo(start)
      } else if (currentTime > this.state.question.time.start && currentTime < this.state.question.time.end && !this.state.quizVisible) {
        this.showQuiz()
      }
    }
  }

  handleAnswer = (answer) => {
    this.setState({
      answer: answer
    })
    setTimeout(() => {
      this.setNextQuestion(answer)
    }, 500)
  }

  setNextQuestion(answer) {
    this.video.seekTo(this.state.answer.jumpTo)
    this.setState({
      question: this.state.data[answer.next],
      answer: null,
      quizVisible: false
    })
  }

  setVideo = (video) => {
    this.video = video
    window.video = video
  }

  showVideo = () => {
    this.setState({
      videoVisible: true
    })
  }

  onPlay = () => {
    this.setState({
      playing: true,
      infoVisible: false
    })
  }

  onPause = () => {
    this.setState({
      playing: false
    })
  }

  onStart = () => {
    this.setState({
      started: true,
      infoVisible: false
    })
  }

  render() {
    return (
      <Container>

        <Title visible={this.state.disappearingSections}>
          LOCKED IN
          <Subtitle visible={!this.state.fullScreen}>
            An interactive short film
          </Subtitle>
        </Title>
        <Div centered = {this.state.fullScreen}>
          <VideoContainer visible={this.state.videoVisible} fullScreen={this.state.fullScreen}>
            <Video
              onReady={this.showVideo}
              onProgress={this.onTimeUpdate}
              onPlay={this.onPlay}
              onPause={this.onPause}
              onStart={this.onStart}
              innerRef={this.setVideo}
              volume={this.state.volume}
              url='https://player.vimeo.com/video/243269540?api=1&background=1'
              width={1920}
              height={1170}
              doNotAllowFullScreen={true}
              frameBorder={1}
              progressFrequency={200}
              vimeoConfig={{iframeParams: {fullscreen: 0}}}
            />
            <VideoBlindLayer onClick={this.togglePlay}/>
            <Quiz visible={this.state.quizVisible} question={this.state.question} handleAnswer={this.handleAnswer}/>
          </VideoContainer>
          <Controls visible={this.state.disappearingSections && this.state.started}>
            <PauseButton active={!this.state.playing} onClick={this.togglePlay}/>
            <VolumePanel value={this.state.volume} onChange={this.setVolume} onClick={this.toggleMute}/>
            <FullscreenButton active={this.state.fullScreen} onClick={this.toggleFullscreen}/>
            <InfoButton onClick={this.toggleInfo}/>
          </Controls>
        </Div>
        <ShortDescription visible={this.state.infoVisible} mobileVisible={!this.state.fullScreen}/>
        <Socials visible={this.state.disappearingSections || !this.state.started}/>
        <Brand>An experiment by <a target="blank" href="https://typeform.com">Typeform|</a></Brand>
      </Container>
    )
  }
}
