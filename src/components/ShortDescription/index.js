import React, {Component} from 'react'
import {Description, TextWrapper} from './style'

export default class ShortDescription extends Component {
  render() {
    const longText = `Step inside our latest content experiment, where you decide what happens. Will you make it out?`

    return (
      <Description visible={this.props.visible} fullScreen={this.props.fullScreen}>
        <h1>Locked In: An Interactive Video by Typeform</h1>
        <TextWrapper>
          {longText}
          <a href='https://www.typeform.com/blog/inside-story/interactive-video/' target="_blank" data-gtm-event="cta_button">Read how we made it</a>
        </TextWrapper>
      </Description>
    )
  }
}