import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import { TopNav } from 'components';

function App() {
  return (
    <Fragment>
      <TopNav />
      {/*
      Layout hack, render a static nav behind the fixed nav so other elements
      below the nav aren't hidden behind the fixed nav.
      */}
      <TopNav position="static" />

      {/* 
      Renders routed-to child component, which in this case will be the Layout,
      which also uses Outlet to render it's routed-to child component:

      E.g., App -> Layout (App's Outlet) -> Home (Layout's Outlet)
      App -> Layout (App's Outlet-> Launches (Layout's Outlet)
      */}
      <Outlet />
    </Fragment>
  );
}

export default App;
