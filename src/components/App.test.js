import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App tests', () => {

  it('App renders without a problem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matches', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Header').exists()).toBe(true);
    expect(wrapper.find('Buttons').exists()).toBe(true);
    expect(wrapper.find('Results').exists()).toBe(true);
  })

  it('subtract -10 after changing state', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state().clicks).toEqual(0);
    expect(wrapper.state().result).toEqual(0);

    wrapper.setState({
      clicks: 1,
      result: -10,
    })

    expect(wrapper.state().clicks).toEqual(1);
    expect(wrapper.state().result).toEqual(-10);
  });

  it('subtract -1 after changing state', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state().clicks).toEqual(0);
    expect(wrapper.state().result).toEqual(0);
    wrapper.setState({
      clicks: 1,
      result: -1,
    });
    expect(wrapper.state().clicks).toEqual(1);
    expect(wrapper.state().result).toEqual(-1);
  })

  it('reset result after changing state', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({
      clicks: 1,
      result: 10,
    })
    expect(wrapper.state().clicks).toEqual(1);
    expect(wrapper.state().result).toEqual(10);
    wrapper.setState({
      clicks: 2,
      result: 0,
    })
    expect(wrapper.state().clicks).toEqual(2);
    expect(wrapper.state().result).toEqual(0);
  });

  it('reset all after changing state', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({
      clicks: 1,
      result: 10,
    });
    expect(wrapper.state().clicks).toEqual(1);
    expect(wrapper.state().result).toEqual(10);
    wrapper.setState({
      clicks: 0,
      result: 0,
    })
    expect(wrapper.state().clicks).toEqual(0);
    expect(wrapper.state().result).toEqual(0);
  });

  it('add 1 after changing state', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state().clicks).toEqual(0);
    expect(wrapper.state().result).toEqual(0);
    wrapper.setState({
      clicks: 1,
      result: 1,
    });
    expect(wrapper.state().clicks).toEqual(1);
    expect(wrapper.state().result).toEqual(1);
  });

  it('add 10 after changing state', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state().clicks).toEqual(0);
    expect(wrapper.state().result).toEqual(0);
    wrapper.setState({
      clicks: 1,
      result: 10,
    });
    expect(wrapper.state().clicks).toEqual(1);
    expect(wrapper.state().result).toEqual(10);
  });

});