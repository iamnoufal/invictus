import { Link } from "react-router-dom";

const NavigationDefault = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" activeClassName="active" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/schedule" activeClassName="active" className="nav-link">
          Event Schedule
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/events" activeClassName="active" className="nav-link">
          Events List
        </Link>
      </li>
    </ul>
  );
};

export default NavigationDefault;
