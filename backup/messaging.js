const messaging = firebase.messaging()
function notify() {
if (confirm("Do you want to be notified when the fest begins?")) {
  messaging.requestPermission().then(()=>{
    document.querySelector(".left-pic-1").style.display="none";
    alert("You'll be notified when the fest starts");
  }).catch((err)=>{
    alert("Seems you've turned off the notification settings. Please review that in the browser settings")
  })
}
}
if (Notification.permission=="default" || Notification.permission=="denied") {
  document.querySelector(".left-pic-1").style.display="block";
} else {
  messaging.getToken({vapid:'BIHHAAs9HkghD0q4QdrqxUrvmvFrX450tvwV0VDS-pMwoWWLsRiBH_NqiypsNsqzBEK06tL38xH5SGKFM5KMa1o'}).then((fcmtoken)=>{console.log(fcmtoken)})
}