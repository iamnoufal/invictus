const EventCard = ({ desc, imgSrc, start, end }) => {
  return (
    <div className="event-card">
      <div className="name">{desc}</div>
      <div className="image">
        <img src={imgSrc} alt={desc} />
      </div>
      <div className="date-start">{start.toDateString()}</div>
      <div className="date-end">{end.toDateString()}</div>
    </div>
  );
};

export default EventCard;
