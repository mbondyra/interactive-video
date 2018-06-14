import styled from 'styled-components'
import {media} from '../../media'

export const Description = styled.div`

	transition: 0.2s all ease-in;
  font-weight: 100;
  font-size: 13px;
  color: white;
  z-index: 3;
  
    overflow: scroll;
    max-height: calc( 100vh - 200px - 57vw );
    
  
    margin: 0 5%;
    padding: 15px 0;
    box-sizing: border-box;
    color: white;
    
	  opacity: ${props => (props.mobileVisible ? '1' : '0')};
  
  ${media.landscape`
  max-height:80vh;
    width: 70vw;
	  opacity: ${props => (props.visible ? '1' : '0')};
	  pointer-events: ${props => (props.visible ? 'inherit' : 'none')};
    position: fixed;
    left: 74px;
    top: 50%;
    transform: translateY(-50%);
  `}
  
  ${media.desktop`
    width: 245px;
  `}
  
  h1 {
    display: none;
    font-weight: 600;
    margin: 0;
    font-size: 13px;
    line-height: 19px;
    margin-bottom: 20px;
    ${media.landscape`
      display: block;
    `}
  }
  a {    
    display: block;
    margin-top: 30px;
    font-weight: 500;
    font-size: 11px;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 1px;
    display: none;
    ${media.landscape`
      display: block;
    `}
    
  }
`

export const Truncate = styled.div`
  
	transition: max-height 0.3s ease-in;
	overflow:hidden;
	
    ${media.landscape`
      
	    max-height: ${props => (props.expanded ? '400px' : '54px')};
    `}
   a { 
    font-weight: 500;
    font-size: 13px;
    border: 1px solid;
    display: inline-block;
    padding: 6px 20px;
    margin-top: 28px;
    transition: .15s ease-in;
    transition-property: color, background-color;
    
    
    display: block;
    text-align: center;
    :hover {
      color: #262627;
      background: white;
    }
  }
`

