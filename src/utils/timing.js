/**
 * Pauses execution for the given amount of milliseconds.
 * @param {number} ms The milliseconds to wait before next line of code runs.
 * @example
 * ```
 * // Waits 1 second before next line runs.
 * await sleep(1000);
 * ```
 */
export const sleep = async (ms) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
