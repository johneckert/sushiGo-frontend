import React from 'react';
import CardBack from '../components/CardBack';
import TestRenderer from 'react-test-renderer';

const fakeRollData = {
  id: '1',
  imageNumber: '8',
  name: 'Spicy Tuna Roll',
  ingredients: 'Tuna, Chili sauce, Nori, Rice'
};

const component = TestRenderer.create(<CardBack rollData={fakeRollData} />);
const ingredients = component.toJSON()['children'][0]['children'];
const firstIngredientName = ingredients[0]['children'][0];
console.log(component.toJSON());
describe('CardBack', () => {
  test('renders', () => {
    expect(component).toBeDefined();
  });

  test('renders the correct number of ingredients', () => {
    expect(ingredients).toHaveLength(4);
  });

  test('renders ingredient name correctly', () => {
    expect(firstIngredientName).toEqual('Tuna');
  });
});
