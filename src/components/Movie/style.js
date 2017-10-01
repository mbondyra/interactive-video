import styled from 'styled-components'
import ReactPlayer from 'react-player'

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
