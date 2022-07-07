import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home, Launches, Layout, NotFound, OneLaunch, TestForm } from 'views';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* https://reactrouter.com/docs/en/v6/getting-started/overview#configuring-routes */}
      <Routes>
        {/* Nested routes have their paths concatenated to their parents. */}
        <Route path="/" element={<App />}>
          {/*
          Multiple layouts can be created with views grouped into different
          layouts via nesting if they share a common layout and styles.
          */}
          <Route element={<Layout />}>
            {/* index will be rendered if the url isn't any of the below ones. */}
            <Route index element={<Home />} />
            <Route path="launches" element={<Launches />} />
            <Route path="launches/:id" element={<OneLaunch />} />
            <Route path="test-form" element={<TestForm />} />

            {/* Display this component if route doesn't match any above. */}
            <Route path="*" element={<NotFound />} />
            {/* Redirect if route doesn't match any above. */}
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </Route>

          {/* Example of another layout for admin section */}
          {/* <Route path="admin" element={<AdminAreaLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="users" element={<AdminUsers />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
