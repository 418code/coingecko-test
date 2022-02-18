import React, { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<div />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
