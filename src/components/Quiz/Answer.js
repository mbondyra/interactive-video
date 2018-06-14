import React from 'react'
import {AnswerWrapper} from './style'

export default class Answer extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
    this.handleAnswer = this.handleAnswer.bind(this)
    this.setSelected = this.setSelected.bind(this)
    this.setUnselected = this.setUnselected.bind(this)
  }

  setSelected() {
    this.setState({
      selected: true
    })
  }

  setUnselected() {
    if (this) {
      this.setState({
        selected: false
      })
    }
  }

  handleAnswer() {
    this.setSelected()
    setTimeout(this.setUnselected, 800);
    this.props.handleAnswer(this.props.answer)
  }

  render() {
    return (
      <AnswerWrapper onClick={this.handleAnswer} selected={this.state.selected}>{this.props.answer.label}</AnswerWrapper>
    )
  }
}


