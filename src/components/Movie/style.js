import styled, {keyframes} from 'styled-components'
import ReactPlayer from 'react-player'
import play from '../../assets/controls/play.svg'
import pause from '../../assets/controls/pause.svg'
import fullscreen from '../../assets/controls/fullscreen.svg'
import noFullScreen from '../../assets/controls/no-fullscreen.svg'

export const Quiz = styled.div`
	position: absolute;
	width: 80%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: ${props => (props.visible ? 'block' : 'none')};
`;

export const Question = styled.div`        
  color: #FFFFFF;
  position: relative;
  padding: 0;
  cursor: default;
  margin-left: -23px;
  line-height: 140%;
  text-align: left;
  font-weight: 300;
  padding: 12px 0;
  font-size: 22px;
  &:before {
    content: '→';
    width: 30px;
    display: inline-block;
  }
`

export const Answers = styled.div`
  display: inline-block;
`

const blink = keyframes`
	from {
		box-shadow: 0px 0px 0px 1px rgba(255,255,255,0.6);
		border-color: currentColor;
      background: transparent;
	}

	to {
		border-color: transparent;
		box-shadow: none;
      background: rgba(255,255,255,0.1);
	}
`

export const Answer = styled.div`  
  position: relative;      
  color: #FFFFFF;
  border: solid rgba(255,255,255,0.6) 1px;
  box-shadow: ${props => (props.selected ? '0px 0px 0px 1px rgba(255,255,255,0.6)' : 'none')};
  padding: 8px 35px 8px 8px;
  border-radius: 3px;
  margin: 5px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  animation: 0.15s linear 2;
  animation-name: ${props => (props.selected ? blink : 'none' )};
  :hover {
    background: rgba(255,255,255,0.1);
  }
  :after {
    display:inline-block;
    color: ${props => (props.selected ? 'inherit' : 'transparent')};
    content: '✔';
    position: absolute;
    right: 10px;
  }
`

export const Container = styled.div`
  position: relative;
  z-index: 6;
  width: 100vw;
  height: 100vh;
`

export const VideoContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.15s ease-in;
  left: 50%;
  width: ${props => (props.fullscreen ? '100vw' : '58.59vw')};
  height: ${props => (props.fullscreen ? '100vh' : '33.04vw')};
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
  opacity: ${props => (props.visible ? 1 : 0)};
`

export const PauseButton = styled.div`
  position: fixed;
  bottom: 33px;
  left: 75px;
  background: ${props => (props.active ? `url(${play})` : `url(${pause})` )} center no-repeat;
  background-size: cover;
  width: 13px;
  cursor: pointer;
  height: 13px;
`
export const FullscreenButton = styled.div`
  bottom: 33px;
  right: 40px;
  cursor: pointer;
  background: ${props => (props.active ? `url(${noFullScreen})` : `url(${fullscreen})` )} center no-repeat;
  background-size: cover;
  width: 20px;
  height: 20px;
  position: fixed;
`