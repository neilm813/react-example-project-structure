/* 
This view is not meaningfully different currently from the `Launch` Component,
but since the launches view needs to also display a launch, a component was
created to be re-used. 
*/
import 'App.css';
import { getAllLaunches } from 'services';
import { AxiosErr, CircleDotExpansion, Launch } from 'components';
import { usePromise } from 'hooks';

export const Launches = () => {
  const [loading, launches, error] = usePromise(getAllLaunches());

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
              isPreview={true}
              style={{ width: '60%', marginBottom: '1rem' }}
            />
          ))}
    </div>
  );
};
