import React from 'react';
import Donut from './Donut';

const DonutList = ({ donuts }) => {
  return (
    <div className="donut-list">
      {donuts.map((donut) => (
        <Donut
          key={donut.ID}
          name={donut.Name}
          description={donut.Description}
          price={donut.Price}
        />
      ))}
    </div>
  );
};

export default DonutList;