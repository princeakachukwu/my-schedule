const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const counter = document.getElementById("counter")

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
        saveData()
    } else {
        let counter = document.getElementById("counter");
        this.counter =+1;
        counter.innerHTML = this.counter
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =  document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
        li.addEventListener("click", function() {
            if (li.style.textDecoration === "line-through") {
              li.style.textDecoration = "none";
            } else {
              li.style.textDecoration = "line-through";
            }
        });
        
    }

    inputBox.value = "";
    saveData()
}
    addTask();

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.togggle("checked");
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
});


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
   listContainer.innerHTML = localStorage.getItem("data");
}

showTask();