import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import { TopNav } from 'components';

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
        {/* The currently active route component. */}
        <Outlet />
      </div>
    </Fragment>
  );
}

export default App;
