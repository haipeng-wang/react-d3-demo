import React, { Component } from 'react';
import * as d3 from 'd3';

export class Transition extends Component {
  componentDidMount() {
    d3.select('.transition')
      .select('.background')
      .style('width', '300px')
      .style('height', '200px')
      .transition()
      .duration(10000)
      .style('background-color', 'yellow');
  }

  render() {
    return (
      <div className={'transition'}>
        <div className={'background'} />
      </div>
    );
  }
}
