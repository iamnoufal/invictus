import EventCard from "components/event/Card";
import NavigationDefault from "components/nav/Default";

const DUMMY_EVENTS = [
  {
    start: new Date(),
    end: new Date(),
    desc: "Event 1",
    category: "competitive"
  },
  {
    start: new Date(),
    end: new Date(),
    desc: "Event 2",
    category: "competitive"
  },
  {
    start: new Date(),
    end: new Date(),
    desc: "Event 3",
    category: "competitive"
  },
  {
    start: new Date(),
    end: new Date(),
    desc: "Event 4",
    category: "competitive"
  },
  {
    start: new Date(),
    end: new Date(),
    desc: "Event 5",
    category: "competitive"
  }
]

const EventsPage = () => {
  return (
    <div className="">
      <NavigationDefault />
      <div className="container">
        {DUMMY_EVENTS.map((eventObj) => <EventCard key={eventObj.desc} {...eventObj} /> )}
      </div>
    </div>
  );
};

export default EventsPage;
