import { useLayoutEffect, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { initFirebase } from "services/firebase";

import HomePage from "pages/home";
import EventSchedulePage from "pages/schedule";
import EventsPage from "pages/events";
import TeamPage from "pages/team";
import EventPassPage from "pages/pass";
import Authenticate from "components/Auth";

import { AppContext } from "contexts/app";

import { parseSessionData } from "helpers/auth";

import "./App.css";

function App() {
  const [session, setSession] = useState({ loading: true });
  useLayoutEffect(() => {
    initFirebase();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      let data = {};
      if (user) {
        data = { ...parseSessionData(user), loading: false };
      }
      setSession(data);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ session, setSession }}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/events"
              render={(routeProps) => (
                <Authenticate>
                  <EventsPage {...routeProps} />
                </Authenticate>
              )}
            />
            <Route
              exact
              path="/schedule"
              render={(routeProps) => (
                <Authenticate>
                  <EventSchedulePage {...routeProps} />
                </Authenticate>
              )}
            />
            <Route exact path="/team" component={TeamPage} />
            <Route
              exact
              path="/pass"
              render={(routeProps) => (
                <Authenticate>
                  <EventPassPage {...routeProps} />
                </Authenticate>
              )}
            />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
