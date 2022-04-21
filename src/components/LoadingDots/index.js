import styles from './styles.module.css';

/**
 * @typedef {object} LoadingDotsProps
 * @property {boolean} loading
 */

/**
 * Renders dots in a horizontal line animated to indicate loading.
 * @param {LoadingDotsProps} props
 */
export const LoadingDots = (props) => {
  const { loading = true } = props;

  if (!loading) {
    return null;
  }

  return (
    <div id={styles.dots3}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
