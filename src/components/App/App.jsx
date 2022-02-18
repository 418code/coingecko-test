import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import api from '../../utils/api';

function App() {
  const [exchListData, setExchListData] = useState([]);
  const [currExchData, setCurrExchData] = useState([]);

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

  const handleExchClick = () => {
    api
      .getExchange('binance')
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
              Binance
            </button>
          }
        />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
