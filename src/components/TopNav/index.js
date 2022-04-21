import { Link } from 'react-router-dom';

import logoUrl from 'assets/images/spacex-logo.png';
import 'App.css';
import styles from './styles.module.css';
const { logo, navHeader } = styles;

export const TopNav = ({ position = 'fixed' }) => {
  return (
    <header className={[navHeader, 'gap-md'].join(' ')} style={{ position }}>
      <div className={logo}>
        <img src={logoUrl} alt="Space X Logo" />
      </div>
      <nav className="row gap-md">
        <Link to="/">Home</Link>
        <Link to="/launches/latest">Latest Launch</Link>
        <Link to="/launches/5eb87d13ffd86e000604b360">Famous Launch</Link>
        <Link to="/launches">Photographed Launches</Link>
      </nav>
    </header>
  );
};
