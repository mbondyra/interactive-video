import styled from 'styled-components'
import fb from './assets/social/Facebook.svg'
import tw from './assets/social/twitter.svg'
import ln from './assets/social/ln.svg'
import sub from './assets/social/Subscribe.svg'
import google from './assets/social/Google.svg'
import email from './assets/social/Email.svg'
import React from 'react'


export const Wrapper = styled.div`
  right: 75px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 1s ease;
  display: block;
  position: absolute;
  width: 30px;
`

export const Socials = () => (
  <Wrapper>
    <Social social={fb}/>
    <Social social={tw}/>
    <Social social={ln}/>
    <Social social={sub}/>
    <Social social={google}/>
    <Social social={email}/>
  </Wrapper>
)

const Social = styled.div`
  width: 30px;
  height: 30px;
  background: url(${props => props.social}) center no-repeat;
`