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

      {/* 
      Renders routed-to child component, which in this case will be the Layout,
      which also uses Outlet to render it's routed-to child component.

      E.g., App -> Layout -> Home or App -> Layout -> Launches based on url.
      */}
      <Outlet />
    </Fragment>
  );
}

export default App;
