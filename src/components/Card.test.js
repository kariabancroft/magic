import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card components', () => {
  it('renders without crashing', () => {
    shallow(<Card />);
  });
});
