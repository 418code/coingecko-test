import React from 'react';

function Card({ exchange, children }) {
  return (
    <div className='Card body__element'>
      <h2 className='Card__name'>{exchange.name}</h2>
      {children}
    </div>
  );
}

export default Card;
