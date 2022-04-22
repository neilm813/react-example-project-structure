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
 * Gets a single rocket.
 * @param {string} id The rocket id.
 * @returns {Promise<Rocket>}
 * @see [API Docs One Rocket](https://github.com/r-spacex/SpaceX-API/blob/master/docs/rockets/v4/one.md)
 */
export const getRocket = async (id) => {
  const res = await http.get(`/rockets/${id}`);
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

/**
 * @typedef {object} Rocket
 * @property {object} height
 * @property {number} height.meters
 * @property {number} height.feet
 * @property {object} diameter
 * @property {number} diameter.meters
 * @property {number} diameter.feet
 * @property {object} mass
 * @property {number} mass.kg
 * @property {number} mass.lb
 * @property {object} first_stage
 * @property {object} first_stage.thrust_sea_level
 * @property {number} first_stage.thrust_sea_level.kN
 * @property {number} first_stage.thrust_sea_level.lbf
 * @property {object} first_stage.thrust_vacuum
 * @property {number} first_stage.thrust_vacuum.kN
 * @property {number} first_stage.thrust_vacuum.lbf
 * @property {boolean} first_stage.reusable
 * @property {number} first_stage.engines
 * @property {number} first_stage.fuel_amount_tons
 * @property {number} first_stage.burn_time_sec
 * @property {object} second_stage
 * @property {object} second_stage.thrust
 * @property {number} second_stage.thrust.kN
 * @property {number} second_stage.thrust.lbf
 * @property {object} second_stage.payloads
 * @property {object} second_stage.payloads.composite_fairing
 * @property {object} second_stage.payloads.composite_fairing.height
 * @property {number} second_stage.payloads.composite_fairing.height.meters
 * @property {number} second_stage.payloads.composite_fairing.height.feet
 * @property {object} second_stage.payloads.composite_fairing.diameter
 * @property {number} second_stage.payloads.composite_fairing.diameter.meters
 * @property {number} second_stage.payloads.composite_fairing.diameter.feet
 * @property {string} second_stage.payloads.option_1
 * @property {boolean} second_stage.reusable
 * @property {number} second_stage.engines
 * @property {number} second_stage.fuel_amount_tons
 * @property {number} second_stage.burn_time_sec
 * @property {object} engines
 * @property {object} engines.isp
 * @property {number} engines.isp.sea_level
 * @property {number} engines.isp.vacuum
 * @property {object} engines.thrust_sea_level
 * @property {number} engines.thrust_sea_level.kN
 * @property {number} engines.thrust_sea_level.lbf
 * @property {object} engines.thrust_vacuum
 * @property {number} engines.thrust_vacuum.kN
 * @property {number} engines.thrust_vacuum.lbf
 * @property {number} engines.number
 * @property {string} engines.type
 * @property {string} engines.version
 * @property {string} engines.layout
 * @property {number} engines.engine_loss_max
 * @property {string} engines.propellant_1
 * @property {string} engines.propellant_2
 * @property {number} engines.thrust_to_weight
 * @property {object} landing_legs
 * @property {number} landing_legs.number
 * @property {null} landing_legs.material
 * @property {object[]} payload_weights
 * @property {string} payload_weights.id
 * @property {string} payload_weights.name
 * @property {number} payload_weights.kg
 * @property {number} payload_weights.lb
 * @property {string[]} flickr_images
 * @property {string} name
 * @property {string} type
 * @property {boolean} active
 * @property {number} stages
 * @property {number} boosters
 * @property {number} cost_per_launch
 * @property {number} success_rate_pct
 * @property {string} first_flight
 * @property {string} country
 * @property {string} company
 * @property {string} wikipedia
 * @property {string} description
 * @property {string} id
 */
