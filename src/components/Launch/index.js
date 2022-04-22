import { useEffect, useState } from 'react';

import { Rocket } from 'components';
import { getRocket } from 'services';
import { dateMMDDyyyy } from 'utils';
import styles from './styles.module.css';
const { box, boxBody, boxImg, boxText, boxTitle } = styles;

/**
 * @typedef {object} LaunchProps
 * @property {import('../../services/api-spacex').Launch} launch
 * @property {object} style Styles to forward to this component's root element.
 * @property {boolean} [isPreview] Whether or not to render a preview or more
 *    details. Defaults to `false`.
 */

/**
 * @param {LaunchProps} props
 */
export const Launch = (props) => {
  const { launch, isPreview = false, style = {} } = props;
  const [rocket, setRocket] = useState(null);

  useEffect(() => {
    if (isPreview === false && launch && launch.rocket) {
      getRocket(launch.rocket)
        .then((data) => setRocket(data))
        .catch(console.log);
    }
  }, [isPreview, launch]);

  // Render nothing.
  if (!launch) {
    return null;
  }

  let images = launch.links.flickr.original;
  // Display only 1 image for previews.
  images = isPreview ? images.slice(0, 1) : images;

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

        <Rocket rocket={rocket} />
      </div>

      {images.map((url) => (
        <img className={boxImg} key={url} src={url} alt="Original Launch" />
      ))}
    </div>
  );
};
