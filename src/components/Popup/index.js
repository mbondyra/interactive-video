import React, {Component} from 'react'
import {FullDescription, CloseButton} from './style'

export default class Popup extends Component {
  render() {
    return (
      <FullDescription visible={this.props.visible}>
        <CloseButton onClick={this.props.close}>x</CloseButton>
        <h1>LOCKED IN</h1>
        <h2>an interactive short film</h2>
        <p>Lorem ipsum dolor sit amet,
          nec nibh eripuit imperdiet et,
          sit ut meliore elo que ntiam.
          Adolescens constituto contentiones ius ne. Falli debet splendide id his. Tibique partiendo incorrupte vix ea, vero mediocrem signiferumque cum in. Vix stet foren sibus maiestatis an, agam dicit nec in. Tibique partiendo incorrupte vix ea,
        </p>
        <p><a href="https://typeform.com/blog">read more</a></p>
      </FullDescription>
    )
  }
}