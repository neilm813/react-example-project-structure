/**
 * @param {Date | string} dateResolvable
 * @param {?string} separator The separator between the time units.
 *    Defaults to `/`.
 */
export const dateMMDDyyyy = (dateResolvable = new Date(), separator = '/') => {
  let date = dateResolvable;

  if (typeof dateResolvable === 'string') {
    date = new Date(dateResolvable);
  }

  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return [month, day, year].join(separator);
};

/**
 * @typedef {object} FullyNameable
 * @property {string} firstName
 * @property {?string} middleName
 * @property {string} lastName
 */

/**
 * @param {FullyNameable} obj
 */
export const fullName = ({ firstName, middleName, lastName } = {}) =>
  [firstName, middleName, lastName].filter(Boolean).join(' ');
