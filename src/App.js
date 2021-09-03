import { useState, useLayoutEffect, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";

import HomePage from "pages/home";
import EventSchedulePage from "pages/schedule";
import EventsPage from "pages/events";
import TeamPage from "pages/team";
import EventPassPage from "pages/pass";
import EventLivePage from "pages/live";
import Authenticate from "components/Auth";

import { AppContext } from "contexts/app";

import { parseSessionData } from "helpers/auth";

import { onMessageListener, updateFCMTokenToDB } from "apis/firebase";

import "./App.css";

const defaultState = { loading: false, liveData: {} };
function App() {
  const [session, setSession] = useState({ ...defaultState, loading: true });

  useLayoutEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      let data = { ...defaultState };
      if (user) {
        data = { ...defaultState, ...parseSessionData(user), loading: false };
      }
      setSession(data);
    });
  }, []);

  useLayoutEffect(() => {
    if (session.accessToken) {
      const messaging = getMessaging();
      getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY })
        .then((token) => {
          updateFCMTokenToDB({ fcm: token });
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [session]);

  useEffect(() => {
    onMessageListener().then(payload => {
      const { notification: { title, body }} = payload;
      alert(`${title}\n${body}`);
    }).catch(err => console.err(err));
  })

  return (
    <div className="App">
      <AppContext.Provider value={{ session, setSession }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/events" render={(routeProps) => <EventsPage {...routeProps} />} />
            <Route
              exact
              path="/schedule"
              render={(routeProps) => (
                <Authenticate>
                  <EventSchedulePage {...routeProps} />
                </Authenticate>
              )}
            />
            <Route
              exact
              path="/live"
              render={(routeProps) => (
                <Authenticate>
                  <EventLivePage {...routeProps} />
                </Authenticate>
              )}
            />
            <Route exact path="/team" component={TeamPage} />
            <Route exact path="/pass" render={(routeProps) => <EventPassPage {...routeProps} />} />
            <Route exact path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
