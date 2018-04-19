import React from 'react';

const CardFront = props => {
  return (
    <img
      alt={`sushi ${props.rollData.imageNumber}`}
      src={require(`../images/Sushi-${props.rollData.imageNumber}.png`)}
    />
  );
};

export default CardFront;
