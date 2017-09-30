import styled from 'styled-components'

export const Subtitles = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 14%;
  bottom: 20px;
  text-align: center;
  color: white;
  font-weight: 500;
  z-index: 1000000000;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  line-height: 30px;
  background: none;
  text-shadow: 0 0 10px black;
`

export const Container = styled.div`
  position: relative;
  z-index: 3;
  width: 100vw;
  height: 100vh;
`

export const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
`
export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  @media (min-aspect-ratio: 16/9) {
    height: 300%;
    top: -100%;
  }
  
  @media (max-aspect-ratio: 16/9) {
    width: 300%;
    left: -100%;
  }
`
