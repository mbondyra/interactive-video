import styled from 'styled-components'
import ReactPlayer from 'react-player'
import fullScreen from '../../assets/controls/fullscreen.svg'
import noFullScreen from '../../assets/controls/no-fullscreen.svg'
import bigPlayButton from '../../assets/controls/big_play_button.svg'
import { media } from '../../media'

export const Container = styled.div`
  position: relative;
  z-index: 6;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 110px;

  ${media.landscape`
    height: 100%;
    padding-top: ${props => (props.fullScreen ? '0px' : '60px')};
    padding-bottom: ${props => (props.fullScreen ? '0px' : '110px')};
  `}

  ${media.desktop`
    height: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
  `}
`
export const VideoContainer = styled.div`
  width: 100%;
  height: 56.25vw;
  position: relative;

  ${media.landscape`
    position: ${props => (props.fullScreen ? 'fixed' : 'relative')};
    transform: translateX(-50%);
    left: 50%;
    width: ${props => (props.fullScreen ? `${props.fullScreenSize.width}px` : '70vw')};
    height: ${props => (props.fullScreen ? `${props.fullScreenSize.height}px` : '39.5vw')};
  `}

  ${media.desktop`
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.15s ease-in;
    left: 50%;
    width: ${props => (props.fullScreen ? `${props.fullScreenSize.width}px` : '70vw')};
    height: ${props => (props.fullScreen ? `${props.fullScreenSize.height}px` : '39.5vw')};
  `}
`

export const VideoBlindLayer = styled.div`
  width: 100%;
  height: 56.25vw;
  z-index: 7;
  cursor: ${props => (props.fullScreen ? 'default' : 'pointer')};
  position: relative;
  opacity: 0;

  ${media.landscape`
    position: ${props => (props.fullScreen ? 'fixed' : 'relative')};
    transform: translateX(-50%);
    left: 50%;
    width: ${props => (props.fullScreen ? `${props.fullScreenSize.width}px` : '70vw')};
    height: ${props => (props.fullScreen ? `${props.fullScreenSize.height}px` : '39.5vw')};
  `}

  ${media.desktop`
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    width: ${props => (props.fullScreen ? `${props.fullScreenSize.width}px` : '70vw')};
    height: ${props => (props.fullScreen ? `${props.fullScreenSize.height}px` : '39.5vw')};
  `}
`

export const Video = styled(ReactPlayer)`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: ${props => (props.fullScreen ? `${props.fullScreenSize.width}px !important` : '100% !important')};
  height: ${props => (props.fullScreen ? `${props.fullScreenSize.height}px !important` : '100% !important')};
  > div {
    background-color: transparent !important;
  }
`

export const Controls = styled.div`
  transition: opacity 0.2s ease-in;
  width: 100%;
  height: 30px;  
  margin: 4px auto 0;
  width: 90%;
  position: relative;
  border-bottom: ${props => (props.fullScreen ? '0px' : '1px solid white')};
  height: 40px;

  ${({ fullScreen }) => fullScreen && media.landscape`
    position: fixed;
    border: none;
    bottom: 15px;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${props => (props.landscapeVisible || !props.fullScreen ? 1 : 0)};
  `}

  ${({ fullScreen }) => fullScreen === false && media.desktop`
    position: fixed;
    width: 90%;
    bottom: 20px;
    margin: 0 5%;
    bottom: 15px;
    border: none;
    opacity: ${props => (props.visible ? 1 : 0)};
  `}

  ${({ fullScreen }) => fullScreen && media.desktop`
    position: fixed;
    border: none;
    bottom: 15px;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${props => (props.visible ? 1 : 0)};
  `}
`

export const BigPlayButton = styled.div`
  position: relative;
  background: url(${bigPlayButton}) center no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${props => (props.isMobile ? 'none' : props.hidden ? 'none' : 'block')};
`

export const FullscreenButton = styled.div`
  position: absolute;
  right: 0;
  top: 7px;
  cursor: pointer;
  background: ${props => (props.active ? `url(${noFullScreen})` : `url(${fullScreen})` )} center no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  opacity: 0.7;
  :hover{
    opacity: 1;
  }
`

export const Title = styled.div`
  position: fixed;
  background: #262627;
  width: 100%;
  height: 60px;
  margin-top: -60px;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-size: 14px;
  font-family: GTAmericanExpandedBold;
  transition: all 0.2s ease-in;
  z-index: 999;
  cursor: pointer;

  div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  ${media.landscape`
    position: fixed;
    top: 60px;
    background: ${props => (props.fullScreen ? 'none' : '#262627')};
    opacity: ${props => (props.visible || !props.fullScreen ? 1 : 0)};
  `}

  ${media.desktop`
    background: none;
    opacity: ${props => (props.visible ? 1 : 0)};
  `}
`

export const Brand = styled.div`
  position: fixed;
  bottom: 20px;
  white-space: nowrap;
  color: white;

  ${media.desktop`
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0px;
  `}

  display: inline-block;
  text-align: center;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0px;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  
  a {
    text-decoration: none;
  } 
`
export const Div = styled.div`
  margin-top:${props => (props.centered ? '17vh' : 'inherit')};
  
  ${media.landscape`
    margin-top: 0;
  `}
`