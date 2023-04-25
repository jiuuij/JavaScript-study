let allMemo = JSON.parse(localStorage.getItem("allMemo"));
allMemo = allMemo ?? [];
list();

function saveNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const date = new Date().toLocaleDateString();

    if (title.trim() === '' && content.trim() === '') { // title과 content가 모두 비어있는 경우
        alert("🚨Please enter mememomo🚨");
        return;
    }

    if (title.trim() === '') { // title이 비어있는 경우
        alert("🚨Please enter title.🚨");
        return;
    }

    if (content.trim() === '') { // content가 비어있는 경우
        alert("🚨Please enter your content🚨");
        return;
    }

    allMemo.push({
        title,
        content,
        date,
        len: allMemo.length
    });

    localStorage.setItem("allMemo", JSON.stringify(allMemo));
    list();
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}


function list() {
    const display = document.getElementById("display");
    display.innerHTML = "";
    
    for (const item of allMemo) {
        const saveDate = document.createElement("p");
        const saveTitle = document.createElement("h2");
        const saveContent = document.createElement("p");
        const saveId = document.createElement("p");
        const deleteMemoBtn = document.createElement("button");

        saveDate.textContent = item.date;
        saveTitle.textContent = item.title;
        saveContent.textContent = item.content;
        saveId.textContent = item.display;
        deleteMemoBtn.textContent = "delete";
        deleteMemoBtn.setAttribute("id", item.len);
        deleteMemoBtn.setAttribute("onclick", "remove()");

        // display.appendChild(saveId);
        display.appendChild(saveTitle);
        display.appendChild(saveContent);
        display.appendChild(saveDate);
        display.appendChild(deleteMemoBtn);

    }
    
}

function remove() {
    // console.log(event.srcElement.id);
    // console.log(allMemo);
    const idx = allMemo.find(
        (item) => item.len == event.srcElement.id
    );
    if (idx) {
        allMemo.splice(
            allMemo.findIndex((item) => item.len == idx.len),
            1
        );
    }
    localStorage.setItem("allMemo", JSON.stringify(allMemo));
    list();
}

