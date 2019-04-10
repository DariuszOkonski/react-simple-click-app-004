import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Buttons tests', () => {

  it('Buttons renders without a problem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Buttons />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Snapshot matches', () => {
    const wrapper = shallow(<Buttons />);

    expect(wrapper).toMatchSnapshot();
  });

});