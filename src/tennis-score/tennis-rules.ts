export class TennisRules {

  /**
   * Game is win with 4 points.
   */
  private static GAME_WIN = 4;
    
    /**
   * Convert the number of exchanges won to the tennis score
   * @param nb : number - Number of exchanges won
   * @returns : number - Score in tennis
   * @throws : Error - If the number of points is not in [0,1,2,3]
   */
  public static convertPointsToScore(nb: number): number {
    switch (nb) {
      case 0:
        return 0;
      case 1:
        return 15;
      case 2:
        return 30;
      case 3:
        return 40;
      default:
        throw new Error("Invalid number of points");
    }
  }

  /**
   * Controll if the game is over
   * @param nbPoints 
   * @returns 
   */
  public static isEndGame(nbPoints: number): boolean {
    return nbPoints == TennisRules.GAME_WIN;
  }

}