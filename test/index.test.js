import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Datavisual from '../src/index';

configure({ adapter: new Adapter() });

describe('Datavisual', () => {
  test('should not throw any errors', () => {
    expect(() => {
      renderer.create(<Datavisual />);
    }).not.toThrow();
  });

  test('should match the snapshot', () => {
    const component = renderer.create(<Datavisual />);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
