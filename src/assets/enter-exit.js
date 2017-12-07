import React, { Component } from 'react';
import * as d3 from 'd3';

export default class EnterExit extends Component {
  constructor(props) {
    super(props);
    this.data = [1, 2, 3];
  }

  clickButton() {
    d3.select(this.el)
      .select('.enter-border')
      .selectAll('div')
      .data(this.data)
      .text(val => val)
      .enter()
      .append('div')
      .text(val => `${val}--enter`)
      .style('background', 'red');

    d3.select(this.el)
      .select('.exit-border')
      .selectAll('div')
      .data(this.data)
      .text(val => val)
      .exit()
      .remove('div');
  }

  render() {
    return (
      <div ref={(el) => { this.el = el; }} className={'enter-exit'}>
        <button onClick={() => this.clickButton()}>Try enter and exit</button>
        <br />
        <br />
        <div className={'enter-border'}>
          <div />
        </div>
        <div className={'exit-border'}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
