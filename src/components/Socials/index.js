import styled from 'styled-components'
import fb from '../../assets/social/Facebook.svg'
import tw from '../../assets/social/twitter.svg'
import ln from '../../assets/social/ln.svg'
import sub from '../../assets/social/Subscribe.svg'
import google from '../../assets/social/Google.svg'
import email from '../../assets/social/Email.svg'
import React from 'react'
import SVG from "react-inlinesvg"
import {media} from '../../media'

const newsletterTf = `https://mbondyra.typeform.com/to/QeCznO`

export const Wrapper = styled.div`

  background: #262627;
  transition: all 1s ease;
  display: inline-block;
  position: fixed;
  bottom: 25px;
  border-top: 1px solid white;
  margin: 10px 5%;
  padding: 15px;
  width: 90%;
  box-sizing: border-box;
  text-align: center;
    
  @media screen and (orientation:landscape) {
    display: none;
    border: none;
    background: none;
  }
  ${media.desktop`
    position: absolute;
    right: 60px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 30px;  
    opacity: ${props => (props.visible ? 1 : 0)};
  `}
`
const popup = window.typeformEmbed.makePopup(newsletterTf, {
  hideHeaders: true,
  hideFooter: true
})

function showNewsletter (ev) {
  ev.preventDefault()
  popup.open()
}

export default ({visible}) => (
  <Wrapper visible={visible}>
    <Social src={fb}/>
    <Social src={tw}/>
    <Social src={ln}/>
    <Social src={sub}/>
    <Social src={google}/>
    <a onClick={showNewsletter} ><Social src={email}/></a>
  </Wrapper>
)

const Social = styled(SVG)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding-left: 10px;
  background:  center no-repeat;
  circle, path, polygon { 
    transition: fill 0.2s linear;
  }
  g:hover circle{
    fill: white;
  }
  g:hover path, g:hover polygon{
    fill: #262627;
  }
`