import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import SingleCard from '../SingleCard/SingleCard';
import Main from '../Main/Main';

function App() {
  const [exchListData, setExchListData] = useState([]);
  const [currExchData, setCurrExchData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getExchanges(10)
      .then((list) => {
        setExchListData(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleExchClick = (exchId) => {
    api
      .getExchange(exchId)
      .then((data) => {
        setCurrExchData(data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate('/exchange');
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Main
              exchListData={exchListData}
              handleExchClick={handleExchClick}
            />
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
