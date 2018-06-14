import styled from 'styled-components'
import 'react-input-range/lib/css/index.css'

export const Volume = styled.div`
  position: absolute;
  margin-top: -7px;
  left: 115px;
  margin-top: 0;
    left: 50px;
    top: 2px;
    
    
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`

export const VolumeRange = styled.div`
  display: inline-block;
  width: 50px;
  .input-range {
    height: 1.6rem;
  }
  .input-range__track {
    background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, #484849 40%, #484849 60%, rgba(0,0,0,0) 60%);
    border-radius: 0;
    height: 12px;
  }
  .input-range__track--active {
    background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, white 40%, white 60%, rgba(0,0,0,0) 60%);
  }
  .input-range__slider {
    background-color: white;
    border: none;    
    height: 0.6em;
    font-size: 13px;
    margin-left: -0.25em;
    margin-top: -0.72em;
    width: 0.6em;
  }
  .input-range__slider:active {
    transform: scale(1.1);
  }
  .input-range__label {
    display: none;
  }
`
