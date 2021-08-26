import Authenticate from "components/Auth";
import EventsList from "components/event/List";

import Layout from "components/Layout";

const EventsPage = () => {
  return (
    <Layout>
      <Authenticate>
        <div className="events-list-page container px-5 py-5">
          <EventsList />
        </div>
      </Authenticate>
    </Layout>
  );
};

export default EventsPage;
