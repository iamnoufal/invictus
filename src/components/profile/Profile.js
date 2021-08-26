const auth = firebase.auth();
var user, username, email, registered, group, house;
var regEvents = {}
user = auth.currentUser();
username = user.displayName;
email = user.email;
db.doc("users/"+i).get().then((doc) => {
    registered = doc.data().registered;
    group = doc.data().group;
    house = doc.data().house;
}).then(() => {
    for (i in registered) {
        db.doc("events/"+i).get().then((doc) => {
            regEvents[i]={
                name: i,
                category: doc.data().category,
                start: doc.data().start,
                end: doc.data().end,
                desc: doc.data().desc
            }
        })
    }
})