import React from 'react';

const CardBack = props => {
  return (
    <div className="card back">
      <ul>
        {props.rollData.ingredients
          .split(', ')
          .map((ingredient, index) => <li key={index}>{ingredient}</li>)}
      </ul>
      <div className="line" />
    </div>
  );
};

export default CardBack;
