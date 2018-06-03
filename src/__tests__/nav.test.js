import React from 'react';
import Nav from '../components/Nav';
import renderer from 'react-test-renderer';

describe('Nav', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Nav />);
    expect(component).toMatchSnapshot();
  });
});
