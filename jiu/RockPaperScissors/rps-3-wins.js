const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL ='./rps.png';
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px';

const imgX = {
    rock: '0', //바위 0
    scissors : '-145px', // 가위 1
    paper : '-275px', //보  -1
};

let computerChoice = 'scissors';
//setInterval이었다가 changeComputerHand로 함수를 만들어준 이유? 
//데이터를 수정하는(computerChoice)와 화면을 수정하는 ($computer.style.background)로 나뉘어 있다.
//데이터는 다른곳에서 자주 재사용되므로 데이터와 화면을 분리해서 프로그래밍 하는 것이 좋다.
const changeComputerHand = () => {
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
    $computer.style.backgroundSize = 'auto 200px';
    //여기에 setInterval(changeComputerHand,100); 가 들어가면 재귀함수가 되는 것.
    //그런데 setTimeout,setInterval은 정확한 시간이 아니다. 앞의 코드들이 다 끝난 후 초가 시작되기 때문이지만 대부분 비슷하기 때문에 그냥 쓴다.
    //💥함수간의 간격을 1초로 보장해달라 -> setInterval
    //💥함수간의 간격이 1초 정도 띄워 지기만 하면 된다  -> setTimeout
}
let intervalID = setInterval(changeComputerHand, 80);

const scoreTable = {
    rock: 0,
    scissors: 1,
    paper:-1,
};
//clickButton 5번 호출 하면 인터벌 1, 2,3,4,5번 으로 순서대로 덮어쓰면서 저장하다 보니 마지막엔 5번만 intervalID에 저장된다.
//clearInterval 하면 인터벌 5번만 취소 되고 1,2,3,4는 계속 돌아가서 엄청 빨리 돌게 됨.
//방법 1 setTimeout안에 clearInterval(intervalID); 또 해주는 것임. -> 멈춘 동안 다른 버튼 누르면 버튼 실행 되어버림.
//방법 2 방법1로 clear해준다음 아예 removeEventlistner했다가 다시 addEventlistner 로 살리기 -> 코드가 너무 길어지고 복잡함
//방법 3 새로운 변수를 만들어 false일 때 실행되지 않도록 flag변수로 clickable사용.(버튼은 눌러짐) -> 권장
let clickable = true;
let computer = 0;
let me = 0;
const clickButton = () => {
    if (clickable) {
        clearInterval(intervalID);
        clickable = false;
    //점수 계산 및 화면 표시
        const myChoice = event.target.textContent === '✊🏻'
        ? 'rock'
        : event.target.textContent === '✌🏻'
         ? 'scissors'
         : 'paper';
         const myScore = scoreTable[myChoice];
        const computerScore = scoreTable[computerChoice];
        const diff = myScore - computerScore;
        console.log(computerChoice, myChoice, computerScore, myScore, diff)
        // 💥 if (diff === 2 || diff === -1) 를 [2, -1].includes(diff) 로 바꿔주기. 
        // 왜냐면 비교대상이 3개 이상이 되면 코드가 너무 길어지니까 includes(diff) 사용하기
        // 하지만 줄이는게 더 해석하기 어려울 수도 있으니까 마냥 좋은 방법이라고 할 순 없다. 알아보기 쉬운 걸로 쓰기
        // if (diff === 2 || diff === -1) {
        //     console.log('승리');
        // } else if (diff === -2 || diff === 1) {
        //     console.log('패배');
        // } else {
        //     console.log('무승부');
        // }
        let message;
        if ([2,-1].includes(diff)) {
            me += 1;
            message = '승리';
        } else if ([-2,1].includes(diff)) {
            computer += 1;
            message = '패배';
        } else {
            message = '무승부';
        }
        //💥 if (me === 3) 처럼 ===하는 게 이론상으론 맞지만 버그로 인해서 3점보다 더 많이 받는 경우가 발생할 때도 값을 도출하기 위함
        if (me >= 3) {
            alert($score.textContent = `👅내가 이겼지롱👅 ${me}:${computer}`);
        } else if (computer >= 3) {
            alert($score.textContent = `😭컴퓨터 승리😭 ${me}:${computer}`);
        } else {
            $score.textContent = `${message} ${me}:${computer}`;
            setTimeout(() => {
                clickable = true;
                intervalID = setInterval(changeComputerHand, 80);
            }, 1000);
        }
    }    
};

$rock.addEventListener('click',clickButton);
$scissors.addEventListener('click',clickButton);
$paper.addEventListener('click',clickButton);



/**❗리팩토링 할 때 ❗
 * 재대결 알림창 만들기
 * 버튼 active 때 background-color 천천히 사라지게
 * 로컬스토리지해서 재대결 할 때마다 밑에 쌓이게 하기
 */