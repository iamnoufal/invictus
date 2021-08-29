import { AppContext } from "contexts/app";
import { useContext } from "react";

import "./Card.css";

const EventCard = ({ name, desc, img, start = {}, end = {}, gform }) => {
  const { session } = useContext(AppContext);
  const options = { hour: "2-digit", minute: "2-digit" };
  const startDate = new Date(start.seconds * 1000).toDateString();
  const endDate = new Date(end.seconds * 1000).toDateString();
  const startTime = new Date(start.seconds * 1000).toLocaleTimeString("en-US", options);
  const endTime = new Date(end.seconds * 1000).toLocaleTimeString("en-US", options);
  const btnProps = session.accessToken ? { href: gform, target: "_blank" } : { href: "/pass" };
  return (
    <div className="event-card card mx-4 mt-2 mb-3 p-0 rounded">
      <div className="row">
        <div className="">
          <img src={img} alt={desc} className="card-img-left event-img" />
        </div>
        <div className="">
          <div className="card-body m-auto text-center">
            <div className="name card-title text-uppercase text-white fw-bold mb-3">{name}</div>
            <div className="date-start">
              <span className="text-white">Starts: </span>
              {startDate} {startTime}
            </div>
            <div className="date-start">
              <span className="text-white">Ends: </span>
              {endDate} {endTime}
            </div>
            <div className="mt-3 description">{desc}</div>
            <a
              className="btn mt-3 mb-3 register-button rounded-pill bg-color-aquagreen"
              rel="noreferrer noopener"
              {...btnProps}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
