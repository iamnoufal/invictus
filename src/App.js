import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "pages/home";
import EventSchedulePage from "pages/schedule";
import EventsPage from "pages/events";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/schedule" component={EventSchedulePage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
