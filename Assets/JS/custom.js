/* navigation */
/*jshint esnext: true */
const toggler = document.getElementById("toggler");
const mNav = document.getElementById("mobile__nav");
const close = document.getElementById("toggler__expanded");
const overlay = document.getElementById("overlay");

toggler.addEventListener("click", () => {
  mNav.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
});

close.addEventListener("click", () => {
  mNav.classList.add("translate-x-full");
  overlay.classList.add("hidden"); 
});

overlay.addEventListener("click", () => {
  mNav.classList.add("translate-x-full");
  overlay.classList.add("hidden"); 
});


/* Atropos */
const myAtropos = Atropos({
  el: '.my-atropos',
  shadow:false,
  activeOffset: 40,
});
const myAtropos2 = Atropos({
  el: '.my-atropos2',
  shadow:false,
  activeOffset: 40,
});
const myAtropos3 = Atropos({
  el: '.my-atropos3',
  shadow:false,
  activeOffset: 40,
});


/* Time */
function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  var y = date.getFullYear();
  var m = date.getUTCMonth()+1;
  var day = date.getUTCDate()+1;
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Воскресенье";
  weekday[1] = "Понедельник";
  weekday[2] = "Вторник";
  weekday[3] = "Среда";
  weekday[4] = "Четверг";
  weekday[5] = "Пятница";
  weekday[6] = "Суббота";
var n = weekday[d.getDay()];
  document.getElementById("clock1").innerText = hour;
  document.getElementById("clock2").innerText = min;
  document.getElementById("clock3").innerText = sec;
  document.getElementById("clock4").innerText =day+"."+m+"."+y+"\n"+n;
    var t = setTimeout(function(){ currentTime(); }, 1000);
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
currentTime();

/* TypeIt */
new TypeIt("#typeit", { 
  lifeLike: false, 
  speed: 0 
})
.type("К")
.pause(150)
.type("т")
.pause(65)
.type("о")
.pause(65)
.type(" ")
.pause(65)
.type("я")
.pause(65)
.type("?")
.pause(0)
.break()
.pause(1500)
.type("Н")
.pause(65)
.type("е")
.pause(65)
.type("з")
.pause(65)
.type("н")
.pause(65)
.type("а")
.pause(65)
.type("к")
.pause(65)
.type("о")
.pause(65)
.type("м")
.pause(65)
.type("е")
.pause(65)
.type("ц")
.pause(1500)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(1500)
.type("С")
.pause(65)
.type("т")
.pause(65)
.type("у")
.pause(65)
.type("д")
.pause(65)
.type("е")
.pause(65)
.type("н")
.pause(65)
.type("т")
.pause(1500)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(65)
.delete(1)
.pause(1500)
.type("В")
.pause(65)
.type("е")
.pause(65)
.type("б")
.pause(65)
.type("-")
.pause(65)
.type("р")
.pause(65)
.type("а")
.pause(65)
.type("з")
.pause(65)
.type("р")
.pause(65)
.type("а")
.pause(65)
.type("б")
.pause(65)
.type("о")
.pause(65)
.type("т")
.pause(65)
.type("ч")
.pause(65)
.type("и")
.pause(65)
.type("к")
.go();