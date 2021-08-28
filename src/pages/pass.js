import { useEffect, useState, useContext } from "react";

import Loader from "components/Loader";
import Layout from "components/Layout";
import Profile from "components/Profile";
import EventPassList from "components/event/PassList";
import AuthButton from "components/button/Auth";

import { getProfileDetails } from "apis/firebase";

import { AppContext } from "contexts/app";

const EventPassPage = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { session, setSession } = useContext(AppContext);

  const handleAuthFailure = (response) => {
    const { errorCode, errorMessage } = response;
    alert(`${errorCode}: ${errorMessage}`);
  };

  const handleAuthSuccess = (response) => {
    setSession(response);
  };

  useEffect(() => {
    if (session.accessToken) {
      getProfileDetails()
        .then((response) => {
          setProfile(response);
        })
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          throw err;
        });
    }
  }, [session]);

  return (
    <Layout>
      <div className="container event-pass-page">
        <h1 className="text-white text-uppercase text-center my-5 heading">Event Passes</h1>
        <Loader loading={loading}>
          {session.accessToken ? (
            <>
              <Profile {...profile} />
              <EventPassList passes={profile.eventPasses} />
            </>
          ) : (
            <div className="m-auto text-center my-2">
              <AuthButton onAuthSuccess={handleAuthSuccess} onAuthFailure={handleAuthFailure} />
            </div>
          )}
        </Loader>
      </div>
    </Layout>
  );
};

export default EventPassPage;
