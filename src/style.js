import styled from 'styled-components'
import bg from './assets/poster.jpg'
import play from './assets/play.svg'

export const FONT_FAMILY = `"Avenir Next W01", "Avenir Next", -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif`

export const Wrapper = styled.div`
  font-family: ${FONT_FAMILY}
`
export const Poster = styled.div`
  width: 58.59vw;
  height: 33.04vw;
  z-index:10000;
  position: fixed;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-size: 1.2vw;
  overflow: hidden;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`

export const Button = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s ease;
  cursor: pointer;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: 100000;
  background: url(${play}) center;
  background-size: cover;
  pointer-events: none;
  :hover{
    opacity: 0.5;
  }
`

export const Brand = styled.div`
  position: fixed;
  bottom: 33px;
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

export const Title = styled.div`
  position: fixed;
  top: 30px;
  width:100%;
  text-align: center;
  color: white;
  font-size:14px;
  font-weight: 400;
`