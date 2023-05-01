const SCISSORS = '찌';
const ROCK = '묵';
const PAPER = '빠';

let userInput = prompt('찌, 묵, 빠!');

//사용자 입력값에 대한 유효성 검사
if (userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER) {
    alert('묵, 찌, 빠 중 하나를 입력해야 합니다!');

} else {

    let comInput;

    //Math.random(랜덤함수) : 실행할때마다 0 이상 ~ 1 미만의 값을 리턴 
    let rnd = Math.random();

    if (rnd < 0.33) {
        comInput = SCISSORS;
    } else if (rnd < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    switch (userInput) {
        case SCISSORS:
            switch (comInput) {
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput} - 비겼습니다.`);
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput} - 졌습니다ㅠㅠ`);
                    break;
                default:
                    alert(`컴퓨터 : ${comInput} - 이겼습니다!`);
                    break;
            }
            break;
        case ROCK:
            switch (comInput) {
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput} - 이겼습니다!`);
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput} - 비겼습니다.`);
                    break;
                default:
                    alert(`컴퓨터 : ${comInput} - 비겼습니다.`);
                    break;
            }
            break;
        default:
            switch (comInput) {
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput} - 졌습니다ㅠㅠ`);
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput} - 이겼습니다!`);
                    break;
                default:
                    alert(`컴퓨터 : ${comInput} - 비겼습니다.`);
                    break;
            }
            break;

    }
}