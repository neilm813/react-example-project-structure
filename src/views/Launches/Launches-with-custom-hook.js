/* 
This view is not meaningfully different currently from the `Launch` Component,
but since the launches view needs to also display a launch, a component was
created to be re-used. 
*/

import { useCallback } from 'react';

import 'App.css';
import { getAllLaunches } from 'services';
import { usePromise } from 'hooks';
import { AxiosErr, CircleDotExpansion, Launch } from 'components';

export const Launches = () => {
  const {
    isLoading,
    data: launches,
    error,
    refresh,
  } = usePromise(useCallback(() => getAllLaunches(), []));

  return (
    <div>
      <h2 className="text-center">Photographed Launches</h2>
      <button onClick={() => refresh()}>Refetch Data</button>
      <AxiosErr loading={isLoading} error={error} />
      <CircleDotExpansion loading={isLoading} />

      {launches &&
        launches
          .filter((launch) => launch.links.flickr.original.length)
          .map((launch) => (
            <Launch
              key={launch.id}
              launch={launch}
              isPreview={true}
              style={{ width: '60%', marginBottom: '1rem' }}
            />
          ))}
    </div>
  );
};
