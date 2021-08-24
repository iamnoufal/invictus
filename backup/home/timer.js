function convertDigit(a) {
  if (String(a).length==1) {a="0"+String(a)}
  return a
}
setInterval(()=>{
  var end=new Date("Aug 25, 2021 00:00:00").getTime();
  var start=new Date().getTime();
  var time=end-start;
  document.getElementById("h").innerHTML=convertDigit(parseInt(time/(1000*60*60)));
  document.getElementById("m").innerHTML=convertDigit(parseInt((time%(1000*60*60))/(1000*60)));
  document.getElementById("s").innerHTML=convertDigit(parseInt((time%(1000*60))/(1000)));
},1000)
