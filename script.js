// javascript code for to do list: linked to all other pages so dont make new java files

// variables for to do list
let addToListButton = document.getElementById('addToList');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
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
})

