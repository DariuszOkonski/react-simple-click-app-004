import React from 'react';
import ReactDOM from 'react-dom';
import SingleButton from './SingleButton';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SingleButton tests', () => {

  it('SingleButton renders without a problem', () => {
    const btn = {
      type: 'subtract',
      number: -10,
      name: '-10',
      id: 1
    }
    const div = document.createElement('div');
    ReactDOM.render(<SingleButton btnData={btn} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matches', () => {
    const btn = {
      type: 'subtract',
      number: -10,
      name: '-10',
      id: 1
    }
    const wrapper = shallow(<SingleButton btnData={btn} />);
    expect(wrapper).toMatchSnapshot();
  });

});