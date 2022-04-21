import styles from './styles.module.css';

/**
 * @typedef {object} DotRowFadeProps
 * @property {boolean} [loading] Show / Hide
 * @property {string} [color] Defaults to white.
 */

/**
 *
 * @param {DotRowFadeProps} props
 * @see https://projects.lukehaas.me/css-loaders/
 */
export const DotRowFade = ({ loading = true, color = '#ffffff' }) => {
  if (!loading) {
    return null;
  }

  return <div class={styles.loader} style={{ color: color }}></div>;
};
