import Layout from "components/Layout";
import Profile from "components/Profile";
import EventPassList from "components/event/PassList";
import Authenticate from "components/Auth";

const EventPassPage = () => {
  return (
    <Layout>
      <Authenticate>
        <div className="container event-pass-page">
          <h1 className="text-white text-uppercase text-center my-5 heading">Events Pass</h1>
          <Profile />
          <EventPassList />
        </div>
      </Authenticate>
    </Layout>
  );
};

export default EventPassPage;
