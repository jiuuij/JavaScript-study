const inputBox = document.getElementsByClassName("input");
const addBtn = document.getElementsByClassName("button");
const addList = document.getElementsByClassName("newList");

addBtn.addEventListener("click", function() {
    const list = document.createElement("li");

    list.innerText = inputBox.value;
    addList.appendChild(list);

    inputBox.value = "";

    list.addEventListener("click", function() {
        list.style.textDecoration = "line-through";
    })

    list.addEventListener("dblclick", function() {
        addList.removeChild(list);
    })
})
