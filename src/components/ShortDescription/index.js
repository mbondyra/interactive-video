import React, {Component} from 'react'
import {Description} from './style'
import Truncate from 'react-truncate';

export default class ShortDescription extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      expanded: false,
      truncated: false
    };

    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated
      });
    }
  }

  toggleLines(event) {
    event.preventDefault();

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
          meliore eloque ntiam. Adolescens constituto contention.`
    /*return (
      <Description>
        <h1>Locked In, the interactive short film  made by Typeform.</h1>
        <Truncate lines={3} onClick={this.props.open} ellipsis={<span><span>... </span><p><a href='/link/to/article'>READ MORE ></a></p></span>}>
          {longText}
        </Truncate>

      </Description>*/

    const lines =3

    const {
      expanded,
      truncated
    } = this.state;

    return (
      <Description visible={this.props.visible}>
        <h1>Locked In, the interactive short film  made by Typeform.</h1>
        <Truncate
          lines={!expanded && lines}
          ellipsis={(
            <span>... <a onClick={this.toggleLines}>READ MORE</a></span>
          )}
          onTruncate={this.handleTruncate}
        >
          {longText}
        </Truncate>
        {!truncated && expanded && (
          <div><a className="link" href='https://typeform.com/blog'>Read the full article</a><a onClick={this.toggleLines}>READ LESS</a></div>
        )}
      </Description>
    )
  }
}