import { Outlet } from 'react-router-dom';

/* 
This can be used as the container for all / some components so a common layout
and styling will be added to whatever component is being rendered.

You can have multiple layouts and group routes into different layouts via
nested routing.
*/

/**
 * @see [Layout Routes](https://reactrouter.com/docs/en/v6/getting-started/concepts#layout-routes)
 */
export const Layout = () => {
  return (
    <div className="container">
      <div>
        <p>layout view</p>
      </div>
      {/* 
      The routed-to child component based on the URL.
      */}
      <Outlet />
    </div>
  );
};
