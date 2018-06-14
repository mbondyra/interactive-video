import styled from 'styled-components'
import ReactPlayer from 'react-player'
import fullScreen from '../../assets/controls/fullscreen.svg'
import noFullScreen from '../../assets/controls/no-fullscreen.svg'
import infoButton from '../../assets/controls/i.svg'
import {media} from '../../media'

export const Container = styled.div`
  position: relative;
  z-index: 6;
  width: 100vw;
  height: 100vh;
`
export const VideoContainer = styled.div`
  width: 100vw;
  height: 57vw;
  position: relative;
  ${media.desktop`
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.15s ease-in;
    left: 50%;
    width: ${props => (props.fullScreen ? '100vw' : 'calc(100vw - 300px)')};
    height: ${props => (props.fullScreen ? '100vh' : '40vw')};
  `}
`

export const VideoBlindLayer = styled.div`
  z-index:7;
  cursor: pointer;
  width: 100vw;
  height: 40vw;
  ${media.desktop`
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    width: ${props => (props.fullScreen ? '100vw' : 'calc(100vw - 300px)')};
    height: ${props => (props.fullScreen ? '100vh' : '40vw')};
  `}
  opacity: 0;
  transition: all 0.2s ease-in;
`


export const Video = styled(ReactPlayer)`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  
 /* @media (min-aspect-ratio: 16/9) {
    height: 300% !important;
    top: -100% !important;
  }
  
  @media (max-aspect-ratio: 16/9) {
    width: 300% !important;
    left: -100% !important;
  }*/
`

export const Controls = styled.div`
  transition: all 0.2s ease-in;
  width: 100%;
    height: 30px;
    
    margin: 4px auto 0;
    width: 90%;
    position: relative;

    border-bottom: 1px solid white;
    
    
    height: 40px;
  ${media.landscape`
    width: 90%;
    position: fixed;
    margin: 0 5%;
    bottom: 10px;
    border: none;
    
    opacity: ${props => (props.visible ? 1 : 0)};
  `}
    ${media.desktop`
    bottom: 20px;
  `}
  
 
`

export const FullscreenButton = styled.div`
  right: 0;
  top: 7px;
  cursor: pointer;
  background: ${props => (props.active ? `url(${noFullScreen})` : `url(${fullScreen})` )} center no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  position: absolute;
`

export const Subtitle = styled.h2`
  
    opacity: ${props => (props.visible ? 1 : 0)};
    
`;

export const Title = styled.div`
  width:100%;
  text-align: center;    
  padding: 10px 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.2s ease-in;
  height: 60px;
  z-index: 100;
  
  h2 {
    font: inherit;
    margin: 0;
   }
  ${media.landscape`
    position: fixed;
    opacity: ${props => (props.visible ? 1 : 0)};
    h2 {
       display: none;  
     }
  `}
  ${media.desktop`
     top: 30px;
     position: fixed;
     opacity: ${props => (props.visible ? 1 : 0)};
     
  `}
`

export const SubtitlesButton = styled.div`
  position: absolute;
  left: 150px;
  background: ${props => (props.active ? `url(${infoButton})` : `url(${infoButton})` )} center no-repeat;
  background-size: contain;
  width: 13px;
  cursor: pointer;
  height: 13px;
`

export const InfoButton = styled.div`
  position: absolute;
  background: url('${infoButton}') center no-repeat;
  left: 210px;
  background-size: contain;
  width: 15px;
  cursor: pointer;
  height: 15px;    
  
  left: 150px;
    top: 9px;
  display: none; 
   
  @media screen and (orientation:landscape) {
    display: block;
  }
  ${media.desktop`
  display: block;
  `}
`

export const Brand = styled.div`
  position: fixed;
  bottom: 20px;
  
  white-space: nowrap;
  ${media.desktop`
    bottom: 33px;
  `}
  display: inline-block;
  text-align: center;
  color: white;
  font-size: 13px;
  font-weight: 100;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  a {
    font-weight: 500;
    color: white;
    text-decoration: none;
  } 
`
export const Div = styled.div`
  
    /* position: ${props => (props.centered ? 'fixed' : 'inherit')};
     top: ${props => (props.centered ? '45%' : 'inherit')};
     left: ${props => (props.centered ? '50%' : 'inherit')};
     transform: ${props => (props.centered ? 'translate(-50%, -50%)' : 'inherit')};
*/
  margin-top:${props => (props.centered ? '17vh' : 'inherit')};
  
  ${media.landscape`
    margin-top: 0;
  `}
`

