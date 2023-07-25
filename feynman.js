// variables for first text box
let addToListButton = document.getElementById('addToList');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// variables for second text box
let addToListButtonA = document.getElementById('addToListA');
let toDoContainerA = document.getElementById('toDoContainerA');
let inputFieldA = document.getElementById('inputFieldA');

// variables for to do list 
let addToListButtonB = document.getElementById('addToListB');
let toDoContainerB = document.getElementById('toDoContainerB');
let inputFieldB = document.getElementById('inputFieldB');



// code for the first text box
addToListButton.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener('click', function(){
    toDoContainer.removeChild(paragraph);
  })
})

// code for second text box 
addToListButtonA.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputFieldA.value;
  toDoContainerA.appendChild(paragraph);
  inputFieldA.value = "";
  paragraph.addEventListener('click', function(){
    toDoContainerA.removeChild(paragraph);
  })
})

// code for to do list

addToListButtonB.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputFieldB.value;
  toDoContainerB.appendChild(paragraph);
  inputFieldB.value = "";
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener('dblclick', function(){
    toDoContainerB.removeChild(paragraph);
  })
})