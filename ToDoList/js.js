// const input = document.getElementById("userInput"); // input 태그 가져오기
// const button = document.querySelector("button"); // button 태그 가져오기
// const list = document.querySelector(".listInput"); // 리스트 태그 가져오기

// button.addEventListener("click", function () {
//   // 버튼에 이벤트 리스너 추가
//   if (input.value !== "") {
//     // 입력된 값이 비어있지 않은 경우에만 실행
//     const listItem = document.createElement("div"); // 새로운 리스트 아이템 생성
//     listItem.textContent = input.value; // 입력된 텍스트를 리스트 아이템에 할당
//     list.appendChild(listItem); // 리스트에 아이템 추가
//     //appendChild() -> DOM 요소에 자식 요소를 추가하는 메소드
//     input.value = ""; // 입력 창 초기화
//   }
// });

Copy code
<!DOCTYPE html>
<html>
<head>
	<title>To do List</title>
</head>
<body>
	<input type="text" id="userInput">
	<button>Add</button>
	<div class="listInput"></div>

	<script>
		const input = document.getElementById("userInput");
		const button = document.querySelector("button");
		const list = document.querySelector(".listInput");

		button.addEventListener("click", function() {
			if(input.value !== "") {
				const listItem = document.createElement("div");
				const checkbox = document.createElement("input"); // 체크박스 요소 생성
				checkbox.type = "checkbox"; // 체크박스 타입 지정
				listItem.appendChild(checkbox); // 체크박스를 리스트 아이템에 추가
				listItem.appendChild(document.createTextNode(input.value)); // 텍스트 노드를 리스트 아이템에 추가
				list.appendChild(listItem);

				checkbox.addEventListener("click", function() { // 체크박스에 이벤트 리스너 추가
					if(this.checked) { // 체크박스가 선택된 경우
						listItem.style.textDecoration = "line-through"; // 체크박스 아이템에 취소선 추가
					} else { // 체크박스가 선택되지 않은 경우
						listItem.style.textDecoration = "none"; // 체크박스 아이템의 취소선 제거
					}
				});

				const deleteButton = document.createElement("button"); // 삭제 버튼 요소 생성
					deleteButton.textContent = "Delete"; // 삭제 버튼 텍스트 지정
				listItem.appendChild(deleteButton); // 삭제 버튼을 리스트 아이템에 추가

				deleteButton.addEventListener("click", function() { // 삭제 버튼에 이벤트 리스너 추가
					list.removeChild(listItem); // 리스트 아이템 제거
				});

				input.value = "";
			}
		});
	</script>
</body>
</html>