export class ScoreDisplay {

    /**
     * Convert the number of exchanges won to the tennis score
     * @param nb : number - Number of exchanges won
     * @returns : number - Score in tennis
     */
    static convertPointsToScore(nb: number): number {
        if (nb === 0) {
            return 0;
        }
        if (nb === 1) {
            return 15;
        }
        if (nb === 2) {
            return 30;
        }
        if (nb === 3) {
            return 40;
        }
        else {
            throw new Error("Invalid number of points");
        }
    }

    static displayScoreToLog(): void{
        console.log("Player1 - 0 | 0 - Player2");
    }
    
}