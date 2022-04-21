import styles from './styles.module.css';

/**
 * @typedef {object} CircleDotExpansionProps
 * @property {boolean} [loading] Show / Hide
 * @property {string} [color] Defaults to white.
 */

/**
 *
 * @param {CircleDotExpansionProps} props
 * @see https://projects.lukehaas.me/css-loaders/
 */
export const CircleDotExpansion = ({ loading = true, color = '#ffffff' }) => {
  if (!loading) {
    return null;
  }

  return <div class={styles.loader} style={{ color: color }}></div>;
};
