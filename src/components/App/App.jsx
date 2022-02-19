import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import api from '../../utils/api';
import SingleCard from '../SingleCard/SingleCard';

function App() {
  const [exchListData, setExchListData] = useState([]);
  const [currExchData, setCurrExchData] = useState({});

  useEffect(() => {
    api
      .getExchanges(10)
      .then((list) => {
        setExchListData(list);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(exchListData, currExchData);
  }, []);

  // preload /exchange path
  useEffect(() => {
    api
      .getExchange('crypto_com')
      .then((data) => {
        setCurrExchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleExchClick = () => {
    api
      .getExchange('crypto_com')
      .then((data) => {
        setCurrExchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <button type='button' onClick={handleExchClick}>
              Load 1 exchange
            </button>
          }
        />
        <Route
          path='exchange'
          element={<SingleCard exchange={currExchData} />}
        />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
