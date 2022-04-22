/**
 * @typedef {object} RocketProps
 * @property {import('../../services/api-spacex').Rocket} rocket
 */

/**
 * @param {RocketProps} props
 */
export const Rocket = ({ rocket }) => {
  if (!rocket) {
    return null;
  }

  const { diameter, height, mass, engines } = rocket;
  const { type, version, propellant_1, propellant_2 } = engines;

  return (
    <div style={{ borderTop: '1px solid lightgray' }}>
      <h4 className="text-center">Rocket Details</h4>
      <p>Measurements</p>
      <ul>
        <li>Diameter: {diameter.meters}m</li>
        <li>Height: {height.meters}m</li>
        <li>Mass: {mass.kg}kg</li>
      </ul>
      <h5>Engine Details</h5>
      <span>
        {type} type, {version} version, propellants: {propellant_1} &{' '}
        {propellant_2}.
      </span>
    </div>
  );
};
