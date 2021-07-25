import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import { findByAttr } from '../../../utils/index';

/* test() or it() -> Any one of these methods. They are same */

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
    return component;
  });

  it('renders header component without error', () => {
    const wrapper = findByAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('renders a logo', () => {
    const logo = findByAttr(component, 'logoImage');
    expect(logo.length).toBe(1);
  });
});

// BEFORE REFACTORING

/* describe('Header component', () => {
  it('renders header component without error', () => {
    const component = shallow(<Header />);
    console.log(component.debug());
    const wrapper = component.find('.headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('renders a logo', () => {
    const component = shallow(<Header />);
    console.log(component.debug());
    const logo = component.find('.logoImage');
    expect(logo.length).toBe(1);
  });
}); */
