import React from 'react';
import PropTypes from 'prop-types';
import DivBarChart from './assets/div-bar';
import EnterExit from './assets/enter-exit';
import SVGBarChart from './assets/svg-bar';

export function D3Demo(props) {
  switch (props.select) {
    case 1:
      return <EnterExit />;
    case 2:
      return <SVGBarChart />;
    case 3:
      return <DivBarChart />;
    default:
      return <div />;
  }
}
D3Demo.propTypes = {
  select: PropTypes.number.isRequired,
};
