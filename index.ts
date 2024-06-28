/* ------ FIZZ BUZZ -------*/
// import { FizzBuzz } from "./src/fizz-buzz/fizz-buzz";

// for (let index = 1; index <= 100; index++) {
//     FizzBuzz.printFizzBuzzResult(index);
// }


/* ------ TENNIS SCORE -------*/
import { TennisScore } from "./src/tennis-score/TennisScore";

let tennisScore = new TennisScore();
console.log("player1:", tennisScore.wonPointsPlayer1);
console.log("player2:", tennisScore.wonPointsPlayer2);
tennisScore.incrementPlayerPoints(2);
console.log("player2:", tennisScore.wonPointsPlayer2);