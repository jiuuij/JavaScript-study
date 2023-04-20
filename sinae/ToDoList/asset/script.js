
// * 변수 선언.
const inputBtn = document.querySelector('.input-btn');
const inputTodo = document.querySelector('#inputTodo');
const todoList = document.querySelector('.todo-list');
const todoListItem = document.querySelectorAll('.todo-list li');
const checked = document.querySelectorAll('.todo-list input[type=checked]');


// * 리스트를 추가하는 리스너 함수.
inputBtn.addEventListener('click', function (e) {
    // 클릭 기본동작 막기.
    e.preventDefault();

    // checkbox 생성.
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // li, span 생성.
    const list = document.createElement('li');
    const listContent = document.createElement('span');

    // button 생성.
    const listBtn = document.createElement('button');
    listBtn.textContent = '삭제';

    // input에 입력된 값 가져오기.
    const todoValue = inputTodo.value;
    listContent.textContent = todoValue;

    // 입력된 값이 있다면 li에 추가하고 value값 초기화.
    // 입력된 값이 없다면 알림창 띄우기.
    if (todoValue !== '') {
        todoList.appendChild(list);
        list.appendChild(checkbox);
        list.appendChild(listContent);
        list.appendChild(listBtn);
        inputTodo.value = '';
    } else {
        alert('🐥 메모를 입력해주세요!')
    }
});


// * 리스트 제어하는 리스너 함수.
todoList.addEventListener('click', function (e) {
    if (e.target.nodeName === "BUTTON") {
        e.target.parentNode.remove(); // 삭제
    } else if (e.target.nodeName === "INPUT") {
        e.target.parentNode.classList.toggle('checked'); // 체크
    }
});