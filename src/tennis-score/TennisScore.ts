export class TennisScore {
  private _wonPointsPlayer1: number = 0;
  private _wonPointsPlayer2: number = 0;

  public get wonPointsPlayer1(): number {
    return this.convertPointsToScore(this._wonPointsPlayer1);
  }

  public get wonPointsPlayer2(): number {
    return this.convertPointsToScore(this._wonPointsPlayer2);
  }

  /**
   * Convert the number of exchanges won to the tennis score
   * @param nb : number - Number of exchanges won
   * @returns : number - Score in tennis
   * @throws : Error - If the number of points is not in [0,1,2,3]
   */
  private convertPointsToScore(nb: number): number {
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
   * Increment the score of player1 or player2
   * @param player : number - Id of the player (1 or 2)
   */
  incrementPlayerPoints(player: number): void {
    switch (player) {
      case 1:
        if (this._wonPointsPlayer1 < 3) {
            this._wonPointsPlayer1++;
        }
        break;
      case 2:
        if (this._wonPointsPlayer2 < 3) {
            this._wonPointsPlayer2++;
        }
        break;
      default:
        throw new Error("Invalid player");
    }
  }
}
