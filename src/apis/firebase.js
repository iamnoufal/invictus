import { getFirestore, collection, getDocs, getDoc, doc } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

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
    return events;
  });
};

export const getProfileDetails = async () => {
  let regEvents = [];
  const auth = getAuth();
  const user = auth.currentUser;
  const { displayName: userName, email, uid } = user;
  const db = getFirestore();
  const userDoc = await getDoc(doc(db, "users", email));
  const { registered = [], group, house } = userDoc.data();
  for (let i of registered) {
    const eventDoc = await getDoc(doc(db, "events", i));
    const { category, start, end, desc } = eventDoc.data();
    regEvents.push({
      name: i,
      category,
      start,
      end,
      desc,
    });
  }
  return {
    userName,
    email,
    group,
    house,
    eventPasses: regEvents,
  };
};
