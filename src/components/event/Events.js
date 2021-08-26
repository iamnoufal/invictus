const db = firebase.firestore();
EVENTS = {}
db.collection("events").get().then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        EVENTS[doc.id]={
            name: doc.id,
            category: doc.data().category,
            start: doc.data().start,
            end: doc.data().end,
            desc: doc.data().desc
        }
    })
})