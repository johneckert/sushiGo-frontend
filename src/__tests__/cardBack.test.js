import React from 'react';
import CardBack from '../components/CardBack';
import renderer from 'react-test-renderer';

const fakeRollData = {
  id: '1',
  imageNumber: '8',
  name: 'Spicy Tuna Roll',
  ingredients: 'Tuna, Chili sauce, Nori, Rice'
};

describe('CardBack', () => {
  it('renders correctly', () => {
    const component = renderer.create(<CardBack rollData={fakeRollData} />);
    expect(component).toMatchSnapshot();
  });
});
