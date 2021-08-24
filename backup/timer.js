setInterval(()=>{
  var end=new Date("Aug 28, 2021 00:00:00").getTime();
  var start=new Date().getTime();
  var time=end-start;
  document.getElementById("d").innerHTML=parseInt(time/(1000*60*60*24));
  document.getElementById("h").innerHTML=parseInt((time%(1000*60*60*24))/(1000*60*60));
  document.getElementById("m").innerHTML=parseInt((time%(1000*60*60))/(1000*60));
  document.getElementById("s").innerHTML=parseInt((time%(1000*60))/(1000));
},1000)