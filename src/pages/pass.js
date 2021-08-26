import Layout from "components/Layout";
import Profile from "components/Profile";
import EventPassList from "components/event/PassList";

const EventPassPage = () => {
  return <Layout>
    <div className="container event-pass-page">
      <h1 className="text-white text-uppercase text-center my-5 heading">Events Pass</h1>
      <Profile />
      <EventPassList />
    </div>
  </Layout>
}

export default EventPassPage;
