import React from 'react';

const Donut = ({ name, description, price }) => {
  return (
    <div className="donut">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Donut;