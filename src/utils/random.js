/**
 * Plucks a random item from an array.
 * @param {any[]} arr
 */
export const randomItem = (arr = []) =>
  arr[Math.floor(Math.random() * arr.length)];

/**
 * Gets a random number from a range.
 * @param {number} min Inclusive.
 * @param {number} max Exclusive.
 */
export const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;

/**
 * Uses the Fisher–Yates shuffle to randomly order an array.
 * @param {any[]} arr
 * @param {boolean} inPlace Whether to mutate the array or not.
 * @see [wiki](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
 */
export const shuffle = (arr, inPlace = true) => {
  const items = inPlace ? arr : [...arr];

  let idx = items.length;
  let randomIdx;

  while (idx > 0) {
    randomIdx = Math.floor(Math.random() * idx--);
    [items[idx], items[randomIdx]] = [items[randomIdx], items[idx]];
  }

  return items;
};
