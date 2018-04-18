import React from 'react';

const CardFront = props => {
  console.log(props.rollData.imageNumber);
  return <img src={require(`../images/Sushi-${props.rollData.imageNumber}.png`)} />;
};

export default CardFront;
