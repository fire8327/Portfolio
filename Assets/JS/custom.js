/* navigation */
/*jshint esnext: true */
const toggler = document.getElementById("toggler");
const mNav = document.getElementById("mobile__nav");
const close = document.getElementById("toggler__expanded");
const overlay = document.getElementById("overlay");
const body = document.getElementsByTagName("body")[0];

toggler.addEventListener("click", () => {
  mNav.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});

close.addEventListener("click", () => {
  mNav.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-hidden"); 
});

overlay.addEventListener("click", () => {
  mNav.classList.add("translate-x-full");
  overlay.classList.add("hidden"); 
  body.classList.remove("overflow-hidden"); 
});

/* back to top */
var toTopButton = document.getElementById("to-top-button");
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.classList.remove("hidden");
    } else {
        toTopButton.classList.add("hidden");
    }
}

function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* Atropos */
const myAtropos = Atropos({
  el: '.my-atropos',
  shadow:false,
  activeOffset: 40,
  rotate:true,
  rotateTouch:('scroll-y'),  
  highlight:false,
  rotateXMax:7,
  rotateYMax:7,
});
const myAtropos2 = Atropos({
  el: '.my-atropos2',
  shadow:false,
  activeOffset: 40,
  rotateTouch:('scroll-y'),  
  highlight:false,
  rotateXMax:7,
  rotateYMax:7,
});
const myAtropos3 = Atropos({
  el: '.my-atropos3',
  shadow:false,
  activeOffset: 40,
  rotateTouch:('scroll-y'),  
  highlight:false,
  rotateXMax:7,
  rotateYMax:7,
});
const myAtropos4 = Atropos({
  el: '.my-atropos4',
  shadow:false,
  activeOffset: 40,
  rotateTouch:('scroll-y'),  
  highlight:false,
  rotateXMax:7,
  rotateYMax:7,
});
const myAtropos5 = Atropos({
  el: '.my-atropos5',
  shadow:false,
  activeOffset: 40,
  rotateTouch:('scroll-y'), 
  highlight:false,
  rotateXMax:7,
  rotateYMax:7,
});

/* Card flip and Lamp*/
const flip = document.getElementById("flip");
const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const flip_toggler = document.getElementById("flip_toggler");
const flip_close = document.getElementById("flip_close");

const lamp1 = document.getElementById("lamp1");
const lamp2 = document.getElementById("lamp2");

flip_toggler.addEventListener("click", () => {
  flip.classList.add("[transform:rotateY(180deg)]");
  setTimeout(() => block2.classList.remove("hidden"), 200);
  setTimeout(() => block1.classList.add("hidden"), 200);
  lamp1.classList.remove("fill-slate-400");
  lamp2.classList.remove("fill-slate-400");
  lamp1.classList.add("fill-yellow-400");
  lamp2.classList.add("fill-yellow-400");
  
});
flip_close.addEventListener("click", () => {
  flip.classList.remove("[transform:rotateY(180deg)]");
  setTimeout(() => block2.classList.add("hidden"), 200);
  setTimeout(() => block1.classList.remove("hidden"), 200);
  lamp1.classList.add("fill-slate-400");
  lamp2.classList.add("fill-slate-400");
  lamp1.classList.remove("fill-yellow-400");
  lamp2.classList.remove("fill-yellow-400");
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