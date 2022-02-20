import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import { socialLogos, infoHuman } from '../../utils/utils';

function SingleCard({ exchange }) {
  const navigate = useNavigate();
  return (
    <Card exchange={exchange}>
      <div className='Card__logo-info-container'>
        <a href={exchange.url}>
          <img
            src={exchange.image}
            alt='Exchange logo'
            className='Card__logo Card__logo_size_adaptive pulse'
          />
        </a>
        <ul className='Card__list'>
          {Object.keys(infoHuman).map(
            (exchKey) =>
              exchange[exchKey] && (
                <li className='Card__list-item' key={exchKey}>
                  # {infoHuman[exchKey]} ~ {exchange[exchKey]}
                </li>
              )
          )}
        </ul>
      </div>
      {exchange.description && (
        <p className='Card__text' key='description'>
          {exchange.description}
        </p>
      )}
      <ul className='Card__list Card__list_direction_horizontal'>
        {Object.keys(socialLogos).map(
          (exchKey) =>
            exchange[exchKey] && (
              <li className='Card__list-item' key={exchKey}>
                <a
                  href={
                    exchKey === 'twitter_handle'
                      ? `http://twitter.com/${exchange[exchKey]}`
                      : exchange[exchKey]
                  }
                  className='Card__link'
                >
                  <img
                    src={socialLogos[exchKey]}
                    alt='Social media icon'
                    className='Card__logo Card__logo_size_small'
                  />
                </a>
              </li>
            )
        )}
      </ul>
      <button type='button' onClick={() => navigate('/')}>
        Go back
      </button>
    </Card>
  );
}

export default SingleCard;
