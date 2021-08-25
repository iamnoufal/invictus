import { Link } from "react-router-dom";

const NavigationDefault = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Invictus
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item">
              <Link to="/" activeClassName="active" className="nav-link text-uppercase">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/schedule" activeClassName="active" className="nav-link text-uppercase">
                Event Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" activeClassName="active" className="nav-link text-uppercase">
                Events List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pass" activeClassName="active" className="nav-link text-uppercase">
                Event Pass
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" activeClassName="active" className="nav-link text-uppercase">
                Our team
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationDefault;
