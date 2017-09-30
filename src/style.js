import styled from 'styled-components'
import bg from './assets/bg.png'

export const Poster = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  z-index: 2;
  position: fixed;
  font-size: 1.2vw;
  overflow: hidden;
`

export const Button = styled.div`
  transition: all 1s ease;
  cursor: pointer;
  display: block;
  position: absolute;
  bottom: 17%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: rgba(255,255,255,0.88);
  text-decoration: none;
  border-radius: 4px;
  width: 130px;
  line-height: 38px;
  background: rgba(21,14,23,0.41);
  border: 1px rgba(255,255,255,0.63) solid;
  overflow:hidden;
  
  :hover {
    background: black;
  }
`
