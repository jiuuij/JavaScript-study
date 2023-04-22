const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addButton");
const toDoList = document.getElementById("List");

addBtn.addEventListener("click", function() {
    const list = document.createElement("li");

    list.innerText = inputBox.value;
    toDoList.appendChild(list);

    inputBox.value = "";

    list.addEventListener("click", function(){
        list.style.textDecoration = "line-through";
    })

    list.addEventListener("dblclick", function() {
        toDoList.removeChild(list);
    })

})