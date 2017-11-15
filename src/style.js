import styled from 'styled-components'
import bg from './assets/poster.png'
import play from './assets/play.svg'

export const FONT_FAMILY = `"Avenir Next W01", "Avenir Next", -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif`

export const Wrapper = styled.div`
  font-family: ${FONT_FAMILY}
`
export const Poster = styled.div`
  width: 70vw;
  height: 37vw;
  position: fixed;
  z-index: 2;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-size: 1.2vw;
  overflow: hidden;
  background: url(${bg});
  background-position: center;
  background-size: cover;
`

export const Button = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s ease;
  cursor: pointer;
  display: block;
  position: absolute;
  width: 130px;
  height: 130px;
  background: url(${play}) center;
  background-size: cover;
`

export const Brand = styled.div`
  position: fixed;
  bottom: 30px;
  width:100%;
  text-align: center;
  color: white;
  font-size:13px;
  font-weight: 100;
  a {
    font-weight: 500;
    color: white;
    text-decoration: none;
  } 
`