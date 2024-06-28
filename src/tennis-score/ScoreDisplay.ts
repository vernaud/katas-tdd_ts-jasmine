import { TennisScore } from "./TennisScore";

export class ScoreDisplay {

    static displayScoreToLog(): void{
        TennisScore.getScore();
        console.log("Player1 - 0 | 0 - Player2");
    }
    
}

