import "./Card.css";

import sampleImage from "assets/images/sample_event.png";

const EventCard = ({ name, desc, img, start = {}, end = {}, gform }) => {
  const options = { hour: "2-digit", minute: "2-digit" };
  const startDate = new Date(start.seconds * 1000).toDateString();
  const startTime = new Date(start.seconds * 1000).toLocaleTimeString("en-US", options);
  const endTime = new Date(end.seconds * 1000).toLocaleTimeString("en-US", options);
  return (
    <div className="event-card card mx-4 mt-2 mb-5 p-0 rounded">
      <div className="row">
        <div className="">
          <img src={img} alt={desc} className="card-img-left event-img" />
        </div>
        <div className="">
          <div className="card-body m-auto text-center">
            <div className="name card-title text-uppercase text-white fw-bold mb-5">{name}</div>
            <div className="date-start fw-bold">{startDate}</div>
            <div className="time-range">
              <span>
                <span>{startTime}</span> - <span>{endTime}</span>
              </span>
            </div>
            <div className="mt-5 description">{desc}</div>
            <a
              className="btn register-button rounded-pill bg-color-aquagreen"
              href={gform}
              rel="noreferrer noopener"
              target="_blank"
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
