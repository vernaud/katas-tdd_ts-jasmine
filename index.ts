/* ------ FIZZ BUZZ -------*/
// import { FizzBuzz } from "./src/fizz-buzz/fizz-buzz";

// for (let index = 1; index <= 100; index++) {
//     FizzBuzz.printFizzBuzzResult(index);
// }


/* ------ TENNIS SCORE -------*/
import { TennisScore } from "./src/tennis-score/TennisScore";

let tennisScore = new TennisScore();
console.log(`Début du match:`);
console.log(`Player1 - ${tennisScore.getWonPointsPlayer(1)} | ${tennisScore.getWonPointsPlayer(2)} - Player2`);

console.log(`Player2 win a point`);
tennisScore.incrementPlayerPoints(2);
console.log(`Player1 - ${tennisScore.getWonPointsPlayer(1)} | ${tennisScore.getWonPointsPlayer(2)} - Player2`);