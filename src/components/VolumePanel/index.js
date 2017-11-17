import React from 'react';
import {VolumeRange, VolumeSymbol, Volume} from './style'
import InputRange from 'react-input-range'

export default class VolumePanel extends React.Component {
  render() {
    return (
    <Volume>
      <VolumeSymbol value={this.props.value}/>
      <VolumeRange>
        <InputRange maxValue={1} minValue={0} step={0.05} value={this.props.value} onChange={this.props.onChange} />
      </VolumeRange>
    </Volume>
    )
  }
};
