import React from 'react';
import Answer from './Answer'
import {Wrapper, Question, Answers} from './style'

export default class Quiz extends React.Component {
  render() {
    const question = this.props.question
    return (
      <Wrapper visible={this.props.visible}>
        <Question>
          {question && question.title}
        </Question>
        <Answers>
          {
            question && question.answers && question.answers.map(answer => (
              <Answer key={answer.label} answer={answer} handleAnswer={this.props.handleAnswer}/>
            ))
          }
        </Answers>
      </Wrapper>
    )
  }
};
