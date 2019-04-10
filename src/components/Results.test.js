import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Results tests', () => {

  it('Results renders without a problem', () => {
    const state = {
      clicks: 0,
      result: 0,
    }
    const div = document.createElement('div');
    ReactDOM.render(<Results state={state} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matches', () => {
    const state = {
      clicks: 0,
      result: 0,
    }
    const wrapper = shallow(<Results state={state} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('h2#first renders', () => {
    const state = {
      clicks: 1,
      result: 0,
    }
    const wrapper = shallow(<Results state={state} />);

    expect(wrapper.find('h2#first').text()).toBe('Number of clicks: 1');
  });

  it('h2#second renders, clicks less than 10', () => {
    const state = {
      clicks: 1,
      result: 0,
    }
    const wrapper = shallow(<Results state={state} />);

    expect(wrapper.find('h2#second').text()).toBe('----------------------');
  });

  it('h2#second renders, clicks more than 10', () => {
    const state = {
      clicks: 11,
      result: 0,
    }
    const wrapper = shallow(<Results state={state} />);

    expect(wrapper.find('h2#second').text()).toBe('CPU overheating');
  });

  it('h2#third renders', () => {
    const state = {
      clicks: 11,
      result: 2,
    }

    const wrapper = shallow(<Results state={state} />);

    expect(wrapper.find('h2#third').text()).toBe('Result: 2');
  });

});