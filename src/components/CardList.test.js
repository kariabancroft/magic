import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

describe('CardList components', () => {
  it('renders without crashing', () => {
    shallow(<CardList />);
  });
});
