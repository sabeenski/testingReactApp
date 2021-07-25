import React from 'react';
import { shallow } from 'enzyme';

import Headline from '.';
import { findByAttr } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline component', () => {
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test header',
        description: 'Some desc',
      };
      wrapper = setUp(props);
    });
    it('renders without errors', () => {
      const component = findByAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });
    it('renders H1', () => {
      const component = findByAttr(wrapper, 'header');
      expect(component.length).toBe(1);
    });

    it('renders desc paragraph', () => {
      const component = findByAttr(wrapper, 'desc');
      expect(component.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('does not render anything', () => {
      const component = findByAttr(wrapper, 'header');
      expect(component.length).toBe(0);
    });
  });
});
