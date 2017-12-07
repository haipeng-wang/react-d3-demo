import React, { Component } from 'react';
import { D3Demo } from './d3-demo';

export default class Datavisual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 1,
    };
  }
  render() {
    return (
      <div>
        <h1>D3</h1>
        <select onChange={(e) => { this.setState({ select: parseInt(e.target.value, 10) }); }}>
          <option value="1">Enter & Exit</option>
          <option value="2">SVG bar chart</option>
          <option value="3">Div bar chart</option>
        </select>
        <br />
        <br />
        <br />
        <D3Demo select={this.state.select} />
      </div>
    );
  }
}
