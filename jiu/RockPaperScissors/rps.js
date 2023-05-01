const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL ='./rps.png';
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px';

const imgX = {
    scissors: '0', //가위
    rock : '-145px', //바위
    paper : '-275px', //보 
};


// if else if else 괄호안에 꺼는 함수로 빼서 사용 가능하다 - 리팩토링 할 때 해보기
let coord = '0';
setInterval(() => {
    if (coord === imgX.scissors) {// 가위면
        coord = imgX.rock;
        $computer.style.background  = `url(${IMG_URL}) ${imgX.rock} 0`;
        $computer.style.backgroundSize = 'auto 200px'
    } else if (coord === imgX.rock) {// 바위
        coord = imgX.paper;
        $computer.style.background  = `url(${IMG_URL}) ${imgX.paper} 0`;
        $computer.style.backgroundSize = 'auto 200px'
    } else if (coord === imgX.paper) { // 보 
        coord = imgX.scissors;
        $computer.style.background  = `url(${IMG_URL}) ${imgX.scissors} 0`;
        $computer.style.backgroundSize = 'auto 200px'
    }
}, 80);