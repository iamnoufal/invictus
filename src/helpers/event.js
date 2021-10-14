export const getSortedEventsByCategory = (events = []) => {
  const liveEvents = getLiveEvents(events);
  const completedEvents = getCompletedEvents(events);
  const orderedEvents = [
    ...sortEventsByStartTime(liveEvents),
    ...sortEventsByStartTime(completedEvents),
  ];

  const eventsObj = orderedEvents.reduce((acc, obj) => {
    acc[obj.category] = [].concat(acc[obj.category] || [], obj);
    return acc;
  }, {});
  return eventsObj;
};

export const getArchives = (events = []) => {
  const archiveEvents = getEventsForArchives(events);
  const orderedEvents = [
    ...sortEventsByStartTime(archiveEvents),
  ];

  const eventsObj = orderedEvents.reduce((acc, obj) => {
    acc[obj.completed] = [].concat(acc[obj.completed] || [], obj);
    return acc;
  }, {});
  return eventsObj;
}

const getCompletedEvents = (events = []) => {
  return events.filter((eventObj) => eventObj.completed);
};

const getLiveEvents = (events = []) => {
  return events.filter((eventObj) => !eventObj.completed);
};

const getEventsForArchives = (events = []) => {
	return events.filter((eventObj) => eventObj.yt);
}

const sortEventsByStartTime = (events = []) => {
  return [...events].sort((a, b) => a?.start?.seconds - b?.start?.seconds);
};
