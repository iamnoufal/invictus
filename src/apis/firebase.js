import { getFirestore, collection, getDocs, getDoc, doc } from "@firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

export const signInFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      return {
        status: "success",
        token,
        user,
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return {
        status: "error",
        errorCode,
        errorMessage,
        email,
        credential
      }
    });
}