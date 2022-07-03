/* 
In a serious project you should probably use something like react-query
instead of doing it all manually:
https://react-query.tanstack.com/
*/

import { useEffect, useState } from 'react';

/**
 *
 * @param {Promise<any>|null} promise
 * @returns {[loading: boolean, data: any, error: Error]}
 */
export const usePromise = (promise = null) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      let ignore = false;

      setLoading(true);

      promise
        .then((res) => {
          if (ignore === false) {
            setData(res.data);
          }
        })
        .catch((err) => {
          if (ignore === false) {
            setError(err);
          }
        })
        .finally(() => setLoading(false));

      // Prevents race conditions.
      const cleanup = () => {
        ignore = true;
        // just in case, it should already have happened in the .finally.
        setLoading(false);
      };

      return cleanup;
    },
    // re-run if new promise is given.
    [promise]
  );

  return [loading, data, error];
};
