import React, {Component} from 'react'
import {Description, Truncate} from './style'
import { media } from '../../media'

export default class ShortDescription extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }

  toggleLines = (event) => {
    event.preventDefault()
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const longText = `Lorem ipsum dolor sit amet, nec nibh
      eripuit imperdiet et, sit ut
      meliore eloque ntiam. Adolescens constituto contention.Lorem ipsum dolor sit amet, nec nibh
      eripuit imperdiet et, sit ut
      meliore eloque ntiam. Adolescens constituto contention.Lorem ipsum dolor sit amet, nec nibh
      eripuit imperdiet et, sit ut
      meliore eloque ntiam. Adolescens constituto contention.
    `

    return (
      <Description visible={this.props.visible} mobileVisible={this.props.mobileVisible}>
        <h1>Locked In, the interactive short film made by Typeform.</h1>
        <Truncate expanded={this.state.expanded}>
          {longText}
          <a className="link" href='https://typeform.com/blog'>Read the full article</a>
        </Truncate>
        <a onClick={this.toggleLines}>{this.state.expanded ? 'READ LESS' : 'READ MORE'}</a>
      </Description>
    )
  }
}