const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement("p");
    let img  = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
            notes = document.querySelectorAll(".input-box");
            notes.forEach(nt => {
                nt.onkeyup = function(){
                    updateStorage();
                }
            })
        }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
            e.target.classList.toggle("chaecked");
            saveData();
    }
    else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


  // Trigger button click event on Enter key press
  document.addEventListener("keydown", function(event) {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
      // Trigger the button click event
      document.getElementById("myButton").click();
    }
  });
  const passwordBox = document.getElementById("password");
  const lenght = 12;
  
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "@#$%^&*()_+~|}{[]></-=";
  
  const allChars = upperCase + lowerCase + number + symbol;
  
  function createPassword(){
      let password = "";
      password += upperCase[Math.floor(Math.random() * upperCase.length)];
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      password += number[Math.floor(Math.random() * number.length)];
      password += symbol[Math.floor(Math.random() * symbol.length)];
  
      while(lenght > password.length){
          password += allChars[Math.floor(Math.random() * allChars.length)]; 
      }
      passwordBox.value = password;
  }
  
  function copyPassword(){
      passwordBox.select();
      document.execCommand("copy");
  }