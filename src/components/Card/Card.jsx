import React from 'react';

function Card({ exchange, children, onClick }) {
  return (
    // eslint-disable-next-line
    <div className='Card body__element' onClick={onClick}>
      <h2 className='Card__name'>{exchange.name}</h2>
      {children}
    </div>
  );
}

export default Card;
