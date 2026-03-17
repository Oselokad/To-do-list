const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", function(e){

e.preventDefault();

let task = input.value.trim();

if(task !== ""){

let li = document.createElement("li");

let taskText = document.createElement("span");
taskText.textContent = task;

let cancelBtn = document.createElement("button");
cancelBtn.textContent = "✖";
cancelBtn.classList.add("cancel-btn");

cancelBtn.addEventListener("click", function(){
li.remove();
});

li.appendChild(taskText);
li.appendChild(cancelBtn);

list.appendChild(li);

input.value = "";

}

});