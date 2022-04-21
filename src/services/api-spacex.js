import axios from 'axios';

// Import from .env file.
const SPACEX_KEY = process.env.REACT_APP_SPACEX_KEY;

/**
 * Create an axios instance to reuse the base url and api key for each request.
 * @see [SpaceX API](https://github.com/r-spacex/SpaceX-API/tree/master/docs)
 */
const http = axios.create({
  // This doesn't need to be in .env b/c the url is not going to change.
  baseURL: 'https://api.spacexdata.com/v4',
  // headers: {
  //   'spacex-key': SPACEX_KEY,
  // },
});

/**
 * Gets the most recent launch.
 * @returns {Promise<Launch>}
 */
export const getLatestLaunch = async () => {
  const res = await http.get('/launches/latest');
  return res.data;
};

/**
 * Gets a single launch.
 * @param {string} id The launch id.
 * @returns {Promise<Launch>}
 * @see [API Docs One Launch](https://github.com/r-spacex/SpaceX-API/blob/master/docs/launches/v4/one.md)
 * @see [API Docs Latest Launch](https://github.com/r-spacex/SpaceX-API/blob/master/docs/launches/v4/latest.md)
 */
export const getLaunch = async (id) => {
  const res = await http.get(`/launches/${id}`);
  return res.data;
};

/**
 * Gets all launches.
 * @returns {Promise<Launch[]>}
 * @see [API Docs All Launches](https://github.com/r-spacex/SpaceX-API/blob/master/docs/launches/v4/all.md)
 */
export const getAllLaunches = async () => {
  const res = await http.get(`/launches`);
  return res.data;
};

/**
 * @typedef {object} Launch
 * @property {object} fairings
 * @property {boolean} fairings.reused
 * @property {boolean} fairings.recovery_attempt
 * @property {boolean} fairings.recovered
 * @property {string[]} fairings.ships
 * @property {object} links
 * @property {object} links.patch
 * @property {string} links.patch.small
 * @property {string} links.patch.large
 * @property {object} links.reddit
 * @property {string} links.reddit.campaign
 * @property {string} links.reddit.launch
 * @property {string} links.reddit.media
 * @property {null} links.reddit.recovery
 * @property {object} links.flickr
 * @property {string[]} links.flickr.small
 * @property {string[]} links.flickr.original
 * @property {string} links.presskit
 * @property {string} links.webcast
 * @property {string} links.youtube_id
 * @property {string} links.article
 * @property {string} links.wikipedia
 * @property {string} static_fire_date_utc
 * @property {number} static_fire_date_unix
 * @property {boolean} tdb
 * @property {boolean} net
 * @property {number} window
 * @property {string} rocket
 * @property {boolean} success
 * @property {object[]} failures
 * @property {number} failures.time
 * @property {number?} failures.altitude
 * @property {string} failures.reason
 * @property {string} details
 * @property {string[]} crew
 * @property {string[]} ships
 * @property {string[]} capsules
 * @property {string[]} payloads
 * @property {string} launchpad
 * @property {boolean} auto_update
 * @property {number} flight_number
 * @property {string} name
 * @property {string} date_utc
 * @property {number} date_unix
 * @property {string} date_local
 * @property {string} date_precision
 * @property {boolean} upcoming
 * @property {object[]} cores
 * @property {string} cores.core
 * @property {number} cores.flight
 * @property {boolean} cores.gridfins
 * @property {boolean} cores.legs
 * @property {boolean} cores.reused
 * @property {boolean} cores.landing_attempt
 * @property {boolean} cores.landing_success
 * @property {string} cores.landing_type
 * @property {string} cores.landpad
 * @property {string} id
 */
