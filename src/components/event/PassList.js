import EventPass from "./Pass";

import "./PassList.css";

const DUMMY_PASSES = [
  {
    name: "Shark Tank",
    status: "completed",
  },
  {
    name: "Shark Tank",
    status: "completed",
  },
  {
    name: "Shark Tank",
    status: "completed",
  },
  {
    name: "Shark Tank",
    status: "completed",
  },
];

const EventPassList = () => {
  return (
    <div className="event-pass-list d-flex m-5">
      {DUMMY_PASSES.map((passObj) => (
        <EventPass {...passObj} />
      ))}
    </div>
  );
};

export default EventPassList;
