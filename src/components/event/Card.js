import "./Card.css";

import sampleImage from "assets/images/sample_event.png";

const EventCard = ({ name, desc, img: imgSrc, start = {}, end = {}, gform }) => {
  const options = { hour: "2-digit", minute: "2-digit" };
  const startDate = new Date(start.seconds * 1000).toDateString();
  const endDate = new Date(end.seconds * 1000).toDateString();
  const startTime = new Date(start.seconds * 1000).toLocaleTimeString("en-US", options);
  const endTime = new Date(end.seconds * 1000).toLocaleTimeString("en-US", options);
  return (
    <div className="event-card card mx-4 mt-2 mb-5 p-0 rounded">
      <div className="">
        <div className="col-12 text-center">
          <img src={imgSrc} alt={desc} className="event-img" />
        </div>
        <div className="col-12 position-relative px-5">
          <div className="card-body m-auto">
            <div className="name text-center card-title text-uppercase text-white fw-bold mb-5">
              {name}
            </div>
            <div className="date-start">
              <span className="text-white">Starts:</span> {startDate} {startTime}
            </div>
            <div className="date-start">
              <span className="text-white">Ends:</span> {endDate} {endTime}
            </div>
            {/* <div className="time-range">
              <span>
                <span>{startTime}</span> - <span>{endTime}</span>
              </span>
            </div> */}
            <div className="my-5 description" dangerouslySetInnerHTML={{ __html: desc }} />
            <div className="text-center">
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
    </div>
  );
};

export default EventCard;
