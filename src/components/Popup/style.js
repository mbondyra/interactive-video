import styled from 'styled-components'

export const FONT_FAMILY = `"Avenir Next W01", "Avenir Next", -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif`

export const FullDescription = styled.div`
  box-sizing: border-box;
  font-family: ${FONT_FAMILY};
  left: ${props => (props.visible ? '0' : '-50%' )};
  transition: left 0.2s ease-in;
  width: 50%;
  height: 100vh;
  position: absolute;
  z-index:5;
  color: white;
  background: #262627;
  font-weight: 300;
  font-size: 13px;
  padding: 80px 37px 80px 75px;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.20);
  
  a {
  color: inherit;
  }
`

export const CloseButton = styled.div`
  font-family: ${FONT_FAMILY}
`