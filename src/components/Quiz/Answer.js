import React from 'react'
import {
  AnswerWrapper,
  AnswerKeyboardKey,
  AnswerLabel,
  AnswerBlink,
  AnswerKeyLabel
} from './style'

export default class Answer extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      hovered: false,
    };
    this.handleAnswer = this.handleAnswer.bind(this)
    this.setSelected = this.setSelected.bind(this)
    this.setUnselected = this.setUnselected.bind(this)
    this.setHovered = this.setHovered.bind(this)
    this.unsetHovered = this.unsetHovered.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event) {
    const keyName = event.key;

    if (this.props.answerKey.toUpperCase() === keyName.toUpperCase()) {
      this.handleAnswer();
    }
  }

  componentWillMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
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

  setHovered() {
    this.setState({
      hovered: true
    })
  }

  unsetHovered() {
    this.setState({
      hovered: false
    })
  }

  handleAnswer() {
    this.setSelected()
    setTimeout(this.setUnselected, 800);
    this.props.handleAnswer(this.props.answer)
  }

  render() {
    return (
      <AnswerWrapper
        onMouseEnter={this.setHovered}
        onMouseLeave={this.unsetHovered}
        onClick={this.handleAnswer}
        selected={this.state.selected}>
        <AnswerBlink selected={this.state.selected}></AnswerBlink>
        <AnswerKeyboardKey hovered={this.state.hovered} selected={this.state.selected}>
          <AnswerKeyLabel hovered={this.state.hovered} selected={this.state.selected}>
          <AnswerBlink selected={this.state.selected}></AnswerBlink>
          Key
          </AnswerKeyLabel>
          <AnswerBlink selected={this.state.selected}></AnswerBlink>
          {this.props.answerKey}
        </AnswerKeyboardKey>
        <AnswerLabel>{this.props.answer.label}</AnswerLabel>
      </AnswerWrapper>
    )
  }
}


