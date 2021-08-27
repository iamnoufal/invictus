import EventPass from "./Pass";

import "./PassList.css";

const EventPassList = ({ passes = [] }) => {
  return (
    <div className="event-pass-list d-flex mx-2 my-5">
      {passes.map((passObj) => (
        <EventPass {...passObj} key={passObj.name} />
      ))}
      {passes.length === 0 && (
        <h4 className="my-5 mx-auto text-center text-uppercase text-white">
          You have not registered to any events.
        </h4>
      )}
    </div>
  );
};

export default EventPassList;
