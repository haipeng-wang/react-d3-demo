import React, { Component } from 'react';
import * as d3 from 'd3';

export default class SVGBarChart extends Component {
  constructor(props) {
    super(props);
    this.data = [10, 15, 20, 25, 30, 35, 40];
    this.width = 420;
    this.barHeight = 20;
  }
  componentDidMount() {
    const scale = d3.scaleLinear()
      .domain([0, d3.max(this.data)])
      .range([0, this.width]);

    const bar = d3.select(this.el)
      .attr('width', this.width)
      .attr('height', this.barHeight * this.data.length)
      .selectAll('g')
      .data(this.data)
      .enter()
      .append('g')
      .attr('transform', (data, i) => `translate(0, ${i * this.barHeight})`);
    bar.append('rect')
      .attr('width', scale)
      .attr('height', this.barHeight - 1);
    bar.append('text')
      .attr('x', d => scale(d) - 3)
      .attr('y', this.barHeight / 2)
      .attr('dy', '.35em')
      .text(d => d);
  }
  render() {
    return (
      <svg ref={(el) => { this.el = el; }} className={'svg-chart'} />
    );
  }
}
