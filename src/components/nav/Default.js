import { NavLink } from "react-router-dom";

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
    <nav class="navbar sticky-top navbar-expand-lg bg-color-darkgreen">
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
          <ul class="navbar-nav py-2">
            {LINKS.map(({ to, label }) => (
              <li className="nav-item" key={to}>
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
