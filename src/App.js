import React, {Component} from 'react'
import Movie from './components/Movie'
import {Poster,  Brand, Wrapper, Button,Title} from './style'
import {Socials, Facebook} from './Socials'

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        {/*<Poster onClick={(ev)=>{
          console.log('fdsafa');ev.target.remove()}}>
        <Button/>
        </Poster>*/}
        <Title>LOCKED IN</Title>
        <Brand>An experiment by <a href="https://typeform.com">Typeform|</a></Brand>
        <Socials/>
        <Movie/>
      </Wrapper>
    )
  }
}