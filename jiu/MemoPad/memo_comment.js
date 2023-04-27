let allMemo = JSON.parse(localStorage.getItem("allMemo"));
allMemo = allMemo ?? [];
list();

//저장
function saveNote() {
    // title이 선언되었을 때 id가 title인 요소의 값을 title에 할당
    const title = document.getElementById("title").value;
    // content가 선언되었을 때 id가 content인 요소의 값을 content에 할당
    const content = document.getElementById("content").value;
    // date가 선언되었을 때 날짜를 string형식으로 새로 만들어 date에 할당 
    const date = new Date().toLocaleDateString();

    // alert 띄우기 : title과 content가 모두 비어있는 경우 
    if (title.trim() === '' && content.trim() === '') { 
        alert("🚨Please enter mememomo🚨");
        return;
    }

    // alert 띄우기 : title이 비어있는 경우
    if (title.trim() === '') { 
        alert("🚨Please enter title.🚨");
        return;
    }

     // alert 띄우기 : content가 비어있는 경우
    if (content.trim() === '') {
        alert("🚨Please enter your content🚨");
        return;
    }

    // allMemo에 title, content, date, length(문자열의 길이)를 push
    allMemo.push({
        title,
        content,
        date,
        len: allMemo.length
    });

    // allMemo라는 키에 JSON.stringify를 이용하여 값이나 객체를 문자열로 변환한 값을 list에 추가
    localStorage.setItem("allMemo", JSON.stringify(allMemo));
    list();
    //title 이라는 id를 가진 요소의 값을 초기화
    document.getElementById("title").value = "";
    //content 이라는 id를 가진 요소의 값을 초기화
    document.getElementById("content").value = "";
}

// list생성
function list() {
    //display에 display라는 id를 가진 요소를 할당
    const display = document.getElementById("display");
    display.innerHTML = "";
    
    // for...of 문을 이용하여 아래의 내용들을 반복하며 새로운 배열을 생성
    for (const item of allMemo) {
        // saveDate를 선언할 때 p태그를 만들어 반환
        const saveDate = document.createElement("p");
        // saveTitle를 선언할 때 h2태그를 만들어 반환
        const saveTitle = document.createElement("h2");
        // saveContent를 선언할 때 h2태그를 만들어 반환
        const saveContent = document.createElement("p");
        // saveId를 선언할 때 p태그를 만들어 반환
        const saveId = document.createElement("p");
        // deleteMomoBtn을 선언할 때 button태그를 만들어 반환
        const deleteMemoBtn = document.createElement("button");


        //saveDate의 모든 요소를 가지고와 item.date에 할당
        saveDate.textContent = item.date;
        //saveTitle의 모든 요소를 가지고와 item.title에 할당
        saveTitle.textContent = item.title;
        //saveContent의 모든 요소를 가지고와 item.content에 할당
        saveContent.textContent = item.content;
        //saveId의 모든 요소를 가지고와 item.display에 할당
        saveId.textContent = item.display;
        //
        deleteMemoBtn.textContent = "delete";
        //deleteMemoBtn이 선언되었을 때 id의 속성을 item.len으로 변경한다.
        deleteMemoBtn.setAttribute("id", item.len);
        //deleteMemoBtn이 선언되었을 때 onclick의 속성을 remove로 변경한다.
        deleteMemoBtn.setAttribute("onclick", "remove()");

        // prepend를 사용하여 제일 최근 순이 위로 올라오게 정렬
        display.prepend(deleteMemoBtn);
        display.prepend(saveContent);
        display.prepend(saveTitle);
        display.prepend(saveDate);

    }
    
}

//삭제
function remove() {
    // dix를 선언했을 때 allMemo에서 item을 찾아서 item의 길이와 비교한다
    const idx = allMemo.find(
        (item) => item.len == event.srcElement.id
    );
    // item길이와 idx길이가 일치하면 splice를 이용해 삭제 
    if (idx) {
        allMemo.splice(
            allMemo.findIndex((item) => item.len == idx.len),
            1
        );
    }
    // allMemo라는 키에 JSON.stringify를 이용하여 값이나 객체를 문자열로 변환한 값을 list에 추가
    localStorage.setItem("allMemo", JSON.stringify(allMemo));
    list();
}

