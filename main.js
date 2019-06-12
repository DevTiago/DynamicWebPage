const time = document.getElementById("time");
const name = document.getElementById("name");
const greeting = document.getElementById("greeting");
const focus = document.getElementById("focus");

// Set Time
function thisTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // output the time
  time.innerHTML = `<span>${hour}</span>:<span>${addZero(
    min
  )}</span>:<span>${addZero(sec)}</span>`;

  setTimeout(thisTime, 1000);
}

function addZero(n) {
  return n > 9 ? "" + n : "0" + n;
}

// Set Background Image and image

function setBackground() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('./img/morning.jpg')";
    greeting.textContent = "Good Morning";
    document.body.style.color = "white";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
     document.body.style.color = "white";
  } else {
    document.body.style.backgroundImage = "url('./img/night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

function getName() {
  if (localStorage.getItem("name") === null || localStorage.getItem("name") === '') {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.keycode == 13 || e.which == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}





function getFocus() {
  if (localStorage.getItem("focus") === null || localStorage.getItem("focus") === '') {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.keycode == 13 || e.which == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);


thisTime();
setBackground();
getName();
getFocus();
