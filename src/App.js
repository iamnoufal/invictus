import { useLayoutEffect, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { initFirebase } from "services/firebase";

import HomePage from "pages/home";
import EventSchedulePage from "pages/schedule";
import EventsPage from "pages/events";
import TeamPage from "pages/team";
import EventPassPage from "pages/pass";

import { AppContext } from "contexts/app";

import "./App.css";
import Authenticate from "components/Auth";

function App() {
  const [session, setSession] = useState({});
  useLayoutEffect(() => {
    initFirebase();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, accessToken } = user;
        setSession({ uid, email, displayName, accessToken });
      } else {
        setSession({});
      }
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ session, setSession }}>
        <BrowserRouter basename="/home">
          <Switch>
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/schedule" component={EventSchedulePage} />
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
