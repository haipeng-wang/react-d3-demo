import React, { Component } from 'react';
import _ from 'underscore';
import * as d3 from 'd3';

const propName = 'propRecord';
export default class SVGBarChart extends Component {
  constructor(props) {
    super(props);
    this.data = [{ key: 'test0', value: 5 }, { key: 'test1', value: 10 }, { key: 'test2', value: 15 }, { key: 'test3', value: 20 }, { key: 'test4', value: 25 }, { key: 'test5', value: 30 }, { key: 'test6', value: 35 }, { key: 'test7', value: 40 }];
    this.width = 420;
    this.barHeight = 20;
  }

  componentDidMount() {
    this.drawBarChart(this.data);
  }

  setPropLock(d) {
    const prop = d3.select(this).attr(propName);
    return `${prop}-${d.key}(${d.value})`;
  }

  fillColor() {
    d3.select(this)
      .select('rect')
      .style('fill', 'red');
  }

  removeColor() {
    d3.select(this)
      .select('rect')
      .style('fill', '');
  }

  updateData() {
    _.extend(this.data[2], { value: this.data[2].value + 10 });
    this.drawBarChart([this.data[2]]);
  }

  drawBarChart(data = []) {
    const valueList = _.pluck(this.data, 'value');
    const scale = d3.scaleLinear()
      .domain([0, d3.max(valueList)])
      .range([0, this.width]);

    const svg = d3.select(this.el)
      .attr('width', this.width)
      .attr('height', this.barHeight * this.data.length)
      .selectAll('g')
      .data(data, d => d.key);
    this.drawRect(svg.select('rect'), scale);
    this.drawText(svg.select('text'), scale);

    const addedSvg = svg.enter()
      .append('g')
      .attr('transform', (d, i) => `translate(0, ${i * this.barHeight})`)
      .on('mouseover', this.fillColor)
      .on('mouseout', this.removeColor);
    this.drawRect(addedSvg.append('rect'), scale);
    this.drawText(addedSvg.append('text'), scale);
  }
  drawRect(selection, scale) {
    selection.transition()
      .attr('width', d => scale(d.value))
      .attr('height', this.barHeight - 1)
      .attr(propName, this.setPropLock);
  }
  drawText(selection, scale) {
    selection.attr('x', d => scale(d.value) - 3)
      .attr('y', this.barHeight / 2)
      .attr('dy', '.35em')
      .text(d => d.value);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.updateData()}>Update data</button>
        <br />
        <br />
        <svg ref={(el) => { this.el = el; }} className={'svg-chart'} />
      </div>
    );
  }
}
