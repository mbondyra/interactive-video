import React from 'react';
import {Container, VideoContainer, Video} from './style'
import axios from 'axios'
import Answer from './Answer'
import {Quiz, Question, Answers} from './style'

const ENDPOINT = 'https://enigmatic-journey-52480.herokuapp.com/Kv9NSb/'

export default class Movie extends React.Component {
  constructor() {
    super()
    this.state = {
      video: null,
      data: null,
      question: null,
      answer: null,
      quizVisible: false
    }

    this.setVideo = this.setVideo.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    this.onTimeUpdate = this.onTimeUpdate.bind(this)
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
    this.setState({
      video: this.video
    }, () => {
      setInterval(() => {
        this.onTimeUpdate()
      }, 500)
    })
  }

  showQuiz() {
    this.setState({
      quizVisible: true
    })
  }

  onTimeUpdate() {
    this.video.internalPlayer.getCurrentTime().then((currentTime) => {
      const start = this.state.question.time.start
      const end = this.state.question.time.end
      if (currentTime > end) {
        this.repeatLoop(start)
      } else if (currentTime > this.state.question.time.start && currentTime < this.state.question.time.end && !this.state.quizVisible) {
        this.showQuiz()
      }
    })
  }

  repeatLoop(start) {
    this.video.internalPlayer.seekTo(start)
  }

  handleAnswer(answer) {
    this.setState({
      answer: answer
    });
    setTimeout(() => {
      this.setNextQuestion(answer)
    }, 500)
  }

  setNextQuestion(answer) {
    this.video.internalPlayer.seekTo(this.state.answer.jumpTo)
    this.setState({
      question: this.state.data[answer.next],
      answer: null,
      quizVisible: false
    })
  }

  setVideo(video) {
    this.video = video
  }

  render() {
    const question = this.state.question
    return (
      <Container>
        <VideoContainer>
          <Video
            videoId='Adp4xExi2MM'
            innerRef={this.setVideo}
            opts={{
              height: '390',
              width: '640',
              playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                allowFullScreen: 0,
                rel: 0
              }
            }}
          />
        </VideoContainer>
        {
          this.state.video &&
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
