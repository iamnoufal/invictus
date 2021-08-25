import EventCard from "./Card";

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

const EventsList = () => {
  return <div className="events-list">
    <h1 className="text-center text-white mb-5 heading">Events List</h1>
    <div className="m-auto justify-content-center">{DUMMY_EVENTS.map((eventObj) => <EventCard key={eventObj.desc} {...eventObj} /> )}</div>
  </div>
}

export default EventsList;
