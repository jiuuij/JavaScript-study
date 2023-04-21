const add = document.querySelector(".add");
const inp = document.querySelector(".text");
const listWrap = document.querySelector(".list-wrap");
const $delete = document.querySelector(".delete");

// 할일 추가, 완료, 삭제 버튼
add.addEventListener("click", () => {
  if (inp.value == "") {
    alert("할 일을 입력하세요!");
  } else {
    const myLi = document.createElement("li");
    const myBtn = document.createElement("button");

    myLi.innerHTML = inp.value;
    myBtn.innerHTML = "X";
    myBtn.setAttribute("type", "button");

    listWrap.appendChild(myLi);
    myLi.appendChild(myBtn);

    myLi.classList.add("li-style");
    inp.value = "";

    myLi.addEventListener("click", () => {
      myLi.classList.toggle("horizontal-line");
    });
    myBtn.addEventListener("click", () => {
      listWrap.removeChild(myLi);
    });
  }
});

// 개별삭제 버튼
// const delBtn = document.querySelectorAll("li button");
// console.log(delBtn.length);
// for (let i = 0; i < delBtn.length; i++)
//   delBtn[i].addEventListener("click", () => {
//     document.querySelector(".list-wrap").removeChild("myLi");
//     console.log(delBtn.length);
//   });

// myBtn.onClick = function (e) {
//   let pnode = e.target.parentNode;
//   listWrap.removeChild(pnode);
// };

// // 완료 처리 버튼
// myLi.addEventListener("click", () => {
//   myLi.classList.add("horizontal-line");
// });

// 모두 삭제 버튼
$delete.addEventListener("click", () => {
  let yes = confirm("정말 모두 삭제하시겠습니까?");
  if (yes) {
    const $lis = document.querySelectorAll("li");
    for (let i = 0; i < $lis.length; i++) {
      listWrap.removeChild($lis[i]);
    }
  }
});
