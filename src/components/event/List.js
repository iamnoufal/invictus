import { useState, useEffect } from "react";

import EventCard from "./Card";

import "./List.css";

const DUMMY_EVENTS = [
  {
    start: new Date(),
    end: new Date(),
    desc: "Event 1",
    category: "competitive",
  },
  {
    start: new Date(),
    end: new Date(),
    desc: "Event 2",
    category: "fun",
  },
  {
    start: new Date(),
    end: new Date(),
    desc: "Event 3",
    category: "fun",
  },
  {
    start: new Date(),
    end: new Date(),
    desc: "Event 4",
    category: "educational",
  },
  {
    start: new Date(),
    end: new Date(),
    desc: "Event 5",
    category: "competitive",
  },
];

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
    const db = firebase.firestore();
    const events = []
    db.collection("events").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            events.push({
                name: doc.id,
                category: doc.data().category,
                start: doc.data().start,
                end: doc.data().end,
                desc: doc.data().desc
            })
        })
      return events;
    }).then((response = []) => {
      const eventsObj = response.reduce((acc, obj) => {
        acc[obj.category] = [].concat(acc[obj.category] || [], obj);
        return acc;
      }, {});
      setEventsByCategory(eventsObj);
    })
  }, []);

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
        <label className="btn btn-outline-green" htmlFor="btnradio1">
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
        <label className="btn btn-outline-green " htmlFor="btnradio2">
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
        <label className="btn btn-outline-green" htmlFor="btnradio3">
          Educational
        </label>
      </div>
      <div className="m-auto justify-content-center">
        {(eventsByCategory[activeCategory] || []).map((eventObj) => (
          <EventCard key={eventObj.desc} {...eventObj} />
        ))}
      </div>
    </div>
  );
};

export default EventsList;
