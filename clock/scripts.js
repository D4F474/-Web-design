function timer() {
txtH = document.getElementById("txt");
let sesion = "AM"
let d = new Date();
let hours = d.getHours();
if (hours == 0) {
    hours = 12;
}
if(hours > 12) {
    hours -= 12
    sesion = "PM"
}
let minutes = d.getMinutes();
if(minutes <= 9) {
  minutes= "0" + minutes 
}
let seconds = d.getSeconds();
txtH.textContent = `${hours}:${minutes}:${seconds} ${sesion}`
setTimeout(timer, 1000);
}
timer()
