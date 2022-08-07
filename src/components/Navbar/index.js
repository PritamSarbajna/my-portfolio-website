import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faEnvelope, faHome, faUser, faTools } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="nav-bar">
        <Link className="logo" to="/">
          <h1>Port<span>folio</span></h1>
        </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
            <FontAwesomeIcon icon={faTools} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
            <FontAwesomeIcon icon={faBookOpen} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar