import { useEffect, useState } from 'react';

/**
 *
 * @param {Promise<any>} promise
 * @returns {[loading: boolean, data: any, error: Error]}
 */
export const usePromise = (promise) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      };

      return cleanup;
    },
    // re-run if new promise is given.
    [promise]
  );

  return [loading, data, error];
};
