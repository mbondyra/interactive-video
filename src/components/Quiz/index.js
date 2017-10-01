import React from 'react'
import axios from 'axios'
import Answer from './Answer'
import {Quiz, Question, Answers} from './style'

const ENDPOINT = 'https://enigmatic-journey-52480.herokuapp.com/Kv9NSb/'

export default class QuizMain extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,
      question: null,
      answer: null,
      userResponded: false,
      quizVisible: false
    }
    this.handleAnswer = this.handleAnswer.bind(this)
    this.onTimeUpdate = this.onTimeUpdate.bind(this)
  }

  setQuizVisible() {
    this.setState({
      quizVisible: true
    })
  }

  componentWillMount() {
    axios.get(ENDPOINT)
      .then(res => {
        this.setState({
          data: res.data,
          question: res.data[0]
        }, () => {
         // this.props.video.addEventListener("timeupdate", this.onTimeUpdate)
        })
      })
  }

  onTimeUpdate() {
    const currentTime = this.props.currentTime
    if (this.userResponded()) {
      this.jumpToNextFragment()
    } else if (currentTime > this.state.question.time.end) {
      this.repeatLoop()
    } else if (currentTime > this.state.question.time.start && !this.state.quizVisible) {
      this.setQuizVisible()
    }
  }

  jumpToNextFragment() {
    this.props.setCurrentTime(this.state.answer.jumpTo)
    this.setState({
      userResponded: false
    })
  }

  repeatLoop() {
    this.props.setCurrentTime(this.state.question.time.start)
  }

  userResponded() {
    return this.state.userResponded
  }

  handleAnswer(answer) {
    this.setUserAnswer(answer)
    setTimeout(() => {
      this.setState({
        userResponded: true
      }, () => {
        this.setNextQuestion(answer)
      })
    }, 800)
  }

  setUserAnswer(answer) {
    this.setState({
      answer: answer
    });
  }

  setNextQuestion(answer) {
    this.setState({
      question: this.state.data[answer.next],
      quizVisible: false
    })
  }

  componentWillUpdate(){
    if (this.state.question && this.state.data){
      this.onTimeUpdate()
    }
  }

  render() {
    const question = this.state.question
    return (
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
    )
  }
}


