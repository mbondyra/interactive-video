import React from 'react'
import Quiz from '../Quiz'
import VolumePanel from '../VolumePanel'
import ShortDescription from '../ShortDescription'
import Socials from '../Socials'
import PauseButton from '../PauseButton'
import Stopwatch from 'timer-stopwatch'
import {
  Title,
  Brand,
  Container,
  VideoContainer,
  Video,
  FullscreenButton,
  Controls,
  VideoBlindLayer,
  Div,
  BigPlayButton,
} from './style'
import data from './G9UJ94.json'


const countdown = new Stopwatch(10000)
const NEWSLETTER_TYPE_FORM_URL = `https://interact.typeform.com/to/lgPJgE`
const NUMBER_OF_INTERACTIONS = 2
const typeformPopup = window.typeformEmbed.makePopup(NEWSLETTER_TYPE_FORM_URL, {
  hideHeaders: true,
  hideFooter: true
})
let currentNumberOfInteractions = 0

export default class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      data: data,
      question: data[0],
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
      fullScreenWidth: 1280,
      fullScreenHeight: 720
    }

    this._onResize = () => {
      const width = 1280;
      const height = 720;
      const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const scale_w = viewportWidth / width;
      const scale_h = viewportHeight / height;
      const scale = scale_w > scale_h ? scale_w : scale_h;

      this.setState({
        fullScreenWidth: scale * width,
        fullScreenHeight: scale * height,
      });
    }
  }

  componentDidMount() {
    this.setState({video: this.video})
    this.disappearAfterTimeout()

    countdown.onDone(() => {
      this.showNewsletter();
    })

    // show the popup when you try to leave the website
    // only if the user haven't seen the popup already
    document.addEventListener('mouseout', this._onMouseout);
    window.addEventListener('resize', this._onResize);
    this._onResize();
  }

  componentWillUnmount() {
    document.removeEventListener('mouseout', this._onMouseout);
    window.removeEventListener('resize', this._onResize);
  }

  isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
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
      this.setState({
        infoVisible: true,
      })
    } else {
      this.video.player.play()
      this.setState({
        infoVisible: false,
      })
    }
  }

  pause = () => {
    this.video.player.pause();
  }

  setVolume = (value) => {
    const prevVolume = this.state.volume !== this.state.prevVolume ? this.state.volume : this.state.prevVolume
    this.setState({
      volume: +value,
      prevVolume: prevVolume
    })
  }

  toggleMute = () => {
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

  onTimeUpdate = () => {
    if (!this.video || !this.state.question) return

    const currentTime = this.video.getCurrentTime()
    if (currentTime) {
      const start = this.state.question.time.start
      const end = this.state.question.time.end
      if (currentTime >= end && this.state.quizVisible) {
        this.video.seekTo(start)
      } else if (currentTime >= this.state.question.time.start && currentTime <= this.state.question.time.end && !this.state.quizVisible) {
        this.showQuiz()
      }
    }
  }

  showNewsletter () {
    this.pause();
    typeformPopup.open();
    countdown.stop();
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

    // This one is to fix the crazy vimeo pause button
    // that randomly stays on the screen while the video is playing
    this.video.player.pause();
    this.video.player.play();

    this.setState({
      question: this.state.data[answer.next],
      answer: null,
      quizVisible: false
    })

    currentNumberOfInteractions = currentNumberOfInteractions + 1;
    if (currentNumberOfInteractions >= NUMBER_OF_INTERACTIONS) {
      countdown.start();
    }
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
    })
  }

  onHeaderClick = () => {
    window.location.reload(false);
  }

  render() {
    return (
      <Container fullScreen={this.state.fullScreen}>
        <Title onClick={this.onHeaderClick} fullScreen={this.state.fullScreen} visible={(this.state.disappearingSections && this.state.started) || !this.state.started}>
          <div>LOCKED IN</div>
        </Title>
        <Div centered = {this.state.fullScreen}>
          <VideoContainer visible={this.state.videoVisible} fullScreen={this.state.fullScreen} fullScreenSize={{width: this.state.fullScreenWidth, height: this.state.fullScreenHeight}}>
            <Video
              onReady={this.showVideo}
              onProgress={this.onTimeUpdate}
              onPlay={this.onPlay}
              onPause={this.onPause}
              onStart={this.onStart}
              innerRef={this.setVideo}
              volume={this.state.volume}
              url='https://player.vimeo.com/video/243269540'
              progressFrequency={200}
              fullScreen={this.state.fullScreen}
              fullScreenSize={{width: this.state.fullScreenWidth, height: this.state.fullScreenHeight}}
            />
            <BigPlayButton hidden={this.state.playing} isMobile={this.isMobile()} />
            <VideoBlindLayer fullScreen={this.state.fullScreen} onClick={this.togglePlay} fullScreenSize={{width: this.state.fullScreenWidth, height: this.state.fullScreenHeight}}/>
            <Quiz playing={this.state.playing} visible={this.state.quizVisible} question={this.state.question} handleAnswer={this.handleAnswer}/>
          </VideoContainer>
          <Controls fullScreen={this.state.fullScreen} landscapeVisible={(this.state.disappearingSections && this.state.started) || !this.state.started} visible={this.state.disappearingSections && this.state.started}>
            <PauseButton isMobile={this.isMobile()} fullScreen={this.state.fullScreen} active={!this.state.playing} onClick={this.togglePlay}/>
            <VolumePanel isMobile={this.isMobile()} value={this.state.volume} onChange={this.setVolume} onClick={this.toggleMute}/>
            <FullscreenButton active={this.state.fullScreen} onClick={this.toggleFullscreen}/>
          </Controls>
        </Div>
        <ShortDescription visible={this.state.infoVisible} fullScreen={this.state.fullScreen}/>
        <Socials typeformPopup={typeformPopup} mobileVisible={!this.state.fullScreen} pause={this.pause} visible={this.state.disappearingSections || !this.state.started}/>
        <Brand>an experiment by <a target="blank" href="https://www.typeform.com">Typeform</a></Brand>
      </Container>
    )
  }
}
