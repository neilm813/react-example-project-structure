/* 
This view is not meaningfully different currently from the `Launch` Component,
but since the launches view needs to also display a launch, a component was
created to be re-used. 
*/

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import 'App.css';
import { getLaunch } from 'services';
import { AxiosErr, Launch, DotRowFade } from 'components';

export const OneLaunch = () => {
  const { id } = useParams();

  const [launch, setLaunch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Timeout to check the loading spinner out.
    setTimeout(() => {
      getLaunch(id)
        .then((data) => setLaunch(data))
        .catch((e) => {
          console.log(e.response);
          setError(e);
        })
        .finally(() => setLoading(false));
    }, 1500);
  }, [id]);

  return (
    <div>
      <h2 className="text-center">Launch Details</h2>
      <AxiosErr loading={loading} error={error} />
      <DotRowFade loading={loading} color="#6991CD" />
      <Launch launch={launch} />
    </div>
  );
};
