// variables for to do list
let addToListButton = document.getElementById('addToList');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


// code for pomodoro timer
//variables for pomodoro timer 
var start =document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var workMinutes = document.getElementById('workMinutes');
var workSeconds = document.getElementById('workSeconds');

var breakMinutes = document.getElementById('breakMinutes');
var breakSeconds = document.getElementById('breakSeconds');

//storea referance to a timer variable 
var startTimer;
// variables to call buttons by ID
var JSStartButton = $('#start');
var JSResetButton = $('#reset');
var JSStopButton = $('#stop');

// buttons event listener 
JSStartButton.on("click", startCountdown);
JSResetButton.on("click", resetCountdown);
JSStopButton.on("click", stopCountdown);

//buttons functions 
function startCountdown() {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000)
  } else {
    alert("Timer is already running")
  }
}

function resetCountdown() {
  workMinutes.innerText = 30;
  workSeconds.innerText = "00";

  breakMinutes.innerText = 5;
  breakSeconds.innerText = "00";

  document.getElementById('counter').innerText = 0;
  startTimer = undefined;
}

function stopCountdown() {
  stopInterval()
  startTimer = undefined;
}

//function to stop timer
function stopInterval() {
  clearInterval(startTimer);
  
}

// function to make timers work
function timer() {
  // work timer countdown
  if (workSeconds.innerText != 0) {
    workSeconds.innerText--;
  } else if (workMinutes.innerText != 0 && workSeconds.innerText == 0) {
    workSeconds.innerText = 59;
    workMinutes.innerText--;
  } 
  // break timer countdown
  if (workMinutes.innerText == 0 && workSeconds.innerText == 0) {
    if (breakSeconds.innerText != 0) {
      breakSeconds.innerText--;
    } else if (breakMinutes.innerText != 0 && breakSeconds.innerText == 0) {
      breakSeconds.innerText = 59;
      breakMinutes.innerText--;
    }
  }
  // increment counter 
  if (workMinutes.innerText == 0 && workSeconds.innerText == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0) {
    workMinutes.innerText = 30;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";

    document.getElementById('counter').innerText++;
     
    
  }
}
// code ends for pomodoro timer


// code for to do list

addToListButton.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph);
  })
})

