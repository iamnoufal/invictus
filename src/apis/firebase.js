import { getFirestore, collection, getDocs } from "@firebase/firestore";

export const getEvents = () => {
  const db = getFirestore();
  return getDocs(collection(db, "events")).then((querySnapshot) => {
    let events = [];
    querySnapshot.forEach((doc) => {
      events.push({
        name: doc.id,
        category: doc.data().category,
        start: doc.data().start,
        end: doc.data().end,
        desc: doc.data().desc,
      });
    });
    console.log(events);
    return events;
  });
};
