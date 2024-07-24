// const number = Math.random()
// console.log(number);

const prompt = require('prompt-sync')({siglnt:true});

let targetNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;
let guess = null;

while (guess !== targetNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    if (targetNumber < guess) {
        console.log("그것보다 작아요!");
    } else if (targetNumber > guess) {
        console.log("그것보다 커요!");
    } else {
        console.log("정답이에요!");
        break;
    }
}
