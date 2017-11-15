import React from 'react';
import {Container, VideoContainer, VideoBindLayer, Video, MuteButton, PauseButton, FullscreenButton} from './style'
import axios from 'axios'
import Answer from './Answer'
import {Quiz, Question, Answers} from './style'

const ENDPOINT = 'https://enigmatic-journey-52480.herokuapp.com/Kv9NSb/'

export default class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,
      question: null,
      answer: null,
      volume: 1,
      paused: false,
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
      if (!this.video.paused) {
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

  toggleMute = () => {
    this.setState({
      volume: +(!this.state.volume)
    })
  }

  togglePlay = () => {
    if (this.state.paused){
      this.video.player.play()
    } else {
      this.video.player.pause()
    }
    this.setState({
      paused: !this.state.paused
    })
  }

  toggleMute = () => {
    this.setState({
      volume: +(!this.state.volume)
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
            url='https://vimeo.com/242772120'
            width={1920}
            height={1170}
            progressFrequency={200}
            volume={this.state.volume}
            config={{
              vimeo: {
                playerOptions: {
                  autoplay: true,
                  controls: 0,
                  showinfo: 0,
                  allowFullScreen: 0,
                  rel: 0,
                  modestbranding: 1
                }
              }
            }}
          />
        </VideoContainer>
        <VideoBindLayer visible={this.state.videoVisible} fullscreen={this.state.fullscreen}/>
        <MuteButton visible={this.state.controlsVisible} active={this.state.volume} onClick={this.toggleMute}/>
        <PauseButton visible={this.state.controlsVisible}  active={this.state.paused} onClick={this.togglePlay}/>
        <FullscreenButton  visible={this.state.controlsVisible} active={this.state.fullscreen} onClick={this.toggleFullscreen}/>
        {
          this.video &&
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
        }
      </Container>
    )
  }
};
