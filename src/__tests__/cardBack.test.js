import React from 'react';
import CardBack from '../components/CardBack';
import TestRenderer from 'react-test-renderer';

const fakeRollData = {
  id: '1',
  imageNumber: '8',
  name: 'Spicy Tuna Roll',
  ingredients: 'Tuna, Chili sauce, Nori, Rice'
};

// describe('CardBack', () => {
test('renders', () => {
  const component = TestRenderer.create(<CardBack rollData={fakeRollData} />);
  expect(component).toBeDefined();
});
// });
