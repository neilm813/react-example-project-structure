/**
 * @typedef {object} AxiosErrorProps
 * @property {import('axios').AxiosError} error
 * @property {boolean} [center] Whether to center the error text.
 *    Defaults to `true`.
 */

/**
 * @param {AxiosErrorProps} props
 */
export const AxiosErr = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <p className="text-center">
      <b className="text-danger">Network Error{`: ${error.response.data}`}</b>
    </p>
  );
};
