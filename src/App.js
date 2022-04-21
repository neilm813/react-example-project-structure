import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import './App.css';
import { TopNav } from 'components';
import { Home, Launches, OneLaunch } from 'views';

function App() {
  return (
    <Fragment>
      <TopNav />
      {/*
      Layout hack, render nav under fixed nav so first elements below
      aren't hidden behind the fixed nav
      */}
      <TopNav position="static" />
      <div className="container">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launches/:id" element={<OneLaunch />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
