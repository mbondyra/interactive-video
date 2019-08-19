import styled from 'styled-components'
import {media} from '../../media'

export const Description = styled.div`
	transition: 0.2s all ease-in;
  z-index: 3;
  margin: 0 5%;
  padding: 15px 0;
  box-sizing: border-box;
  color: white;
  display: ${props => (props.fullScreen ? 'none' : 'block')};
  font-family: ApercuLight;
  font-size: 14px;
  line-height: 22px;
  font-weight: lighter;
  letter-spacing: -0.25px;

  // put a lot of empty space for scrolling
  // this makes it easy to hide the adress bar on mobile devices
  ${media.landscape`
    display: ${props => (props.fullScreen ? 'block' : 'block')};
    height: ${props => (props.fullScreen ? '1000px' : 'auto')};
  `}

  ${media.desktop`
    width: 350px;
    height: 280px;
    overflow: auto;
	  opacity: ${props => (props.visible ? '1' : '0')};
	  pointer-events: ${props => (props.visible ? 'inherit' : 'none')};
    position: fixed;
    left: 74px;
    top: 50%;
    transform: translateY(-50%);
  `}
  
  h1 {
    margin: 0;
    margin-bottom: 20px;
    font-family: ApercuLight;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -0.35px;
    font-weight: lighter;

    ${media.desktop`
      font-size: 32px;
      line-height: 44px;
      letter-spacing: -0.5px;
      font-weight: lighter;
    `}
  }
`

export const TextWrapper = styled.div`
  color: #d3d3d3;

  ${media.desktop`
    width: 250px;
  `}

  a {
    font-size: 13px;
    // line-height: 20px;
    vertical-align: middle;
    letter-spacing: 0px;
    border: 1px solid;
    border-radius: 3px;
    padding: 6px 0px;
    padding-top: 8px;
    margin-top: 28px;
    cursor: pointer;
    text-decoration: none;
    transition: .15s ease-in;
    transition-property: color, background-color;
    display: block;
    text-align: center;
    :hover {
      color: #262627;
      background: white;
    }

    ${media.desktop`
      width: 170px;
    `}
  }
`
