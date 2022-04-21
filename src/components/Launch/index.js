import { dateMMDDyyyy } from 'utils';
import styles from './Launch.module.css';
const { box, boxBody, boxImg, boxText, boxTitle } = styles;

/**
 * @typedef {object} LaunchProps
 * @property {import('../../services/api-spacex').Launch} launch
 */

/**
 * @param {LaunchProps} props
 */
export const Launch = (props) => {
  const { launch, style = {} } = props;

  // Render nothing.
  if (!launch) {
    return null;
  }

  return (
    // forward any incoming style prop so the different views that use this
    // component can change some styling
    <div
      className={box}
      style={{
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        ...style,
      }}
    >
      <div className={boxBody}>
        <h3 className={`${boxTitle} text-center`}>{launch.name}</h3>
        {launch.date_local && <small>{dateMMDDyyyy(launch.date_local)}</small>}
        {launch.details && <p className={boxText}>{launch.details}</p>}
      </div>

      {launch.links.flickr.original.map((url) => (
        <img className={boxImg} src={url} key={url} alt="Original Launch" />
      ))}
    </div>
  );
};
