import styled, {keyframes} from 'styled-components'
import { media } from '../../media'
import check from '../../assets/check.svg'

export const Wrapper = styled.div`
  z-index: 998;
	position: absolute;
	width: 80%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  display: ${props => (props.visible && props.playing ? 'block' : 'none')};
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
    opacity: 0.3;
	}

	to {
    opacity: 0;
	}
`

export const AnswerWrapper = styled.div`  
  display: flex;
  align-items: center;
  position: relative;      
  background: rgba(54, 54, 53, 1);
  color: rgba(239, 233, 222, 1);
  border: solid rgba(239, 233, 222, 1) 1px;
  box-shadow: ${props => (props.selected ? '0px 0px 0px 1px rgba(255,255,255,0.6)' : 'none')};
  padding: 8px 35px 8px 0px;
  border-radius: 3px;
  margin: 7px;
  cursor: pointer;
  :hover {
    background: rgba(95, 93, 90, 1);
  }
  &:before {
    display: 'block';
    fill: #EFE9DE;
    content: ${props => (props.selected ? `url(${check})` : '')};
    right: 10px;
    padding-top: 4px;
    position: absolute;
  }
`

export const AnswerBlink = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  background: ${props => (props.selected ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)' )};
  animation: 0.15s linear 2;
  animation-name: ${props => (props.selected ? blink : '' )};
  animation-iteration-count: infinite;
  animation-direction: forward;
`

export const AnswerKeyboardKey = styled.div`
  position: relative;
  z-index: 6;
  margin-left: 8px;
  padding: 3px;
  padding-top: 4px;
  padding-left: 6px;
  padding-right: 6px;
  border: solid rgba(239, 233, 222, 1) 1px;
  border-radius: 2px;
  border-top-left-radius: ${props => (props.hovered ? '0px' : '2px')};
  border-bottom-left-radius: ${props => (props.hovered ? '0px' : '2px')};
  border-left: ${props => (props.hovered ? '1px solid transparent;' : 'solid rgba(239, 233, 222, 1) 1px;')};
  font-size: 12px;
  font-weight: 600;
  color: ${props => (props.selected ? 'rgba(34, 34, 34, 1)' : 'rgba(239, 233, 222, 1)')};
  background: ${props => (props.selected ? 'rgba(239, 233, 222, 1)' : 'rgba(34, 34, 34, 1)')};

  ${media.tablet`
    font-size: 14px;
  `}
`

export const AnswerKeyLabel = styled.div`
  position: absolute;
  top: -1px;
  right: 100%;
  font-size: 12px;
  font-weight: 300;
  border: solid rgba(239, 233, 222, 1) 1px;
  border-radius: 2px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 0px;
  color: ${props => (props.selected ? 'rgba(34, 34, 34, 1)' : 'rgba(239, 233, 222, 1)')};
  background: ${props => (props.selected ? 'rgba(239, 233, 222, 1)' : 'rgba(34, 34, 34, 1)')};
  display: ${props => (props.hovered ? '' : 'none')};
  padding: 3px;
  padding-top: 4px;
  padding-left: 6px;
  padding-right: 6px;
  
  ${media.tablet`
    font-size: 14px;
  `}
`

export const AnswerLabel = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: rgba(239, 233, 222, 1);
  margin-left: 7px;
  margin-top: 2px;
  width: 100%;

  ${media.tablet`
    font-size: 18px;
  `}
`