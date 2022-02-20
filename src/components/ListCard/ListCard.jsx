import React from 'react';
import Card from '../Card/Card';

function ListCard({ exchange, humanDataDict, onClick }) {
  return (
    <li>
      <Card
        customTopClass='Card Card_align_adaptive body__element'
        exchange={exchange}
        onClick={() => onClick(exchange.id)}
      >
        <div className='Card__logo-info-container'>
          <img
            src={exchange.image}
            alt='Exchange logo'
            className='Card__logo Card__logo_size_adaptive'
          />
          <ul className='Card__list'>
            {Object.keys(humanDataDict).map(
              (exchKey) =>
                exchange[exchKey] && (
                  <li className='Card__list-item' key={exchKey}>
                    # {humanDataDict[exchKey]} ~ {exchange[exchKey]}
                  </li>
                )
            )}
          </ul>
        </div>
      </Card>
    </li>
  );
}

export default ListCard;
