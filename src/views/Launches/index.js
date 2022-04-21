/* 
This view is not meaningfully different currently from the `Launch` Component,
but since the launches view needs to also display a launch, a component was
created to be re-used. 
*/

import { useEffect, useState } from 'react';

import 'App.css';
import { getAllLaunches } from 'services';
import { AxiosErr, CircleDotExpansion, Launch } from 'components';

export const Launches = () => {
  const [launches, setLaunches] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Timeout to check the loading spinner out.
    setTimeout(() => {
      const fetchLaunches = async () => {
        try {
          const data = await getAllLaunches();
          setLaunches(data);
        } catch (e) {
          console.log(e.response);
          setError(e);
        } finally {
          setLoading(false);
        }
      };

      fetchLaunches();
    }, 1500);
  }, []);

  return (
    <div>
      <h2 className="text-center">Photographed Launches</h2>
      <AxiosErr loading={loading} error={error} />
      <CircleDotExpansion loading={loading} />
      {launches &&
        launches
          .filter((launch) => launch.links.flickr.original.length)
          .map((launch) => (
            <Launch
              launch={launch}
              style={{ width: '60%', marginBottom: '1rem' }}
            />
          ))}
    </div>
  );
};
