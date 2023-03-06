import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test Case For App', () => {
  // eslint-disable-next-line no-unused-expressions
  it('should render button', () => {
    const wrapper = shallow(<App />)
    const buttonElement  = wrapper.find('#ClickMe');
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual('Click Me');
  });
  
  it('increments count by 1 when button is clicked', () => {
    const wrapper = shallow(<App />);
    const buttonElement  = wrapper.find('#ClickMe');
    buttonElement.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('You clicked me :: 1');
  });
})