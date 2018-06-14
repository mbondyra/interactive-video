import React from 'react';
import {VolumeRange, Volume} from './style'
import InputRange from 'react-input-range'
import SVG from 'react-inlinesvg'
import styled from 'styled-components'
import volume from '../../assets/controls/volume.svg'

export const VolumeSymbol = styled(SVG)`
  svg {
    width: 19px;
    height: 17px;
  }
  .off {
   display:  ${props => (props.value === 0 ? 'block': 'none')};
  }
  .on {
   display:  ${props => (props.value > 0 ? 'block': 'none')};
  }
  .full {
    display:  ${props => (props.value > 0.7 ? 'block': 'none')};
  }
  `
  export const Div = styled.div`
  margin-right: 5px;
  width: 19px;
  
  display: inline-block;
  
`



export default ({value, onChange, onClick}) => (
  <Volume >
    <Div onClick={onClick}>
    <VolumeSymbol src={volume} value={value}/>
    </Div>
    <VolumeRange>
      <InputRange maxValue={1} minValue={0} step={0.05} value={value} onChange={onChange}/>
    </VolumeRange>
  </Volume>
)
