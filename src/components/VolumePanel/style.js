import styled from 'styled-components'
import volumeFull from '../../assets/controls/volume-full.svg'
import volumeHalf from '../../assets/controls/volume-half.svg'
import volumeNone from '../../assets/controls/volume-none.svg'
import 'react-input-range/lib/css/index.css'

export const Volume = styled.div`
  position: fixed;
  bottom: 25px;
  left: 115px;
`

export const VolumeRange = styled.div`
  display: inline-block;
  width: 50px;
  .input-range__track {
    background-color: #484849;
    border-radius: 0;
    height: 2px;
  }
  .input-range__track--active{
    background-color: white;
  }
  .input-range__slider {
    background-color: white;
    border: none;    
    height: 0.6em;
    font-size: 13px;
    margin-left: -0.4em;
    margin-top: -0.35em;
    width: 0.6em;
  }
  .input-range__label {
    display: none;
  }
`

export const VolumeSymbol = styled.div`
  display: inline-block;
  background: center no-repeat ${props => {
    if (props.value === 0) return `url(${volumeNone})`
    else if (props.value < 0.5)return `url(${volumeHalf})`
    return `url(${volumeFull})`
  }};
  background-size: cover;
  width: 16px;
  height:16px;
  margin: 1px 6px 0 0;
`