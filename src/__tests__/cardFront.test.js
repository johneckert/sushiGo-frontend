import React from 'react';
import CardFront from '../components/CardFront';
import renderer from 'react-test-renderer';

const fakeRollData = {
  id: '1',
  imageNumber: '8',
  name: 'Spicy Tuna Roll',
  ingredients: 'Tuna, Chili sauce, Nori, Rice'
};

describe('CardFront', () => {
  it('renders correctly', () => {
    const component = renderer.create(<CardFront rollData={fakeRollData} />);
    expect(component).toMatchSnapshot();
  });
});
