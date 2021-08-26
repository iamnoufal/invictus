import { NavLink } from "react-router-dom";

import "./Default.css";

const LINKS = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/schedule",
    label: "Event Schedule",
  },
  {
    to: "/events",
    label: "Events List",
  },
  {
    to: "/pass",
    label: "Event Pass",
  },
  {
    to: "/team",
    label: "Our Team",
  },
];

const NavigationDefault = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-color-darkgreen px-4">
      <div className="container-fluid">
        <span className="navbar-brand" style={{ fontFamily: "UnifrakturMaguntia" }}>
          Invictus
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav py-2 px-5">
            {LINKS.map(({ to, label }) => (
              <li className="nav-item mx-3" key={to}>
                <NavLink
                  to={to}
                  exact
                  activeClassName="active text-color-green text-decoration-underline"
                  className="nav-link text-uppercase text-white"
                  style={{ "letterSpacing": "3.3px", "textUnderlineOffset": "3px"}}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationDefault;
