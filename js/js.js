//Time
var time = document.querySelector("#time");
function getTime() {
    var date = new Date();
    var weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var week = weekNames[date.getDay()];
    var month = monthNames[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var clock = hours+":"+minutes+":"+seconds;

    time.innerHTML = week+", "+day+". "+month+" "+year+" "+clock;
}
window = setInterval(function(){ getTime() }, 1000);

//Page Visibillity
var content = document.querySelector("#content");
function handleVisibilityChange() {
  if (document.hidden) {
    content.innerHTML += "<p class='leave'>You left page.</p>"
  } else  {
    content.innerHTML += "<p class='visit'>You visited page.</p>";
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);

//Drag and Drop
var cart = document.querySelector("#cart");
var list = document.querySelector("#list");
var items = document.querySelectorAll(".item");
var transfer = null;

function handleDragstart(e) {
    this.style.opacity = 0.4;
}

function handleDragenter(e) {
}

function handleDrag(e) {
    if(this.id =="cart"){
        e.preventDefault();
        return false;
    }
    var name = this.querySelector("img").name;
    transfer = { "name":name };
}
function handleDragover(e) {
    e.preventDefault();
    return false;
}
function handleDrop(e) {
    e.preventDefault();
    if(this.classList.contains("item")) return false;
    list.innerHTML += "<p>You drag: <strong>" + transfer.name +  "</strong></p><br>";
    for(var i=0; i<items.length; i++){
        items[i].style.opacity=1;
    }
    return false;
}

cart.addEventListener("drag",handleDrag);
cart.addEventListener("dragover",handleDragover);
cart.addEventListener("drop",handleDrop);
cart.addEventListener("dragstart",handleDragstart);
cart.addEventListener("dragenter",handleDragenter);

for(var i=0; i<items.length; i++){
    items[i].addEventListener("drag",handleDrag);
    items[i].addEventListener("dragover",handleDragover);
    items[i].addEventListener("drop",handleDrop);
    items[i].addEventListener("dragstart",handleDragstart);
}