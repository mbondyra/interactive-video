import React from 'react'
import styled from 'styled-components'
import {media} from '../../media'

const Div = styled.div`
  position: absolute;
  left: 10px;
  top: 11px;
  opacity: 0.7;
  :hover{
    opacity: 1;
  }
  box-sizing: border-box;
  height: 14px;
  border-color: transparent transparent transparent #fff;
  transition: 100ms all ease;
  will-change: border-width;
  cursor: pointer;

  border-style: solid;
  border-width: 7px 0 7px 10px;

  &.pause {
    border-style: double;
    border-width: 0px 0 0px 10px;
  }
  ${media.landscape`
    display: ${props => (props.isMobile && props.fullScreen ? 'none' : 'block')};
  `}
`

export default ({isMobile, fullScreen, active, onClick}) => {
  const className = active ? '' : 'pause';

  return (
    <Div className={className} isMobile={isMobile} fullScreen={fullScreen} onClick={onClick} >
    </Div>
  )
}