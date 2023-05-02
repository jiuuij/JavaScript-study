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

let computerChoice = 'scissors';
//setInterval이었다가 changeComputerHand로 함수를 만들어준 이유? 
//데이터를 수정하는(computerChoice)와 화면을 수정하는 ($computer.style.background)로 나뉘어 있다.
//데이터는 다른곳에서 자주 재사용되므로 데이터와 화면을 분리해서 프로그래밍 하는 것이 좋다.
setInterval(() => {
    if (computerChoice === 'scissors') {// 가위면
        computerChoice = 'rock';
    } else if (computerChoice === 'rock') {// 바위
        computerChoice = 'paper';

    } else { // 보 
        computerChoice = 'scissors';
    }
    //[]를 쓴 이유는 우린 변수의 값이 필요하기 때문이다. 
    //computerChoice = 'scissors'에서 필요한 것은 'scissors'이고 그래야 imgX에서 지정한 값인 0을 가져오기 때문.
    $computer.style.background  = `url(${IMG_URL}) ${imgX[computerChoice]} 0`;
    $computer.style.backgroundSize = 'auto 200px'
}, 80);

