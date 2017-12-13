import React, { Component } from 'react';
import * as d3 from 'd3';

export default class DivBarChart extends Component {
  constructor(props) {
    super(props);
    this.data = [10, 15, 20, 25, 30, 35, 40];
    this.state = {
      width: 420,
    };
  }
  componentDidMount() {
    const scale = d3.scaleLinear()
      .domain([0, d3.max(this.data)])
      .range([0, this.state.width]);

    d3.select(this.el)
      .select('.horizontal-chart')
      .selectAll('div')
      .data(this.data)
      .enter()
      .append('div')
      .style('width', d => `${scale(d)}px`)
      .text(d => d);

    d3.select(this.el)
      .select('.vertical-chart')
      .selectAll('div')
      .data(this.data)
      .enter()
      .append('div')
      .style('height', d => `${scale(d)}px`)
      .text(d => d);
  }

  render() {
    return (
      <div>
        <div ref={(el) => { this.el = el; }} className={'bar-chart'}>
          <div className={'horizontal-chart'} />
          <div className={'vertical-chart'} />
        </div>
      </div>
    );
  }
}
