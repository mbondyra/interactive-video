import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: ${props => (props.active ? `13px` : `9px` )};
  position: absolute;
  left: 0;
  height: 13px;
  transition: all 0.25s ease;
  display: block;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.7;
  top: 11px;
  :hover{
    opacity: 1;
  }
  .left {
    border-radius: 1px;
    height: 100%;
    float: left;
    width: ${props => (props.active ? `50%` : `32%` )};
    background-color: #fff;
    transition: all 0.25s ease;
    overflow: hidden;
  }
  .right {
    border-radius: 1px;
    height: 100%;
    float: right;
    width: ${props => (props.active ? `50%` : `26%` )};
    background-color: #fff;
    transition: all 0.25s ease;
  }
  :hover .left, :hover .right {
    background-color: white;
  }
  .triangle-1,
  .triangle-2 {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    width: 0;
    height: 0;
    border-right: 13px solid #262627;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    transition: transform 0.25s ease;
  }
  .triangle-1 {
    transform: ${props => (props.active ? `translate(0, -50%)` : `translate(0, -100%)` )};
  }
  .triangle-2 {
    transform: ${props => (props.active ? `translate(0, 50%)` : `translate(0, 100%)` )};
  }
`

export default ({active, onClick}) => {
 return (
   <Div onClick={onClick} active={active} >
     <div className="left"></div>
     <div className="right"></div>
     <div className="triangle-1"></div>
     <div className="triangle-2"></div>
   </Div>
 )
}