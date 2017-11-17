import React from 'react';
import {Container, VideoContainer, Video, PauseButton, FullscreenButton, Controls} from './style'
import ShortDescription from '../ShortDescription'
import axios from 'axios'
import Answer from './Answer'
import {Quiz, Question, Answers} from './style'
import VolumePanel from '../VolumePanel'

const ENDPOINT = 'https://enigmatic-journey-52480.herokuapp.com/Kv9NSb/'
const VIMEO_CONFIG = {
  vimeo: {
    playerOptions: {
      autoplay: false,
      controls: 0,
      showinfo: 0,
      allowFullScreen: 0,
      rel: 0,
      modestbranding: 1
    }
  }
}

export default class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: null,
      data: null,
      question: null,
      answer: null,
      volume: 0.8,
      playing: false,
      quizVisible: false,
      videoVisible: false,
      controlsVisible: false,
      fullscreen: false
    }
  }

  componentWillMount() {
    axios.get(ENDPOINT)
      .then(res => {
        this.setState({
          data: res.data,
          question: res.data[0]
        })
      })
  }

  componentDidMount() {
    this.setState({video: this.video})
    document.addEventListener('mousemove', ()=>{
      let inactivityTimeout = null;
      if (this.video.playing) {
        this.setState({
          controlsVisible: true
        // }, ()=>{
        //   if (inactivityTimeout != null) {
        //     clearTimeout(inactivityTimeout);
        //   }
        //   inactivityTimeout = setTimeout(()=>{
        //     this.setState({
        //       controlsVisible: false
        //     })
        //   }, 1000);
        })
      }
    })
  }

  showQuiz() {
    this.setState({
      quizVisible: true
    })
  }

  togglePlay = () => {
    if (this.state.playing){
      this.video.player.pause()
    } else {
      this.video.player.play()
    }
  }

  setVolume = (value) => {
    this.setState({
      volume: +value
    })
  }

  toggleFullscreen = () => {
    this.setState({
      fullscreen: !this.state.fullscreen
    })
  }

  onTimeUpdate = () => {
    if (!this.video || !this.state.question) return

    const currentTime = this.video.getCurrentTime()
    if (currentTime) {
      const start = this.state.question.time.start
      const end = this.state.question.time.end
      if (currentTime > end) {
        this.repeatLoop(start)
      } else if (currentTime > this.state.question.time.start && currentTime < this.state.question.time.end && !this.state.quizVisible) {
        this.showQuiz()
      }
    }
  }

  repeatLoop(start) {
    this.video.seekTo(start)
  }

  handleAnswer = (answer) => {
    this.setState({
      answer: answer
    });
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
      playing: true
    })
  }

  onPause = () => {
    this.setState({
      playing: false
    })
  }

  render() {
    const question = this.state.question
    return (
      <Container>
        <VideoContainer visible={this.state.videoVisible} fullscreen={this.state.fullscreen}>
          <Video
            onReady={this.showVideo}
            onProgress={this.onTimeUpdate}
            innerRef={this.setVideo}
            ref="video"
            url='https://player.vimeo.com/video/243269540'
            width={1920}
            height={1170}
            progressFrequency={200}
            volume={this.state.volume}
            config={VIMEO_CONFIG}
            onPlay={this.onPlay}
            onPause={this.onPause}
          />
        </VideoContainer>
        <Controls visible={true}>
          <PauseButton active={!this.state.playing} onClick={this.togglePlay}/>
          <VolumePanel value={this.state.volume} onChange={this.setVolume}/>
          <FullscreenButton  active={this.state.fullscreen} onClick={this.toggleFullscreen}/>
        </Controls>
        <Quiz visible={this.state.quizVisible}>
          <Question>
            {question && question.title}
          </Question>
          <Answers>
            {
              question && question.answers && question.answers.map(answer => (
                <Answer key={answer.label} answer={answer} handleAnswer={this.handleAnswer}/>
              ))
            }
          </Answers>
        </Quiz>

        <ShortDescription visible={!this.state.playing}/>
      </Container>
    )
  }
};
