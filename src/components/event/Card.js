import "./Card.css";

import imgComingSoon from "assets/images/image-coming-soon.png";

const EventCard = ({ desc, imgSrc = imgComingSoon, start, end }) => {
  return (
    <div className="event-card card mx-4 mt-2 mb-5 p-0 rounded">
      <div className="row">
        <div className="col-4 image-block position-relative">
          <img src={imgSrc} alt={desc} className="card-img-left event-img" />
        </div>
        <div className="col-8">
          <div className="card-body">
            <div className="name card-title">{desc}</div>
            <div className="date-start">{start.toDateString()}</div>
            <div className="date-end">{end.toDateString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
