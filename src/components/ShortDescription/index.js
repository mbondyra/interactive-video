import React, {Component} from 'react'
import {Description} from './style'

export default class ShortDescription extends Component {
  render() {
    return (
      <Description>
        <h1>LOCKED IN</h1>
        <h2>an interactive short film</h2>
        <p>Lorem ipsum dolor sit amet, nec nibh
          eripuit imperdiet et, sit ut
          meliore eloque ntiam. Adolescens constituto contention.</p>
        <p><a onClick={this.props.open}>read more</a></p>
      </Description>
    )
  }
}