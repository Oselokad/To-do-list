const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", function(e){

e.preventDefault();

let task = input.value.trim();

if(task !== ""){

let li = document.createElement("li");
li.textContent = task;

list.appendChild(li);

input.value = "";

}

});