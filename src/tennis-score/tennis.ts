export class ScoreDisplay {
    static convertPointsToScore(arg0: number): number {
        if (arg0 === 0) {
            return 0;
        }
        if (arg0 === 1) {
            return 15;
        }
        if (arg0 === 2) {
            return 30;
        }
        if (arg0 === 3) {
            return 40;
        }
        return arg0;
    }
    static displayScoreToLog(): void{
        console.log("Player1 - 0 | 0 - Player2");
    }
    
}