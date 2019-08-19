import styled from 'styled-components'
import fb from '../../assets/social/facebook.svg'
import tw from '../../assets/social/twitter.svg'
import ln from '../../assets/social/ln.svg'
import sub from '../../assets/social/subscribe.svg'
import email from '../../assets/social/email.svg'
import React from 'react'
import SVG from "react-inlinesvg"
import {media} from '../../media'

const mainURL = 'https://www.labs.typeform.com/interactive-video/';
const makeLink = (source) => {
  return `${mainURL}?utm_source=${source}&utm_medium=social&utm_campaign=interactive-video`;
}
const shareTitle = `The interactive short film made by Typeform`;
const makeShareText = (link, tags) => {
  return encodeURIComponent(`
  Experience our first interactive video, where you decide what happens in the story. Think you can make it out? Take part in the experiment here:
  ${link} ${tags || ''}
  `);
}
const fbURL = makeLink('facebook.com');
const twURL = makeLink('twitter.com');
const liURL = makeLink('linkedin.com');
const tags = '#videomarketing #innovation';

const socialURLMap = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fbURL)}`,
  twitter: `https://twitter.com/intent/tweet?text=${makeShareText(twURL, tags)}`,
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(liURL)}&title=${shareTitle}&summary=${makeShareText(liURL, tags)}`,
};

const Wrapper = styled.div`
  background: #262627;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid white;
  margin: 0px 5%;
  padding: 15px;
  padding-bottom: 50px;
  width: 90%;
  box-sizing: border-box;
  text-align: center;
  display: ${props => (props.mobileVisible ? 'block' : 'none')};
   
  ${media.desktop`
    right: 2.8%;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 30px;
    opacity: ${props => (props.visible ? 1 : 0)};
    border: none;
    background: none;
  `}
`
const IconsWrapper = styled.div`
  a {
    text-decoration: none;

    ${media.desktop`
      margin-top: 8px;
      display: block;
    `}
  }

  ${media.desktop`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
  `}
`

const getWindowOptions = (socialMediaName) => {
  let width;
  let height;

  if (socialMediaName === 'facebook') {
    width = 600;
    height = 400;
  }

  if (socialMediaName === 'twitter') {
    width = 500;
    height = 350;
  }

  const left = (window.innerWidth / 2) - (width / 2);
  const top = (window.innerHeight / 2) - (height / 2);

  return [
    'resizable,scrollbars,status',
    'height=' + height,
    'width=' + width,
    'left=' + left,
    'top=' + top,
  ].join();
}

const openSharePopup = (e, pause, socialMediaName) => {
  e.preventDefault()
  pause();
  window.open(socialURLMap[socialMediaName], 'Share the video', getWindowOptions(socialMediaName));
}

function showNewsletter (e, pause, typeformPopup) {
  e.preventDefault()
  pause();
  typeformPopup.open()
}

const mailHref = `mailto:?subject=${shareTitle}&body=${makeShareText(mainURL)}`

export default ({typeformPopup, mobileVisible, pause, visible}) => (
  <Wrapper mobileVisible={mobileVisible} visible={visible}>
    <IconsWrapper>
      <a onClick={(e) => {openSharePopup(e, pause, 'facebook')}} ><Social src={fb}/></a>
      <a onClick={(e) => {openSharePopup(e, pause, 'twitter')}} ><Social src={tw}/></a>
      <a onClick={(e) => {openSharePopup(e, pause, 'linkedin')}} ><Social src={ln}/></a>
      <a href={mailHref}><Social src={email}/></a>
      <a onClick={(e) => {showNewsletter(e, pause, typeformPopup)}} ><Social src={sub}/></a>
    </IconsWrapper>
  </Wrapper>
)

const Social = styled(SVG)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background: center no-repeat;
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