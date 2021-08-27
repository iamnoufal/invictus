import { useEffect, useState } from "react";

import Loader from "components/Loader";
import Layout from "components/Layout";
import Profile from "components/Profile";
import EventPassList from "components/event/PassList";

import { getProfileDetails } from "apis/firebase";

const EventPassPage = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProfileDetails().then(setProfile).then(setLoading);
  }, []);
  return (
    <Layout>
      <div className="container event-pass-page">
        <h1 className="text-white text-uppercase text-center my-5 heading">Events Pass</h1>
        <Loader loading={loading}>
          <Profile {...profile} />
          <EventPassList passes={profile.eventPasses} />
        </Loader>
      </div>
    </Layout>
  );
};

export default EventPassPage;
