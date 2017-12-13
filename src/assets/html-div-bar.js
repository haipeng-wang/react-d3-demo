import React, { Component } from 'react';

export default class HtmlDivBarChart extends Component {
  constructor(props) {
    super(props);
    this.data = [10, 15, 20, 25, 30, 35, 40];
  }

  render() {
    const magicNumber = 10;
    return (
      <div>
        <div className={'bar-chart'}>
          <div className={'horizontal-chart'}>
            {
              this.data.map(d => (
                <div key={d} style={{ width: `${d * magicNumber}px` }}>
                  {d}
                </div>))
            }
          </div>
        </div>
      </div>
    );
  }
}
