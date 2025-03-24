import '../style/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
      <nav className="navbar">
          <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/informacion">Informacion</Link></li>
              <li><Link to="/Proyectos">Proyectos</Link></li>
          </ul>
      </nav>
  );
};

export default Nav;