import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "pages/home";
import EventSchedulePage from "pages/schedule";
import EventsPage from "pages/events";
import TeamPage from "pages/team";
import EventPassPage from "pages/pass";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/schedule" component={EventSchedulePage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/pass" component={EventPassPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
