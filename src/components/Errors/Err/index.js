/**
 * @typedef {object} ErrProps
 * @property {Error} error
 */

/**
 * @param {Err} props
 */
export const Err = ({ error }) => {
  if (!error) {
    return null;
  }

  return <b className="text-danger">{error.message}</b>;
};
