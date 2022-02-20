import React from 'react';
import ListCard from '../ListCard/ListCard';
import { infoHumanMain } from '../../utils/utils';

function Main({ exchListData, handleExchClick }) {
  return (
    <article>
      <h1 className='Main__header'>Top 10 crypto exchanges</h1>
      <ul className='Main__list'>
        {exchListData.map((exch) => (
          <ListCard
            key={exch.name}
            exchange={exch}
            humanDataDict={infoHumanMain}
            onClick={handleExchClick}
          />
        ))}
      </ul>
    </article>
  );
}
export default Main;
