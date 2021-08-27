import { useState, useEffect } from "react";

import { getEvents } from "apis/firebase";

import EventCard from "./Card";

import "./List.css";

const EVENT_CATEGORIES = Object.freeze({
  fun: {
    name: "fun",
  },
  competitive: {
    name: "competitive",
  },
  educational: {
    name: "educational",
  },
});

const { fun: funCategory, competitive: compCategory, educational: eduCategory } = EVENT_CATEGORIES;

const EventsList = () => {
  const [eventsByCategory, setEventsByCategory] = useState({});
  const [activeCategory, setActiveCategory] = useState(funCategory.name);

  const handleCategorySelection = (event) => {
    setActiveCategory(event.target.value);
  };

  useEffect(() => {
    /*eslint no-undef: "off"*/
    getEvents().then((response = []) => {
      const eventsObj = response.reduce((acc, obj) => {
        acc[obj.category] = []
          .concat(acc[obj.category] || [], obj)
          .sort((a, b) => a.start.seconds < b.start.seconds);
        return acc;
      }, {});
      setEventsByCategory(eventsObj);
    });
  }, []);

  const eventList = eventsByCategory[activeCategory] || [];
  return (
    <div className="events-list">
      <h1 className="text-center text-white mb-5 heading text-uppercase">Events List</h1>
      <div
        className="btn-group event-category-group mb-5"
        role="group"
        aria-label="Event Category radio group"
      >
        <input
          type="radio"
          className="btn-check"
          name="activeCategory"
          value={funCategory.name}
          id="btnradio1"
          autoComplete="off"
          onChange={handleCategorySelection}
          checked={activeCategory === funCategory.name}
        />
        <label className="btn btn-outline-green text-uppercase fw-bold" htmlFor="btnradio1">
          Fun
        </label>

        <input
          type="radio"
          className="btn-check"
          name="activeCategory"
          value={compCategory.name}
          id="btnradio2"
          autoComplete="off"
          onChange={handleCategorySelection}
          checked={activeCategory === compCategory.name}
        />
        <label className="btn btn-outline-green text-uppercase fw-bold" htmlFor="btnradio2">
          Competitive
        </label>

        <input
          type="radio"
          className="btn-check"
          name="activeCategory"
          value={eduCategory.name}
          id="btnradio3"
          autoComplete="off"
          onChange={handleCategorySelection}
          checked={activeCategory === eduCategory.name}
        />
        <label className="btn btn-outline-green text-uppercase fw-bold" htmlFor="btnradio3">
          Educational
        </label>
      </div>
      <div className="m-auto justify-content-center d-flex event-card-list">
        {eventList.map((eventObj) => (
          <EventCard key={eventObj.desc} {...eventObj} />
        ))}
        {eventList.length === 0 && (
          <h4 className="text-center text-uppercase text-white m-auto">
            There are no events in this cateoory yet
          </h4>
        )}
      </div>
    </div>
  );
};

export default EventsList;
